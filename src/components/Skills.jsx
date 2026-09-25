import Section from './Section'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section
      id="skills"
      tag="SKILLS"
      title="Technical Skills & Tools"
      subtitle="CAD design, finite element analysis, and engineering software."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group} className="card group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="mb-4 font-display font-bold text-slate-900 dark:text-white">{s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-accent/40 bg-accent/5 px-3.5 py-1 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent/10 dark:border-accent-dark/40 dark:bg-accent-dark/10 dark:text-accent-dark dark:hover:border-accent-dark"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
