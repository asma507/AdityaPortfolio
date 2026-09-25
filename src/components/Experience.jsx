import Section from './Section'
import { experience, internships } from '../data/portfolio'

/* ─── Per-entry icons based on actual content ─── */

// Reliance Industries — on-site engineering trainee with hard hat
function HardHatWorkerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 12V9a5 5 0 0 1 10 0v3" />
      <path d="M5 12h14" strokeWidth="2.5" />
      <circle cx="12" cy="15.5" r="2.5" />
      <path d="M6 22v-1a6 6 0 0 1 12 0v1" />
    </svg>
  )
}

// AU Siemens COE — robot arm / CAD modeling
function RobotArmIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="4" height="4" x="8" y="2" rx="1" />
      <path d="M12 8h4l3 5" />
      <circle cx="19" cy="13" r="2" />
      <path d="M12 8v4" />
      <path d="M12 12H8l-3 5" />
      <circle cx="5" cy="17" r="2" />
      <rect width="8" height="4" x="8" y="18" rx="1" />
      <path d="M12 12v6" />
    </svg>
  )
}

// AR Raju Beverages — bottle / beverage manufacturing
function BottleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2h4" />
      <path d="M10 2v4.5c0 .5-.5 1-1.5 2S6 11.5 6 14v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6c0-2.5-1-3-2.5-4.5S14 8.5 14 6.5V2" />
      <path d="M6 18h12" />
    </svg>
  )
}

/* ─── Metadata icons ─── */

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

function BuildingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}

/* ─── Icon map: match each entry's org name to its icon ─── */

const iconByOrg = {
  'Reliance Industries Limited': HardHatWorkerIcon,
  'AU Siemens COE': RobotArmIcon,
  'AR Raju Beverages Pvt. Ltd.': BottleIcon,
}

/* ─── Timeline component ─── */

function TimelineList({ items, fallbackIcon: FallbackIcon }) {
  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div
        className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/40 to-transparent dark:from-accent-dark dark:via-accent-dark/40"
        aria-hidden="true"
      />

      <div className="space-y-8">
        {items.map((j) => {
          const Icon = iconByOrg[j.org] || FallbackIcon
          const isCurrent = j.period.toLowerCase().includes('present')

          return (
            <div key={j.org + j.title} className="relative pl-14">
              {/* Timeline dot with content-specific icon */}
              <div
                className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-accent bg-white text-accent shadow-md shadow-accent/20 transition-transform duration-300 hover:scale-110 dark:border-accent-dark dark:bg-slate-900 dark:text-accent-dark dark:shadow-accent-dark/20"
                aria-hidden="true"
              >
                <Icon />
              </div>

              {/* Card with left accent bar */}
              <div className="card group relative overflow-hidden flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Left accent stripe */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-accent/60 transition-all duration-300 group-hover:bg-accent group-hover:w-1.5 dark:bg-accent-dark/60 dark:group-hover:bg-accent-dark" aria-hidden="true" />

                {/* Header row */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {j.title}
                    </h3>
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-emerald-600 ring-1 ring-emerald-500/30 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/30">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 dark:bg-emerald-400" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                        </span>
                        Current
                      </span>
                    )}
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent transition-colors group-hover:border-accent group-hover:bg-accent/10 dark:border-accent-dark/30 dark:bg-accent-dark/10 dark:text-accent-dark dark:group-hover:border-accent-dark dark:group-hover:bg-accent-dark/15">
                    <CalendarIcon />
                    {j.period}
                  </span>
                </div>

                {/* Org & location metadata */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <span className="inline-flex items-center gap-1.5 font-medium text-accent dark:text-accent-dark">
                    <BuildingIcon />
                    {j.org}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <MapPinIcon />
                    {j.place}
                  </span>
                </div>

                {/* Bullet points with check icons */}
                <ul className="space-y-2.5 pt-1">
                  {j.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-dark"
                        aria-hidden="true"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <>
      <Section
        id="experience"
        tag="EXPERIENCE"
        title="Work Experience"
        subtitle="Full-time professional role and operations."
      >
        <TimelineList items={experience} fallbackIcon={HardHatWorkerIcon} />
      </Section>
      <Section
        id="internships"
        tag="INTERNSHIPS"
        title="Industrial Internships"
        subtitle="Hands-on industry and technical training exposure."
      >
        <TimelineList items={internships} fallbackIcon={BottleIcon} />
      </Section>
    </>
  )
}
