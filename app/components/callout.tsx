import React from 'react'

type CalloutType =
  | 'note'
  | 'info'
  | 'tip'
  | 'success'
  | 'warning'
  | 'danger'
  | 'error'

const DEFAULT_TITLES: Record<CalloutType, string> = {
  note: 'Nota',
  info: 'Info',
  tip: 'Consell',
  success: 'Correcte',
  warning: 'Atenció',
  danger: 'Perill',
  error: 'Error',
}

function cx(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(' ')
}

function Icon({ type }: { type: CalloutType }) {
  const common = 'h-5 w-5'

  switch (type) {
    case 'success':
      return (
        <svg
          viewBox="0 0 24 24"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'warning':
      return (
        <svg
          viewBox="0 0 24 24"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 9v4m0 4h.01M10.29 3.86l-8.2 14.2A2 2 0 0 0 3.82 21h16.36a2 2 0 0 0 1.73-2.94l-8.2-14.2a2 2 0 0 0-3.46 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'danger':
    case 'error':
      return (
        <svg
          viewBox="0 0 24 24"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 9v4m0 4h.01M10.29 3.86l-8.2 14.2A2 2 0 0 0 3.82 21h16.36a2 2 0 0 0 1.73-2.94l-8.2-14.2a2 2 0 0 0-3.46 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'tip':
      return (
        <svg
          viewBox="0 0 24 24"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M9 18h6m-6 3h6M12 2a7 7 0 0 0-4 12c.7.6 1 1.3 1 2h6c0-.7.3-1.4 1-2A7 7 0 0 0 12 2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'info':
    case 'note':
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className={common}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 8h.01M11 12h1v6h1M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

export function Callout({
  type = 'note',
  title,
  children,
}: {
  type?: CalloutType | string
  title?: string
  children: React.ReactNode
}) {
  const styles: Record<CalloutType, { border: string; bg: string; icon: string }> =
    {
      note: {
        border: 'border-neutral-200 dark:border-neutral-800',
        bg: 'bg-neutral-50 dark:bg-neutral-900/40',
        icon: 'text-neutral-700 dark:text-neutral-200',
      },
      info: {
        border: 'border-sky-200 dark:border-sky-900/60',
        bg: 'bg-sky-50/60 dark:bg-sky-950/30',
        icon: 'text-sky-700 dark:text-sky-200',
      },
      tip: {
        border: 'border-violet-200 dark:border-violet-900/60',
        bg: 'bg-violet-50/60 dark:bg-violet-950/30',
        icon: 'text-violet-700 dark:text-violet-200',
      },
      success: {
        border: 'border-emerald-200 dark:border-emerald-900/60',
        bg: 'bg-emerald-50/60 dark:bg-emerald-950/30',
        icon: 'text-emerald-700 dark:text-emerald-200',
      },
      warning: {
        border: 'border-amber-200 dark:border-amber-900/60',
        bg: 'bg-amber-50/60 dark:bg-amber-950/30',
        icon: 'text-amber-800 dark:text-amber-200',
      },
      danger: {
        border: 'border-rose-200 dark:border-rose-900/60',
        bg: 'bg-rose-50/60 dark:bg-rose-950/30',
        icon: 'text-rose-800 dark:text-rose-200',
      },
      error: {
        border: 'border-rose-200 dark:border-rose-900/60',
        bg: 'bg-rose-50/60 dark:bg-rose-950/30',
        icon: 'text-rose-800 dark:text-rose-200',
      },
    }

  const normalizedType =
    typeof type === 'string' ? type.trim().toLowerCase() : 'note'
  const safeType =
    normalizedType in styles ? (normalizedType as CalloutType) : 'note'
  const t = styles[safeType]
  const resolvedTitle = title ?? DEFAULT_TITLES[safeType]

  return (
    <aside
      className={cx(
        'not-prose my-6 rounded-xl border p-4',
        'text-neutral-800 dark:text-neutral-200',
        t.border,
        t.bg
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cx('mt-0.5 shrink-0', t.icon)}>
          <Icon type={safeType} />
        </div>
        <div className="min-w-0">
          {resolvedTitle ? (
            <div className="font-medium leading-6">{resolvedTitle}</div>
          ) : null}
          <div className="mt-1 text-sm leading-6 [&>p+p]:mt-3 [&>ul]:mt-3 [&>ol]:mt-3">
            {children}
          </div>
        </div>
      </div>
    </aside>
  )
}
