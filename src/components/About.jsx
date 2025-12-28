import { useState, useEffect } from "react"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaClock, FaCircle } from "react-icons/fa"

const About = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })

  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight [color:var(--text-primary)]"
      >
        About <span className="[color:var(--text-secondary)] opacity-60">Me</span>
      </motion.h2>

      <div className="flex flex-wrap lg:flex-nowrap items-start justify-center gap-8 max-w-6xl mx-auto px-4">
        {/* Main About Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-3/5 [background-color:rgba(var(--bg-secondary),0.2)] border [border-color:var(--border-color)] p-8 lg:p-12 rounded-[2.5rem] backdrop-blur-md"
          style={{ backgroundColor: 'color-mix(in srgb, var(--bg-secondary), transparent 80%)' }}
        >
          <p className="text-xl lg:text-2xl leading-relaxed tracking-tight [color:var(--text-secondary)] font-light text-center lg:text-left">
            {ABOUT_TEXT}
          </p>
        </motion.div>

        {/* Live Status Bento Card */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-2/5 grid grid-cols-1 gap-4"
        >
          <div className="group relative overflow-hidden [background-color:rgba(var(--bg-secondary),0.4)] border [border-color:var(--border-color)] p-8 rounded-[2.5rem] backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-500"
            style={{ backgroundColor: 'color-mix(in srgb, var(--bg-secondary), transparent 60%)' }}
          >
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold [color:var(--text-secondary)] uppercase tracking-widest opacity-70">Current Status</h3>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <FaCircle className="text-[6px] text-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-green-500 uppercase">Available</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl [background-color:var(--bg-secondary)] flex items-center justify-center [color:var(--accent)] border [border-color:var(--border-color)]">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-[10px] [color:var(--text-secondary)] font-bold uppercase opacity-60">Location</p>
                    <p className="[color:var(--text-primary)] text-sm">Agartala, India 🇮🇳</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl [background-color:var(--bg-secondary)] flex items-center justify-center [color:var(--accent)] border [border-color:var(--border-color)]">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-[10px] [color:var(--text-secondary)] font-bold uppercase opacity-60">Local Time</p>
                    <p className="[color:var(--text-primary)] text-sm font-mono">{formattedTime}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t [border-color:var(--border-color)] opacity-50">
                <p className="text-xs [color:var(--text-secondary)] leading-relaxed font-light italic">
                  "Always exploring the intersection of automation and elegant backend design."
                </p>
              </div>
            </div>
            {/* Decorative Background Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 [background-color:var(--accent)] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-all duration-500" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
