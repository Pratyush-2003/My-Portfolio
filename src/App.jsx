import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Cursor from './Components/Cursor/Cursor'

function App() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </main>
  )
}

export default App