import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { profile } from '../data/portfolio'

const links = ['home', 'about', 'skills', 'education', 'experience', 'internships', 'certifications', 'contact']
const label = (id) => id.charAt(0).toUpperCase() + id.slice(1)

export default function Navbar({ dark, onToggle }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      let cur = 'home'
      for (const id of links) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) cur = id
      }
      if (window.scrollY < 100) cur = 'home'
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur dark:border-slate-800/70 dark:bg-[#0a1118]/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="font-display text-lg font-bold text-slate-900 dark:text-white">{profile.initials}</a>
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={`text-sm font-medium transition hover:text-accent dark:hover:text-accent-dark ${active === id ? 'text-accent dark:text-accent-dark' : ''}`}>{label(id)}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 dark:border-slate-700 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-slate-200 bg-slate-50 px-5 py-3 dark:border-slate-800 dark:bg-[#0a1118] lg:hidden">
          {links.map((id) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">{label(id)}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
