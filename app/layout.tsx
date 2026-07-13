import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Global Verification from $0.10 at Scale | Reclaim Protocol",
  description: "Verify education, current employment and loyalty status globally for $1 or less, with Enterprise rates from $0.10. Start with 25 free verifications every month.",
  keywords: [
    "identity verification",
    "student verification",
    "employment verification",
    "global verification API",
    "low cost verification",
    "verification pricing",
    "status match",
    "education verification",
    "employment verification pricing",
    "education verification pricing",
    "loyalty status verification",
    "reclaim protocol",
  ],
  authors: [{ name: "Reclaim Protocol" }],
  creator: "Reclaim Protocol",
  publisher: "Reclaim Protocol",
  metadataBase: new URL('https://reclaimprotocol.org'),
  openGraph: {
    title: "Global Verification from $0.10 at Scale",
    description: "Education, employment and loyalty verification for $1 or less. Start with 25 free checks and scale to $0.10.",
    url: 'https://reclaimprotocol.org',
    siteName: 'Reclaim Protocol',
    images: [
      {
        url: '/meta-image-home.png',
        width: 1200,
        height: 630,
        alt: 'Reclaim Protocol - Global verification from $0.10 at scale',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Verification from $0.10 at Scale | Reclaim Protocol',
    description: 'Education, employment and loyalty verification for $1 or less, with 25 free checks every month.',
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
      <body className={ibmPlexMono.variable}>
        {children}
      </body>
    </html>
  );
}
