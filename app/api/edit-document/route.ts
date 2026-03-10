import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument } from 'pdf-lib';
import { createCanvas, loadImage } from 'canvas';
import sharp from 'sharp';
import { jobStore } from '@/lib/job-store';
import crypto from 'crypto';

// Set timeout to 30 seconds (Amplify limit)
export const maxDuration = 30;
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Debug: Log environment variables status
    console.log('Environment check:', {
      hasQwenKey: !!process.env.QWEN_API_KEY,
      hasOpenAIKey: !!process.env.OPENAI_API_KEY,
      qwenKeyLength: process.env.QWEN_API_KEY?.length || 0,
    });

    const formData = await request.formData();
    const imageFile = formData.get('image') as File; // Frontend sends converted image
    const originalFile = formData.get('originalFile') as File; // Original PDF for editing
    const prompt = formData.get('prompt') as string;
    const model = (formData.get('model') as string) || 'qwen3';

    if (!imageFile || !prompt) {
      return NextResponse.json(
        { error: 'Image and prompt are required' },
        { status: 400 }
      );
    }

    // Generate unique job ID
    const jobId = crypto.randomBytes(16).toString('hex');

    // Create job in store
    jobStore.create(jobId);

    // Convert image to base64
    const imageBytes = await imageFile.arrayBuffer();
    const imageBuffer = Buffer.from(imageBytes);
    const imageBase64 = imageBuffer.toString('base64');

    // Get filename for later
    const filename = originalFile ? originalFile.name : imageFile.name;
    const isPDF = !!originalFile;

    // Start async processing (don't await)
    processDocumentAsync(jobId, imageBase64, prompt, model, imageFile.type, isPDF, filename);

    // Return job ID immediately
    return NextResponse.json({
      jobId,
      message: 'Job started. Poll /api/job-status/{jobId} for progress.'
    });

  } catch (error) {
    console.error('Error starting job:', error);
    return NextResponse.json(
      { error: 'Failed to start job' },
      { status: 500 }
    );
  }
}

