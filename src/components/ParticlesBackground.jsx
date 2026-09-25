import { useEffect, useRef } from 'react'

// Drifting, twinkling dots plus a few four-point sparkles. Respects reduced motion.
export default function ParticlesBackground({ dark }) {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const rgb = dark ? '170,240,245' : '15,139,141'
    let w, h, dots, raf

    const init = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      const n = w < 640 ? 60 : 130
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.6 + 0.7,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        p: Math.random() * Math.PI * 2, s: Math.random() * 0.035 + 0.012,
        star: Math.random() < 0.18,
      }))
    }
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const d of dots) {
        if (!reduce) {
          d.x = (d.x + d.vx + w) % w
          d.y = (d.y + d.vy + h) % h
          d.p += d.s
        }
        const tw = (Math.sin(d.p) + 1) / 2
        const a = (dark ? 0.12 : 0.1) + tw * (dark ? 0.6 : 0.45)
        ctx.fillStyle = `rgba(${rgb},${a})`
        if (d.star) {
          const s = d.r * (2.5 + tw * 3)
          ctx.strokeStyle = `rgba(${rgb},${a})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(d.x - s, d.y); ctx.lineTo(d.x + s, d.y)
          ctx.moveTo(d.x, d.y - s); ctx.lineTo(d.x, d.y + s)
          ctx.stroke()
        }
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }
      if (!reduce) raf = requestAnimationFrame(draw)
    }
    init()
    draw()
    window.addEventListener('resize', init)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', init) }
  }, [dark])
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
}
