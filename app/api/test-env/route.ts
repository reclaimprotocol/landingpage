import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasQwenKey: !!process.env.QWEN_API_KEY,
    qwenKeyLength: process.env.QWEN_API_KEY?.length || 0,
    qwenKeyPreview: process.env.QWEN_API_KEY ? `${process.env.QWEN_API_KEY.substring(0, 8)}...` : 'NOT SET',
    nodeEnv: process.env.NODE_ENV,
  });
}
