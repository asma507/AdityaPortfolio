import Section from './Section'
import { experience, internships } from '../data/portfolio'

function TimelineList({ items }) {
  return (
    <ol className="space-y-6 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
      {items.map((j) => (
        <li key={j.org + j.title} className="relative">
          <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-accent dark:bg-accent-dark" aria-hidden="true" />
          <div className="card">
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{j.title}</h3>
              <p className="text-sm">{j.period}</p>
            </div>
            <p className="mb-3 font-medium text-accent dark:text-accent-dark">{j.org}, {j.place}</p>
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed">{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </li>
      ))}
    </ol>
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
        <TimelineList items={experience} />
      </Section>
      <Section
        id="internships"
        tag="INTERNSHIPS"
        title="Industrial Internships"
        subtitle="Hands-on industry and technical training exposure."
      >
        <TimelineList items={internships} />
      </Section>
    </>
  )
}
