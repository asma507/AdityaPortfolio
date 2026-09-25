import Section from './Section'
import { profile, languages, hobbies, activities } from '../data/portfolio'

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function LanguagesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  )
}

function InterestsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

export default function About() {
  return (
    <Section
      id="about"
      tag="ABOUT"
      title="A little about me"
      subtitle="Get to know the person behind the engineering."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 1. Profile Summary */}
        <div className="card group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 dark:bg-accent-dark/15 dark:text-accent-dark">
                <UserIcon />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Profile Summary
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {profile.summary}
            </p>
          </div>
        </div>

        {/* 2. Career Objective */}
        <div className="card group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 dark:bg-accent-dark/15 dark:text-accent-dark">
                <TargetIcon />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Career Objective
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {profile.careerObjective}
            </p>
          </div>
        </div>

        {/* 3. Location */}
        <div className="card group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 dark:bg-accent-dark/15 dark:text-accent-dark">
                <LocationIcon />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Location
              </h3>
            </div>
            <p className="text-sm font-medium leading-relaxed text-slate-800 dark:text-slate-200">
              {profile.location}
            </p>
          </div>
        </div>

        {/* 4. Languages */}
        <div className="card group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 dark:bg-accent-dark/15 dark:text-accent-dark">
                <LanguagesIcon />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-accent/40 bg-accent/5 px-3.5 py-1 text-xs font-semibold text-accent transition hover:border-accent hover:bg-accent/10 dark:border-accent-dark/40 dark:bg-accent-dark/10 dark:text-accent-dark dark:hover:border-accent-dark"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Hobbies & Interests */}
        <div className="card group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 dark:bg-accent-dark/15 dark:text-accent-dark">
                <InterestsIcon />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Hobbies & Interests
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {hobbies.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-accent/40 bg-accent/5 px-3.5 py-1 text-xs font-semibold text-accent transition hover:border-accent hover:bg-accent/10 dark:border-accent-dark/40 dark:bg-accent-dark/10 dark:text-accent-dark dark:hover:border-accent-dark"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 6. Extracurricular Activities */}
        <div className="card group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 dark:bg-accent-dark/15 dark:text-accent-dark">
                <TrophyIcon />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Activities & Leadership
              </h3>
            </div>
            <ul className="space-y-2.5">
              {activities.map((act) => (
                <li
                  key={act}
                  className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-dark"
                    aria-hidden="true"
                  />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
