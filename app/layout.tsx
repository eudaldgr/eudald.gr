import '@/global.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from '@/components/nav'
import Footer from '@/components/footer'
import { siteMetadata } from 'app/site-metadata'

export const metadata = siteMetadata

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ca"
      suppressHydrationWarning
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(() => {
  try {
    const key = 'theme';
    const stored = localStorage.getItem(key);
    const pref = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
    const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = pref === 'dark' || (pref === 'system' && systemDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    document.documentElement.dataset.theme = pref;
  } catch {}
})();
            `.trim(),
          }}
        />
      </head>
      <body className="antialiased">
        <div className="min-h-screen max-w-xl mx-4 lg:mx-auto pt-8 flex flex-col">
          <main className="flex-1 min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
