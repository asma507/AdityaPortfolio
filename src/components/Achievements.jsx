import Section from './Section'
import { activities } from '../data/portfolio'

export default function Achievements() {
  return (
    <Section id="activities" title="Extracurricular Activities">
      <ol className="space-y-6 border-l-2 border-slate-200 pl-6 dark:border-slate-800">
        {activities.map((a) => (
          <li key={a} className="relative">
            <span className="absolute -left-[31px] top-3 h-3 w-3 rounded-full bg-accent dark:bg-accent-dark" aria-hidden="true" />
            <div className="card leading-relaxed">{a}</div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
