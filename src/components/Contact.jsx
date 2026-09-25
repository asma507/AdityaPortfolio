import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { profile } from '../data/portfolio'

const icon = {
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  pin: <><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
}

function Row({ name, label, value, href }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icon[name]}</svg>
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
        {href ? (
          <a
            href={href}
            className="block font-medium text-slate-900 hover:text-accent dark:text-white dark:hover:text-accent-dark text-sm sm:text-base whitespace-nowrap overflow-x-auto"
          >
            {value}
          </a>
        ) : (
          <p className="font-medium text-slate-900 dark:text-white text-sm sm:text-base">{value}</p>
        )}
      </div>
    </div>
  )
}

const field = 'w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-accent focus:outline-none dark:border-slate-700 dark:text-white dark:focus:border-accent-dark'
const lab = 'mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-400'

export default function Contact() {
  const ref = useReveal()
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  // No backend: opens the visitor's email app with the message filled in.
  const submit = (e) => {
    e.preventDefault()
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div ref={ref} className="reveal">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-accent dark:text-accent-dark">CONTACT</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Let's work together</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Looking for a Mechanical Engineer? I'd love to hear about the opportunity.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card rounded-3xl p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-accent dark:text-accent-dark">Get in touch</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-slate-900 dark:text-white">Reach out directly</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">For quick things, email works best.</p>
            <div className="mt-8 space-y-6">
              <Row name="mail" label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <Row name="phone" label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
              <Row name="pin" label="Location" value={profile.location} />
            </div>
          </div>

          <form onSubmit={submit} className="card rounded-3xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="c-name" className={lab}>Name</label><input id="c-name" required value={f.name} onChange={set('name')} placeholder="Your name" className={field} /></div>
              <div><label htmlFor="c-email" className={lab}>Email</label><input id="c-email" type="email" required value={f.email} onChange={set('email')} placeholder="you@email.com" className={field} /></div>
            </div>
            <div className="mt-5"><label htmlFor="c-subject" className={lab}>Subject</label><input id="c-subject" required value={f.subject} onChange={set('subject')} placeholder="What's this about?" className={field} /></div>
            <div className="mt-5"><label htmlFor="c-message" className={lab}>Message</label><textarea id="c-message" required rows="5" value={f.message} onChange={set('message')} placeholder="Tell me a bit more..." className={`${field} resize-none`} /></div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent dark:bg-white dark:text-slate-900 dark:hover:bg-accent-dark">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg>
                Send message
              </button>
              {sent && <p role="status" className="text-sm text-slate-600 dark:text-slate-400">Your email app should open with the message ready to send.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
