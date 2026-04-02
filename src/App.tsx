import About from './components/About'
import ContactUs from './components/ContactUs'
import Experience from './components/Experience'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div data-theme="portfolio" className="page-shell">
      <div className="ambient-orb-left" />
      <div className="ambient-orb-right" />

      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ContactUs />
      </main>
    </div>
  )
}

export default App
