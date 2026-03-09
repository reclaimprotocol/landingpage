import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Verification - Global University Enrollment Verification | Reclaim Protocol",
  description: "Verify student enrollment from 29,000+ universities worldwide with cryptographic proof. Instant academic verification. Not just .edu emails - actual enrollment data. 30 second verification with zero-knowledge proofs. Fresh, privacy-preserving student verification at global scale.",
  keywords: [
    "student verification",
    "university verification",
    "enrollment verification",
    "education verification",
    "student status verification",
    ".edu email verification",
    "academic verification",
    "global student verification",
    "zero knowledge proof",
    "cryptographic verification",
    "student discount verification",
  ],
  metadataBase: new URL('https://reclaimprotocol.org'),
  openGraph: {
    title: "Student Verification - Global University Enrollment Verification",
    description: "Verify enrollment from 29,000+ universities with cryptographic proof. 30 second verification with actual academic data.",
    url: 'https://reclaimprotocol.org/education',
    siteName: 'Reclaim Protocol',
    images: [
      {
        url: '/meta-image-education.png',
        width: 1200,
        height: 630,
        alt: 'Reclaim Protocol - Student Verification',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Verification - Global University Enrollment Verification',
    description: 'Verify enrollment from 29,000+ universities with zero-knowledge proofs. 30 second verification.',
    images: ['/meta-image-education.png'],
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

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
