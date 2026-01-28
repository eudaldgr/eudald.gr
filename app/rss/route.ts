import { baseUrl } from 'app/sitemap'
import { getBlogPosts } from 'app/blog/utils'
import { resolveMetadataTitle, siteMetadata } from 'app/site-metadata'

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

export async function GET() {
  let allBlogs = await getBlogPosts()
  const channelTitle = resolveMetadataTitle(siteMetadata.title) ?? 'Blog'
  const channelDescription = siteMetadata.description ?? ''

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .map(
      (post) =>
        `<item>
          <title>${escapeXml(post.metadata.title)}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${escapeXml(post.metadata.summary || '')}</description>
          <pubDate>${new Date(
          post.metadata.publishedAt
        ).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>${escapeXml(channelTitle)}</title>
        <link>${baseUrl}</link>
        <description>${escapeXml(channelDescription)}</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
