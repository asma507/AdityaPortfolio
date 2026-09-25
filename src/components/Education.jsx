import Section from './Section'
import { education } from '../data/portfolio'

function GraduationCapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  )
}

function DiplomaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="14" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21H5a2 2 0 0 1-2-2V9" />
      <path d="M15 21h4a2 2 0 0 0 2-2V9" />
      <circle cx="12" cy="15" r="2" />
      <path d="M11 17-1.5 4" />
      <path d="M13 17 14.5 21" />
    </svg>
  )
}

function SchoolIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10v10c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V10" />
      <path d="M2 10 12 3l10 7" />
      <path d="M10 22V14h4v8" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

// Map each education entry to an icon based on index (0 = B.Tech, 1 = Diploma, 2 = Secondary)
const iconMap = [GraduationCapIcon, DiplomaIcon, SchoolIcon]

export default function Education() {
  return (
    <Section
      id="education"
      tag="EDUCATION"
      title="Academic Background"
      subtitle="Degrees, engineering qualifications, and academic performance."
    >
      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/40 to-transparent dark:from-accent-dark dark:via-accent-dark/40"
          aria-hidden="true"
        />

        <div className="space-y-8">
          {education.map((e, i) => {
            const Icon = iconMap[i] || SchoolIcon
            return (
              <div key={e.degree} className="relative pl-14">
                {/* Timeline dot with icon */}
                <div
                  className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-accent bg-white text-accent shadow-md shadow-accent/20 transition-transform duration-300 hover:scale-110 dark:border-accent-dark dark:bg-slate-900 dark:text-accent-dark dark:shadow-accent-dark/20"
                  aria-hidden="true"
                >
                  <Icon />
                </div>

                {/* Card */}
                <div className="card group flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-start sm:justify-between">
                  {/* Left: Degree info */}
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {e.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                      {e.school}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPinIcon />
                        {e.place}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarIcon />
                        {e.years}
                      </span>
                    </div>
                  </div>

                  {/* Right: Score badge */}
                  <div className="shrink-0 sm:text-right">
                    <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm font-bold text-accent transition-colors group-hover:border-accent group-hover:bg-accent/10 dark:border-accent-dark/30 dark:bg-accent-dark/10 dark:text-accent-dark dark:group-hover:border-accent-dark dark:group-hover:bg-accent-dark/15">
                      {e.score}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
