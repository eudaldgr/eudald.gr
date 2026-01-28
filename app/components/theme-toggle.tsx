'use client'

import { useEffect } from 'react'

type ThemePreference = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'theme'

function getSystemPrefersDark() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

function getStoredPreference(): ThemePreference | null {
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (raw === 'light' || raw === 'dark' || raw === 'system') return raw
  return null
}

function applyTheme(preference: ThemePreference) {
  const prefersDark =
    preference === 'dark' || (preference === 'system' && getSystemPrefersDark())

  document.documentElement.classList.toggle('dark', prefersDark)
  document.documentElement.style.colorScheme = prefersDark ? 'dark' : 'light'
  document.documentElement.dataset.theme = preference
}

function getCurrentPreference(): ThemePreference {
  const fromDataset = document.documentElement.dataset.theme
  if (fromDataset === 'light' || fromDataset === 'dark' || fromDataset === 'system') {
    return fromDataset
  }
  return getStoredPreference() ?? 'system'
}

function getNextPreference(current: ThemePreference): ThemePreference {
  return current === 'system' ? 'light' : current === 'light' ? 'dark' : 'system'
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 2v2m0 16v2M4 12H2m20 0h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M21 13.2A8.5 8.5 0 1 1 10.8 3a7 7 0 0 0 10.2 10.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ComputerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 21h8M12 17v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function ThemeToggle() {
  useEffect(() => {
    // Ensure dataset exists even if JS runs without the inline script.
    applyTheme(getCurrentPreference())

    const media = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!media) return

    const onChange = () => {
      if (getCurrentPreference() !== 'system') return
      applyTheme('system')
    }

    media.addEventListener?.('change', onChange)
    return () => media.removeEventListener?.('change', onChange)
  }, [])

  return (
    <button
      type="button"
      aria-label="Canvia el tema"
      title="Canvia el tema"
      className="theme-toggle transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center gap-2 py-1 px-2 m-1 rounded-md border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
      onClick={() => {
        const current = getCurrentPreference()
        const next = getNextPreference(current)
        window.localStorage.setItem(STORAGE_KEY, next)
        applyTheme(next)
      }}
      onContextMenu={(e) => {
        e.preventDefault()
        window.localStorage.setItem(STORAGE_KEY, 'system')
        applyTheme('system')
      }}
      style={{ cursor: 'pointer' }}
    >
      <span className="theme-icon theme-icon-auto" aria-hidden="true">
        <ComputerIcon />
      </span>
      <span className="theme-icon theme-icon-light" aria-hidden="true">
        <SunIcon />
      </span>
      <span className="theme-icon theme-icon-dark" aria-hidden="true">
        <MoonIcon />
      </span>

      <span className="theme-label theme-label-auto">auto</span>
      <span className="theme-label theme-label-light">light</span>
      <span className="theme-label theme-label-dark">dark</span>
    </button>
  )
}
