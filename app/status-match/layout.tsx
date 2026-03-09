import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Status Match - Instant Travel Loyalty Verification | Reclaim Protocol",
  description: "Verify airline, hotel, and cruise loyalty status instantly with cryptographic proof. 100+ travel programs supported including Delta, United, American Airlines, Marriott, Hilton. No screenshots - instant verification in 30 seconds. Fraud-resistant status matching powered by zero-knowledge proofs.",
  keywords: [
    "status match",
    "travel loyalty verification",
    "airline status verification",
    "hotel status verification",
    "cruise loyalty verification",
    "loyalty program verification",
    "delta status match",
    "united status match",
    "marriott status match",
    "hilton status match",
    "zero knowledge proof",
    "cryptographic verification",
    "fraud prevention",
  ],
  metadataBase: new URL('https://reclaimprotocol.org'),
  openGraph: {
    title: "Status Match - Instant Travel Loyalty Verification",
    description: "Verify airline, hotel & cruise loyalty status instantly. 100+ programs. No screenshots. Cryptographic proof in 30 seconds.",
    url: 'https://reclaimprotocol.org/status-match',
    siteName: 'Reclaim Protocol',
    images: [
      {
        url: '/meta-image-statusmatch.png',
        width: 1200,
        height: 630,
        alt: 'Reclaim Protocol - Status Match Verification',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Status Match - Instant Travel Loyalty Verification',
    description: 'Verify airline, hotel & cruise loyalty status with zero-knowledge proofs. 100+ programs. 30 second verification.',
    images: ['/meta-image-statusmatch.png'],
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

export default function StatusMatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
