import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employment & Income Verification | Reclaim Protocol",
  description: "Verify employment and income directly from payroll systems, tax authorities, and gig platforms. No phishing, no stale databases. Global coverage. Cryptographically secure.",
  metadataBase: new URL('https://reclaimprotocol.org'),
  alternates: { canonical: '/employment' },
  openGraph: {
    title: "Employment & Income Verification | Reclaim Protocol",
    description: "Verify employer and income from 10,000+ sources globally. No credential capture. Cryptographic proof.",
    url: 'https://reclaimprotocol.org/employment',
    siteName: 'Reclaim Protocol',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employment & Income Verification | Reclaim Protocol',
    description: 'Verify employment and income without phishing. 10,000+ payroll sources globally.',
    creator: '@reclaimprotocol',
  },
};

export default function EmploymentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
