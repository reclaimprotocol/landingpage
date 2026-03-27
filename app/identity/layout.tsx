import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Identity Verification - Government Portal Verification | Reclaim Protocol",
  description: "Verify identity, age, and citizenship from authoritative government portals worldwide. No ID uploads, no privacy law violations. Instant cryptographic verification with zero-knowledge proofs.",
  keywords: [
    "identity verification",
    "government portal verification",
    "age verification",
    "citizenship verification",
    "KYC verification",
    "ID verification",
    "zero knowledge proof",
    "cryptographic verification",
    "privacy preserving identity",
    "global identity verification",
  ],
  metadataBase: new URL('https://reclaimprotocol.org'),
  openGraph: {
    title: "Identity Verification - Government Portal Verification",
    description: "Verify identity, age, and citizenship from authoritative government portals. No ID uploads, no privacy violations.",
    url: 'https://reclaimprotocol.org/identity',
    siteName: 'Reclaim Protocol',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Identity Verification - Government Portal Verification',
    description: 'Verify identity, age, and citizenship from authoritative government portals. No ID uploads, no privacy violations.',
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

export default function IdentityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
