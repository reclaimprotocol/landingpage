import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reclaim Protocol - Cryptographic Verification for Identity, Education, Employment & Travel",
  description: "The world's first global verification protocol using zero-knowledge proofs. Verify student enrollment, employment, travel loyalty status, and identity from 29,000+ universities, 100+ airlines & hotels. Instant verification in 30 seconds with cryptographic proof - no document uploads, no forgery. Privacy-preserving, fraud-resistant verification powered by ZK cryptography.",
  keywords: [
    "identity verification",
    "student verification",
    "employment verification",
    "zero knowledge proof",
    "cryptographic verification",
    "document verification",
    "status match",
    "education verification",
    "zk proof",
    "privacy preserving verification",
    "fraud prevention",
    "reclaim protocol",
  ],
  authors: [{ name: "Reclaim Protocol" }],
  creator: "Reclaim Protocol",
  publisher: "Reclaim Protocol",
  metadataBase: new URL('https://reclaimprotocol.org'),
  openGraph: {
    title: "Reclaim Protocol - Global Cryptographic Verification",
    description: "Verify identity, education, employment, and travel status using zero-knowledge proofs. 3M+ verifications with zero fraud. No document uploads - direct verification from source.",
    url: 'https://reclaimprotocol.org',
    siteName: 'Reclaim Protocol',
    images: [
      {
        url: '/meta-image-home.png',
        width: 1200,
        height: 630,
        alt: 'Reclaim Protocol - Cryptographic Verification',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reclaim Protocol - Cryptographic Verification',
    description: 'Verify identity, education, employment & travel status with zero-knowledge proofs. 30 second verification, zero fraud.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