// Async processing function
async function processDocumentAsync(
  jobId: string,
  imageBase64: string,
  prompt: string,
  model: string,
  imageType: string,
  isPDF: boolean,
  filename: string
) {
  try {
    jobStore.update(jobId, { status: 'processing' });

    // Call the selected AI model to get edited image directly
    console.log(`🤖 [Job ${jobId}] Using ${model} pipeline to generate edited image...`);
    let aiResponse: AIResponse;

    switch (model) {
      case 'gpt':
        aiResponse = await callGPTWithDALLE(imageBase64, prompt, imageType);
        break;
      case 'qwen3':
      default:
        aiResponse = await callQwenWithOpenAI(imageBase64, prompt, imageType);
        break;
    }

    if (!aiResponse.success || !aiResponse.editedImageBase64) {
      jobStore.update(jobId, {
        status: 'failed',
        error: aiResponse.error || 'Failed to generate edited image'
      });
      return;
    }

    console.log(`✅ [Job ${jobId}] Received edited image from AI`);

    // Convert base64 to buffer
    const editedImageBuffer = Buffer.from(aiResponse.editedImageBase64, 'base64');

    // Convert edited image back to PDF if original was PDF
    let finalDocument: Buffer;
    let contentType: string;

    if (isPDF) {
      console.log(`📄 [Job ${jobId}] Converting edited image back to PDF...`);
      finalDocument = await imageToPDF(editedImageBuffer);
      contentType = 'application/pdf';
    } else {
      finalDocument = editedImageBuffer;
      contentType = 'image/png';
    }

    // Store result as base64
    const resultBase64 = finalDocument.toString('base64');

    jobStore.update(jobId, {
      status: 'completed',
      result: resultBase64,
      contentType,
      filename: `edited-${filename}`,
    });

    console.log(`✅ [Job ${jobId}] Processing complete`);

  } catch (error) {
    console.error(`❌ [Job ${jobId}] Error processing document:`, error);
    jobStore.update(jobId, {
      status: 'failed',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

interface AIResponse {
  success: boolean;
  editedImageBase64?: string; // Base64 encoded edited image
  error?: string;
}

// Qwen3-VL analyzes image + Qwen Image generates edited image
async function callQwenWithOpenAI(
  base64File: string,
  userPrompt: string,
  fileType: string
): Promise<AIResponse> {
  try {
    const qwenKey = process.env.QWEN_API_KEY;

    if (!qwenKey) {
      console.error('QWEN_API_KEY not found');
      return { success: false, error: 'API keys missing' };
    }

    console.log('Step 1: Using Qwen3-VL to analyze document...');
    const imageUrl = `data:${fileType};base64,${base64File}`;

    // Step 1: Use Qwen3-VL to analyze the document
    const qwenResponse = await fetch('https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${qwenKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'qwen3-vl-flash',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: { url: imageUrl }
              },
              {
                type: 'text',
                text: `Analyze this document image. User wants to: "${userPrompt}"

Describe the COMPLETE edited document in detail for an image generator. Include:
1. Document type, layout, and structure
2. ALL existing text and elements that should remain EXACTLY as they are
3. The specific changes requested: "${userPrompt}"
4. For the text being REPLACED: measure and note the EXACT font size, font weight, letter spacing, and alignment
5. Colors, fonts, positioning, styling for ALL elements
6. Ensure the REPLACEMENT text uses the IDENTICAL font size, weight, and spacing as the original text it is replacing

CRITICAL: The edited field must use the EXACT SAME font size as the value it is replacing. Match the visual appearance precisely.

Be extremely detailed so an AI can recreate this exact document with the edits applied.`
              }
            ]
          }
        ],
        max_tokens: 2000
      })
    });

    if (!qwenResponse.ok) {
      const errorText = await qwenResponse.text();
      console.error('Qwen3-VL error:', errorText);
      return { success: false, error: 'Qwen analysis failed' };
    }

    const qwenResult = await qwenResponse.json();
    const documentDescription = qwenResult.choices?.[0]?.message?.content;

    if (!documentDescription) {
      console.error('No description from Qwen');
      return { success: false, error: 'No description generated' };
    }

    console.log('Qwen3-VL description:', documentDescription);
    console.log('\nStep 2: Using Qwen Image 2.0 to generate edited document...');

    // Step 2: Use Qwen Image 2.0 Pro to edit the document image (image-to-image)
    const imageGenResponse = await fetch('https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${qwenKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'qwen-image-2.0-pro',
        input: {
          messages: [
            {
              role: 'user',
              content: [
                {
                  image: imageUrl
                },
                {
                  text: `Edit this document: ${userPrompt}

IMPORTANT INSTRUCTIONS:
- Maintain the EXACT SAME font size, weight, and spacing for the replacement text as the original
- Keep all other elements in the document IDENTICAL to the input image
- Only change what was specifically requested: "${userPrompt}"
- Match the visual appearance precisely

Detailed description: ${documentDescription}`
                }
              ]
            }
          ]
        },
        parameters: {
          n: 1,
          negative_prompt: ' ',
          prompt_extend: true,
          watermark: false,
          size: '1536*1024'
        }
      })
    });

    if (!imageGenResponse.ok) {
      const errorText = await imageGenResponse.text();
      console.error('Qwen Image Generation error:', errorText);
      return { success: false, error: 'Image generation failed' };
    }

    const imageGenResult = await imageGenResponse.json();
    console.log('Qwen Image 2.0 response:', JSON.stringify(imageGenResult, null, 2));

    // Qwen Image 2.0 uses choices instead of results
    const generatedImageUrl = imageGenResult.output?.choices?.[0]?.message?.content?.[0]?.image;

    if (!generatedImageUrl) {
      console.error('No image URL from Qwen Image Generation. Full response:', imageGenResult);
      return { success: false, error: 'No image generated' };
    }

    // Fetch the image and convert to base64
    console.log('Fetching generated image from URL...');
    const imageResponse = await fetch(generatedImageUrl);
    if (!imageResponse.ok) {
      console.error('Failed to fetch generated image');
      return { success: false, error: 'Failed to fetch generated image' };
    }

    const imageBuffer = await imageResponse.arrayBuffer();
    const editedImageBase64 = Buffer.from(imageBuffer).toString('base64');

    console.log('✅ Edited image generated successfully');

    return {
      success: true,
      editedImageBase64
    };

  } catch (error) {
    console.error('Error in Qwen pipeline:', error);
    return { success: false, error: String(error) };
  }
}

