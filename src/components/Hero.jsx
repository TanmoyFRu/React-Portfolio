import profilePicture from "../assets/TanmoyDebnathProfileNew.png"
import { HERO_CONTENT } from "../constants"
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useTheme } from "../context/ThemeContext"

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5
    }
  }
}
const ChildVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

// Theme-specific decorative elements
const ThemeDecoration = ({ theme }) => {
  switch (theme) {
    case 'emerald':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating code symbols */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-500/60 font-mono text-sm md:text-lg font-bold"
              style={{
                left: `${5 + (i * 7) % 90}%`,
                top: `${10 + (i * 13) % 80}%`
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 3 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}
            >
              {['</', '{}', '()', '=>', '[]', '/>', 'fn', '&&', '||', '::', '++', '--', '/*', '*/', '//'][i]}
            </motion.div>
          ))}
          {/* Matrix-like vertical line */}
          <motion.div
            className="absolute left-[10%] top-0 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute left-[90%] top-0 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </div>
      )
    case 'solar':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large sun glow */}
          <motion.div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-radial from-orange-400/25 via-yellow-300/15 to-transparent blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          {/* Sun rays */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 right-0 origin-top-right"
              style={{
                width: '2px',
                height: '150px',
                background: 'linear-gradient(to bottom, rgba(255,160,50,0.4), transparent)',
                transform: `rotate(${-20 - i * 12}deg) translateX(100px)`
              }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
          {/* Floating particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`p-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-orange-400/50"
              style={{ left: `${20 + i * 8}%`, top: `${15 + (i * 9) % 60}%` }}
              animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      )
    case 'cosmic':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Nebula glow */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[80px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          {/* Twinkling stars */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-300"
              style={{
                left: `${(i * 17) % 95}%`,
                top: `${(i * 13) % 90}%`,
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
                boxShadow: ['0 0 0px rgba(168,85,247,0)', '0 0 8px rgba(168,85,247,0.8)', '0 0 0px rgba(168,85,247,0)']
              }}
              transition={{ duration: 2 + (i % 4) * 0.5, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
          {/* Shooting star */}
          <motion.div
            className="absolute w-20 h-0.5 bg-gradient-to-r from-purple-400 to-transparent rounded-full"
            initial={{ left: '80%', top: '10%', rotate: 45 }}
            animate={{ left: ['80%', '20%'], top: ['10%', '50%'], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
          />
        </div>
      )
    case 'midnight':
    default:
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Ambient glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[100px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          {/* Floating dots */}
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-400"
              style={{
                left: `${(i * 11) % 90 + 5}%`,
                top: `${(i * 17) % 85 + 5}%`,
                width: `${3 + (i % 2) * 2}px`,
                height: `${3 + (i % 2) * 2}px`
              }}
              animate={{
                opacity: [0.2, 0.7, 0.2],
                y: [0, -8, 0]
              }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
          {/* Subtle grid lines */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(to right, var(--accent) 1px, transparent 1px), linear-gradient(to bottom, var(--accent) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
      )
  }
}

const Hero = () => {
  const { theme } = useTheme()

  return (
    <div className="pb-4 lg:mb-36 relative">
      <ThemeDecoration theme={theme} />

      <div className="flex flex-wrap lg:flex-row-reverse items-center justify-center relative z-10">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-12">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 1.8 }}
                className="absolute -inset-1 bg-[color:var(--accent)] rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"
              />

              <motion.img
                src={profilePicture}
                alt="Tanmoy Debnath"
                className="relative border border-stone-800/10 rounded-3xl grayscale-[0.2] brightness-[0.9] contrast-[1.1] sepia-[0.1] hover:grayscale-0 hover:brightness-100 transition-all duration-700 shadow-2xl"
                width={500}
                height={500}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />

              {/* Overlay Gradient Filter */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[color:color-mix(in_srgb,var(--accent),transparent_90%)] via-transparent to-[color:color-mix(in_srgb,var(--accent),transparent_95%)] pointer-events-none mix-blend-overlay" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col items-center lg:items-start lg:pl-10">
            <motion.h2
              variants={ChildVariants}
              className="pb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight lg:text-7xl font-bold [color:var(--text-primary)]"
            >
              Tanmoy Debnath
            </motion.h2>
            <motion.div variants={ChildVariants} className="h-[60px] lg:h-[80px]">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Backend Specialist',
                  2000,
                  'Automation Wizard',
                  2000,
                  'Problem Solver',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent font-medium"
                style={{ backgroundImage: 'linear-gradient(to right, var(--text-primary), var(--text-secondary))' }}
              />
            </motion.div>
            <motion.p
              variants={ChildVariants}
              className="my-4 max-w-2xl py-2 text-xl leading-relaxed tracking-tight [color:var(--text-secondary)] font-light text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={ChildVariants}
              href="/Resume (4).pdf"
              target="blank"
              rel="noopener noreferrer"
              download
              className="rounded-full px-10 py-4 text-base font-semibold transition-all duration-300 shadow-xl active:scale-95 [background-color:var(--text-primary)] [color:var(--bg-primary)] hover:[background-color:var(--accent)] hover:text-white"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
