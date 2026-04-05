import Cursor from '@/components/Cursor'
import MatrixRain from '@/components/MatrixRain'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <MatrixRain />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
