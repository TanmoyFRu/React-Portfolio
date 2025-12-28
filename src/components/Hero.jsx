import profilePicture from "../assets/TanmoyDebnathProfileNew.png"
import { HERO_CONTENT } from "../constants"
import { motion } from 'framer-motion'

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
const hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse items-center justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-12">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 1.8 }}
                className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
              />

              <motion.img
                src={profilePicture}
                alt="Tanmoy Debnath"
                className="relative border border-stone-800/50 rounded-3xl grayscale-[0.2] brightness-[0.9] contrast-[1.1] sepia-[0.1] hover:grayscale-0 hover:brightness-100 transition-all duration-700 shadow-2xl"
                width={500}
                height={500}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />

              {/* Overlay Gradient Filter */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none mix-blend-overlay" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="flex flex-col items-center lg:items-start lg:pl-10">
            <motion.h2 variants={ChildVariants} className="pb-4 text-5xl tracking-tight lg:text-7xl font-bold">Tanmoy Debnath</motion.h2>
            <motion.div variants={ChildVariants} className="block bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent font-medium">
              Full Stack Developer
            </motion.div>
            <motion.p variants={ChildVariants} className="my-4 max-w-2xl py-6 text-xl leading-relaxed tracking-tight text-stone-400 font-light text-center lg:text-left">{HERO_CONTENT}</motion.p>
            <motion.a variants={ChildVariants} href="/Resume (4).pdf"
              target="blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full px-10 py-4 text-base font-semibold text-stone-900 mb-10 hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-xl active:scale-95">Download Resume</motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default hero
