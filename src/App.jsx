import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"


const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased selection:bg-indigo-500/30">
      <div className="fixed inset-0 -z-10 h-full w-full bg-radial-gradient"></div>

      <Navbar />

      <div className="container mx-auto px-8">
        <Hero />
        <About />
        <Technologies />
        <Experience />
      </div>

      <div className="w-full">
        <Projects />
      </div>

      <div className="container mx-auto px-8">
        <Contact />
      </div>
    </div>
  )
}
export default App