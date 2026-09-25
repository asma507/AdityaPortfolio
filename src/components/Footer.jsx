import { profile } from '../data/portfolio'

const colOne = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
]

const colTwo = [
  { label: 'Experience', href: '#experience' },
  { label: 'Internships', href: '#internships' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  const socials = [
    { href: profile.github ? profile.github : 'javascript:void(0)', label: 'GitHub', Icon: GithubIcon, show: true },
    { href: profile.linkedin || '#', label: 'LinkedIn', Icon: LinkedInIcon, show: true },
    { href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`, label: 'Email', Icon: EmailIcon, show: !!profile.email },
  ]

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-[#0a1118]">
      {/* Main footer grid */}
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-3 group w-fit">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white text-sm font-bold dark:bg-white dark:text-slate-900 transition group-hover:scale-105"
                aria-hidden="true"
              >
                {profile.initials}
              </span>
              <span className="text-base font-semibold text-slate-900 dark:text-white">Portfolio</span>
            </a>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-[220px]">
              Built with care.{' '}
              <span className="text-accent dark:text-accent-dark font-medium">Designed for clarity.</span>{' '}
              Always shipping.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {colOne.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-slate-600 transition hover:text-accent dark:text-slate-400 dark:hover:text-accent-dark"
                >
                  {label}
                </a>
              ))}
              {colTwo.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-slate-600 transition hover:text-accent dark:text-slate-400 dark:hover:text-accent-dark"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Elsewhere / social icons */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Elsewhere
            </h3>
            <div className="flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => {
                const hasValidUrl = href && href !== '#' && href !== 'javascript:void(0)' && (label !== 'GitHub' || profile.github)
                return (
                  <a
                    key={label}
                    href={hasValidUrl ? href : '#!'}
                    onClick={(e) => {
                      if (!hasValidUrl) {
                        e.preventDefault()
                      }
                    }}
                    aria-label={label}
                    target={hasValidUrl && !href.startsWith('mailto') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-400 dark:hover:border-accent-dark dark:hover:text-accent-dark"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {year}{' '}
            <span className="text-slate-600 dark:text-slate-300">{profile.name}</span>
            . All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-xs text-slate-400 transition hover:text-accent dark:text-slate-500 dark:hover:text-accent-dark"
            aria-label="Back to top"
          >
            <ArrowUpIcon />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
