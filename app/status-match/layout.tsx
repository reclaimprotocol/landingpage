import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Status Match Verification Is Broken. Here's the 30-Second Proof. | Reclaim Protocol",
  description: "We faked an airline elite status match using nothing but Chrome's inspect-element tool. Here's the video, the public record, and the cryptographic alternative.",
  keywords: [
    "status match fraud",
    "status match verification",
    "airline status match exploit",
    "screenshot verification broken",
    "loyalty fraud prevention",
    "zero knowledge proof status match",
    "cryptographic verification airline",
    "status match security",
    "elite tier fraud",
    "airline loyalty verification",
  ],
  metadataBase: new URL('https://reclaimprotocol.org'),
  alternates: {
    canonical: '/status-match',
  },
  openGraph: {
    title: "Status Match Verification Is Broken. Here's the 30-Second Proof.",
    description: "We faked an airline elite status match using nothing but Chrome's inspect-element tool. Here's the video, the public record, and the cryptographic alternative.",
    url: 'https://reclaimprotocol.org/status-match',
    siteName: 'Reclaim Protocol',
    images: [
      {
        url: '/meta-image-statusmatch.png',
        width: 1200,
        height: 630,
        alt: 'Status Match Verification Is Broken — Reclaim Protocol',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Status Match Verification Is Broken. Here\'s the 30-Second Proof.',
    description: 'We faked an airline elite status match with Chrome\'s inspect-element tool. Video, public record, and the cryptographic alternative.',
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
