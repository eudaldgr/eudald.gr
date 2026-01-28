import type { Metadata } from 'next'
import { baseUrl } from 'app/sitemap'

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "El web de l'Eudald",
    template: "%s | El web de l'Eudald",
  },
  description: 'Aquest és el meu web.',
  openGraph: {
    title: "El web de l'Eudald",
    description: 'Aquest és el meu web.',
    url: baseUrl,
    siteName: "El web de l'Eudald",
    locale: 'ca-ES',
    type: 'website',
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
}

export function resolveMetadataTitle(title: Metadata['title']) {
  if (!title) return undefined
  if (typeof title === 'string') return title
  if (typeof title === 'object' && 'default' in title) {
    return title.default as string
  }
  return undefined
}

