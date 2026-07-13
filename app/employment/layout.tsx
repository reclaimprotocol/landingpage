import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Employment Verification | Argyle & Truv Alternative",
  description: "A global, low-cost alternative to Argyle, Truv, MeasureOne and The Work Number. Verify current employer, title and income across 90+ countries from $0.10 at scale.",
  keywords: [
    "global employment verification",
    "income verification API",
    "Argyle alternative",
    "Truv alternative",
    "MeasureOne alternative",
    "The Work Number alternative",
    "international employment verification",
    "current employer verification",
    "employment verification pricing",
  ],
  metadataBase: new URL('https://reclaimprotocol.org'),
  alternates: { canonical: '/employment' },
  openGraph: {
    title: "Global Employment Verification from $0.10 at Scale",
    description: "Compare Reclaim with Argyle, Truv, MeasureOne and The Work Number. Verify current employment and income across 90+ countries.",
    url: 'https://reclaimprotocol.org/employment',
    siteName: 'Reclaim Protocol',
    images: [
      {
        url: '/meta-image-home.png',
        width: 1200,
        height: 630,
        alt: 'Reclaim Protocol global employment verification',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Employment Verification from $0.10 at Scale',
    description: 'A global, transparent-price alternative to Argyle, Truv, MeasureOne and The Work Number.',
    images: ['/meta-image-home.png'],
    creator: '@reclaimprotocol',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function EmploymentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
