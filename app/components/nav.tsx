import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'

const navItems = {
  '/': {
    name: 'inici',
  },
  '/blog': {
    name: 'blog',
  },
  '/projectes': {
    name: 'projectes',
  },
  '/pull-requests': {
    name: 'pull requests',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-8 sm:mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center relative px-0 pb-0 fade md:relative"
          id="nav"
        >
          <div className="flex flex-row flex-wrap items-center gap-2 w-full">
            <div className="order-2 sm:order-1 flex flex-row flex-wrap gap-1 pr-2">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
            <div className="order-1 sm:order-2 flex sm:ml-auto">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
