import type { ReactNode } from 'react'

type DetailsProps = {
  title: string
  children: ReactNode
  open?: boolean
  className?: string
}

export function Details({
  title,
  children,
  open = false,
  className,
}: DetailsProps) {
  return (
    <details className={['mdx-details', className].filter(Boolean).join(' ')} open={open}>
      <summary>
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeWidth="3"
          height="1em"
          className="mdx-details-icon"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {title}
      </summary>
      <div className="mdx-details-content">{children}</div>
    </details>
  )
}
