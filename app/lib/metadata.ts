import type { Metadata } from 'next';

export function marketingMetadata(title: string, description: string, path: string, image: string): Metadata {
  return {
    title: `${title} | Reclaim Protocol`, description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: 'Reclaim Protocol', type: 'website', locale: 'en_US', images: [{ url: image, width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: [image], creator: '@reclaimprotocol' },
  };
}
