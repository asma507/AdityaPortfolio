import Section from './Section'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <Section
      id="education"
      tag="EDUCATION"
      title="Academic Background"
      subtitle="Degrees, engineering qualifications, and academic performance."
    >
      <div className="space-y-5">
        {education.map((e) => (
          <div key={e.degree} className="card flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{e.degree}</h3>
              <p>{e.school}, {e.place}</p>
            </div>
            <div className="text-sm sm:text-right">
              <p>{e.years}</p>
              <p className="font-semibold text-accent dark:text-accent-dark">{e.score}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
