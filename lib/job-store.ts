// Simple in-memory job store
// Note: For production with multiple instances, use Redis or a database

export interface Job {
  id: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  result?: string; // Base64 encoded result
  error?: string;
  contentType?: string;
  filename?: string;
  createdAt: number;
}

const jobs = new Map<string, Job>();

// Clean up old jobs after 10 minutes
const JOB_RETENTION_MS = 10 * 60 * 1000;

setInterval(() => {
  const now = Date.now();
  for (const [id, job] of jobs.entries()) {
    if (now - job.createdAt > JOB_RETENTION_MS) {
      jobs.delete(id);
    }
  }
}, 60000); // Clean every minute

export const jobStore = {
  create(id: string): Job {
    const job: Job = {
      id,
      status: 'pending',
      createdAt: Date.now(),
    };
    jobs.set(id, job);
    return job;
  },

  get(id: string): Job | undefined {
    return jobs.get(id);
  },

  update(id: string, updates: Partial<Job>): void {
    const job = jobs.get(id);
    if (job) {
      Object.assign(job, updates);
    }
  },

  delete(id: string): void {
    jobs.delete(id);
  },
};
