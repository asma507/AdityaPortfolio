import { useEffect, useRef } from 'react'

export default function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { el && el.classList.add('show'); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('show'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}
