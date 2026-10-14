import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Reclaim Protocol | Source-account verification",
  description: "Verify user-provided claims directly from source accounts with Reclaim Protocol.",
  metadataBase: new URL('https://reclaimprotocol.org'),
  authors: [{ name: 'Reclaim Protocol' }],
  creator: 'Reclaim Protocol',
  publisher: 'Reclaim Protocol',
  robots: { index: true, follow: true },
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
