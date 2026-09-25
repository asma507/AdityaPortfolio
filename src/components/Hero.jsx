import { useState } from 'react'
import { profile } from '../data/portfolio'

function ProfilePicture() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative mx-auto h-64 w-64 shrink-0 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
      <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-accent to-sky-500 opacity-60 blur-lg dark:from-accent-dark dark:to-sky-400" aria-hidden="true" />
      <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-2xl dark:border-[#0a1118] dark:bg-slate-800">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center font-display text-6xl sm:text-7xl font-bold tracking-wider text-slate-500 dark:text-slate-400" role="img" aria-label={profile.name}>{profile.initials}</div>
        ) : (
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setFailed(true)} className="h-full w-full object-cover object-top scale-[1.25] -translate-y-6 sm:-translate-y-8 transition-transform duration-300" />
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-10 px-5 pb-16 pt-28 md:flex-row md:justify-between">
      <div className="text-center md:text-left">
        <p className="mb-2 text-sm font-semibold text-accent dark:text-accent-dark">Hello, I am</p>
        <h1 className="font-display text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">{profile.name}</h1>
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 md:justify-start">
          <p className="font-display text-xl font-medium text-slate-700 dark:text-slate-300">
            Graduate Engineering Trainee at <span className="font-semibold text-slate-900 dark:text-white">Reliance Industries Limited</span>
          </p>
          <span className="rounded-md bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
            Full-time
          </span>
        </div>

        {/* Location & Email Details placed vertically */}
        <div className="mt-5 flex flex-col items-center md:items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
          {/* Location */}
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-slate-500 dark:text-slate-400">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Jamnagar, Gujarat, India · On-site</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-slate-500 dark:text-slate-400">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            <a href={`mailto:${profile.email}`} className="font-medium text-slate-700 hover:text-accent dark:text-slate-300 dark:hover:text-accent-dark transition">
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Resume</a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn</a>}
          <a href="#contact" className="btn btn-ghost">Contact Me</a>
        </div>
      </div>
      <ProfilePicture />
    </section>
  )
}
