import { NextRequest, NextResponse } from 'next/server';
import { jobStore } from '@/lib/job-store';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const { jobId } = await params;

  if (!jobId) {
    return NextResponse.json(
      { error: 'Job ID required' },
      { status: 400 }
    );
  }

  const job = jobStore.get(jobId);

  if (!job) {
    return NextResponse.json(
      { error: 'Job not found' },
      { status: 404 }
    );
  }

  // Return status and result if completed
  if (job.status === 'completed' && job.result) {
    return NextResponse.json({
      status: job.status,
      contentType: job.contentType,
      filename: job.filename,
      result: job.result, // Base64 encoded document
    });
  }

  // Return status and error if failed
  if (job.status === 'failed') {
    return NextResponse.json({
      status: job.status,
      error: job.error,
    });
  }

  // Still processing
  return NextResponse.json({
    status: job.status,
  });
}
