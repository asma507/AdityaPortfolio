import { useState, useEffect } from 'react'
import Section from './Section'
import { certifications } from '../data/portfolio'

function CertificateIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
      <path d="M4.5 9h15" />
      <path d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm transition-all"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl transition-all dark:border-slate-800 dark:bg-[#0f172a]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex flex-wrap items-center justify-between gap-3 pr-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-dark/20 dark:text-accent-dark">
              <CertificateIcon />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{cert.title}</h3>
              <p className="text-sm font-medium text-accent dark:text-accent-dark">{cert.issuer}</p>
            </div>
          </div>
          {cert.date && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {cert.date}
            </span>
          )}
        </div>

        {/* Certificate Image Frame */}
        <div className="mt-5 flex min-h-[300px] items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-900/60">
          {cert.image ? (
            <img
              src={cert.image}
              alt={cert.title}
              className="max-h-[65vh] w-auto rounded-lg object-contain shadow-md"
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-slate-600 dark:text-slate-400">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent dark:bg-accent-dark/10 dark:text-accent-dark">
                <CertificateIcon />
              </div>
              <p className="font-display text-base font-semibold text-slate-900 dark:text-white">Certificate of Completion</p>
              <p className="mt-1 text-xs text-slate-500">{cert.issuer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <Section
      id="certifications"
      tag="CERTIFICATES"
      title="Certifications"
      subtitle="Courses and training programs I have completed."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((c) => (
          <div
            key={c.title}
            className="card group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition group-hover:scale-110 dark:bg-accent-dark/10 dark:text-accent-dark">
                    <CertificateIcon />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white">
                      {c.title}
                    </h3>
                    <p className="text-sm font-medium text-accent dark:text-accent-dark">
                      {c.issuer}
                    </p>
                  </div>
                </div>
                {c.date && (
                  <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {c.date}
                  </span>
                )}
              </div>

              {/* Certificate Visual Preview Box */}
              <div
                className="relative mt-4 flex h-48 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left transition duration-300 dark:border-slate-800 dark:bg-slate-800/40"
              >
                {c.image ? (
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-4">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent dark:bg-accent-dark/20 dark:text-accent-dark">
                      <CertificateIcon />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Verified Certificate
                    </span>
                    <span className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                      {c.issuer}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800/60">
              <button
                type="button"
                onClick={() => setSelectedCert(c)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline dark:text-accent-dark"
              >
                <span>View Certificate</span>
                <span>→</span>
              </button>
              {c.credentialUrl && (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  Verify ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </Section>
  )
}
