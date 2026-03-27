import { NextRequest, NextResponse } from 'next/server';
import { ReclaimProofRequest } from '@reclaimprotocol/js-sdk';

export async function POST(request: NextRequest) {
  try {
    const { providerId } = await request.json();

    if (!providerId) {
      return NextResponse.json({ error: 'Provider ID is required' }, { status: 400 });
    }

    console.log('Reclaim verify request:', {
      appId: process.env.RECLAIMPROTOCOL_APP_ID,
      appSecret: process.env.RECLAIMPROTOCOL_APP_SECRET,
      providerId,
    });

    const reclaimProofRequest = await ReclaimProofRequest.init(
      process.env.RECLAIMPROTOCOL_APP_ID!,
      process.env.RECLAIMPROTOCOL_APP_SECRET!,
      providerId
    );

    const proofRequestUrl = await reclaimProofRequest.getRequestUrl();

    console.log('Generated verification URL:', proofRequestUrl);

    return NextResponse.json({ url: proofRequestUrl });
  } catch (error) {
    console.error('Reclaim verification error:', error);
    return NextResponse.json({ error: 'Failed to create verification request' }, { status: 500 });
  }
}
