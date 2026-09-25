import Section from './Section'
import { hobbies } from '../data/portfolio'

function CricketIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="18" r="3" />
      <line x1="20" y1="4" x2="12" y2="12" />
      <line x1="20" y1="4" x2="17" y2="4" />
      <line x1="20" y1="4" x2="20" y2="7" />
      <path d="M11.5 12.5L6.5 17.5" />
    </svg>
  )
}

function ChessIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 20h8" />
      <path d="M7 17h10" />
      <path d="M9 17V14l-2-4h10l-2 4v3" />
      <path d="M10 6h4" />
      <path d="M12 4v2" />
      <circle cx="12" cy="9" r="1" />
    </svg>
  )
}

function CubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}

const iconMap = {
  'Playing cricket': CricketIcon,
  'Playing chess': ChessIcon,
  "Rubik's Cube": CubeIcon,
}

export default function Hobbies() {
  return (
    <Section id="hobbies" title="Hobbies">
      <ol className="space-y-6 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
        {hobbies.map((h) => {
          const Icon = iconMap[h] || CubeIcon
          return (
            <li key={h} className="relative">
              <span className="absolute -left-[31px] top-3 h-3 w-3 rounded-full bg-accent dark:bg-accent-dark" aria-hidden="true" />
              <div className="card flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                  <Icon />
                </div>
                <p className="font-display font-semibold text-slate-900 dark:text-white">{h}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}


