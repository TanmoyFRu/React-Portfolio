import { useEffect, useState } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Education from "./components/Education"
import About from "./components/About"
import Contact from "./components/Contact"
import Noise from "./components/Noise"
import CustomCursor from "./components/CustomCursor"
import ScrollToTop from "./components/ScrollToTop"
import Lenis from "lenis"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { FaTerminal } from "react-icons/fa"
import Magnetic from "./components/Magnetic"
import Terminal from "./components/Terminal"

const App = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    // Keyboard shortcut for Terminal (`)
    const handleKeyDown = (e) => {
      if (e.key === "`" || e.key === "tilde") {
        e.preventDefault()
        setIsTerminalOpen(prev => !prev)
      }
      if (e.key === "Escape" && isTerminalOpen) {
        setIsTerminalOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isTerminalOpen])

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className="overflow-x-hidden antialiased selection:bg-indigo-500/30 selection:text-indigo-200 cursor-none">
      <CustomCursor />
      <Noise />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 [background-color:var(--accent)] origin-left z-[100]"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 -z-10 bg-radial-gradient h-full w-full" />

      <div className="container mx-auto">
        <Navbar onTerminalToggle={() => setIsTerminalOpen(true)} />

        <div className="px-8">
          <Hero />

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <About />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Technologies />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Experience />
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Education />
          </motion.section>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="w-full"
        >
          <Projects />
        </motion.div>

        <div className="px-8">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <Contact />
          </motion.section>
        </div>
      </div>

      <ScrollToTop />

      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  )
}

export default App