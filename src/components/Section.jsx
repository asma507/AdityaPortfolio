import useReveal from '../hooks/useReveal'

export default function Section({ id, tag, title, subtitle, children }) {
  const ref = useReveal()
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div ref={ref} className="reveal">
        {tag || subtitle ? (
          <div className="mb-10 text-center">
            {tag && (
              <p className="text-xs font-bold uppercase tracking-widest text-accent dark:text-accent-dark">
                {tag}
              </p>
            )}
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {subtitle}
              </p>
            )}
          </div>
        ) : (
          <h2 className="mb-8 font-display text-3xl font-bold text-slate-900 dark:text-white">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