// GPT-5 Mini Vision analyzes + GPT Image generates edited image
async function callGPTWithDALLE(
  base64File: string,
  userPrompt: string,
  fileType: string
): Promise<AIResponse> {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error('OPENAI_API_KEY not found');
      return { success: false, error: 'API key missing' };
    }

    console.log('Step 1: Using GPT-5 Mini Vision to analyze document...');
    const imageUrl = `data:${fileType};base64,${base64File}`;

    // Step 1: Use GPT-5 Mini Vision to analyze the document
    const gptResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-5-mini-2025-08-07',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: { url: imageUrl }
              },
              {
                type: 'text',
                text: `Analyze this document image. User wants to: "${userPrompt}"

Describe the COMPLETE edited document in detail for an image generator. Include:
1. Document type, layout, and structure
2. ALL existing text and elements that should remain EXACTLY as they are
3. The specific changes requested: "${userPrompt}"
4. For the text being REPLACED: measure and note the EXACT font size, font weight, letter spacing, and alignment
5. Colors, fonts, positioning, styling for ALL elements
6. Ensure the REPLACEMENT text uses the IDENTICAL font size, weight, and spacing as the original text it is replacing

CRITICAL: The edited field must use the EXACT SAME font size as the value it is replacing. Match the visual appearance precisely.

Be extremely detailed so an AI can recreate this exact document with the edits applied.`
              }
            ]
          }
        ],
        max_tokens: 2000
      })
    });

    if (!gptResponse.ok) {
      const errorText = await gptResponse.text();
      console.error('GPT-5 Mini error:', errorText);
      return { success: false, error: 'GPT analysis failed' };
    }

    const gptResult = await gptResponse.json();
    const documentDescription = gptResult.choices?.[0]?.message?.content;

    if (!documentDescription) {
      console.error('No description from GPT-5 Mini');
      return { success: false, error: 'No description generated' };
    }

    console.log('GPT-5 Mini description:', documentDescription);
    console.log('\nStep 2: Using GPT Image to generate edited document...');

    // Step 2: Use GPT Image to generate the edited document image
    const imageGenResponse = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-image-1.5-2025-12-16',
        prompt: `Create a professional document image exactly as described: ${documentDescription}`,
        n: 1,
        size: '1024x1024',
        quality: 'high'
      })
    });

    if (!imageGenResponse.ok) {
      const errorText = await imageGenResponse.text();
      console.error('GPT Image error:', errorText);
      return { success: false, error: 'Image generation failed' };
    }

    const imageGenResult = await imageGenResponse.json();
    const generatedImageUrl = imageGenResult.data?.[0]?.url;

    if (!generatedImageUrl) {
      console.error('No image URL from GPT Image');
      return { success: false, error: 'No image generated' };
    }

    // Fetch the image and convert to base64
    console.log('Fetching generated image from URL...');
    const imageResponse = await fetch(generatedImageUrl);
    if (!imageResponse.ok) {
      console.error('Failed to fetch generated image');
      return { success: false, error: 'Failed to fetch generated image' };
    }

    const imageBuffer = await imageResponse.arrayBuffer();
    const editedImageBase64 = Buffer.from(imageBuffer).toString('base64');

    console.log('✅ Edited image generated successfully');

    return {
      success: true,
      editedImageBase64
    };

  } catch (error) {
    console.error('Error in GPT-5 Mini + GPT Image pipeline:', error);
    return { success: false, error: String(error) };
  }
}

// Convert edited image to PDF
async function imageToPDF(imageBuffer: Buffer): Promise<Buffer> {
  try {
    const pdfDoc = await PDFDocument.create();

    // Get image dimensions
    const image = await loadImage(imageBuffer);

    // Create page with image dimensions
    const page = pdfDoc.addPage([image.width, image.height]);

    // Embed image (detect type from buffer)
    let embeddedImage;
    const imageType = await sharp(imageBuffer).metadata();

    if (imageType.format === 'png') {
      embeddedImage = await pdfDoc.embedPng(imageBuffer);
    } else {
      embeddedImage = await pdfDoc.embedJpg(imageBuffer);
    }

    // Draw image on page
    page.drawImage(embeddedImage, {
      x: 0,
      y: 0,
      width: image.width,
      height: image.height,
    });

    const pdfBytes = await pdfDoc.save();
    return Buffer.from(pdfBytes);
  } catch (error) {
    console.error('Error converting image to PDF:', error);
    throw error;
  }
}

