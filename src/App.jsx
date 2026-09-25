import useTheme from './hooks/useTheme'
import ParticlesBackground from './components/ParticlesBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, toggle] = useTheme()
  return (
    <>
      <div className="fixed inset-y-0 left-0 z-50 w-1 sm:w-1.5 bg-accent dark:bg-accent-dark pointer-events-none" aria-hidden="true" />
      <ParticlesBackground dark={dark} />
      <Navbar dark={dark} onToggle={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
