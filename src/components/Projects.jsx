import { useRef } from "react"
import { PROJECTS } from "../constants"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Magnetic from "./Magnetic"

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = (mouseX / width) - 0.5
    const yPct = (mouseY / height) - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[35vw] p-8 lg:p-10 rounded-[3rem] border border-[color:var(--border-color)] backdrop-blur-xl flex flex-col gap-8 transition-all duration-500 hover:border-[color:var(--accent)] hover:shadow-2xl hover:shadow-[color:var(--accent-glow)] group relative"
    >
      <div
        className="absolute inset-0 rounded-[3rem] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
        style={{
          background: `radial-gradient(circle at center, var(--accent) 0%, transparent 70%)`,
          filter: 'blur(60px)',
          transform: 'translateZ(-50px)'
        }}
      />

      <Magnetic>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ transform: "translateZ(50px)" }}
          className="w-full aspect-[16/9] overflow-hidden rounded-[2rem] shadow-2xl relative block bg-black/20"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            style={{
              x: useTransform(mouseXSpring, [-0.5, 0.5], ["-2%", "2%"]),
              y: useTransform(mouseYSpring, [-0.5, 0.5], ["-2%", "2%"]),
            }}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-end p-10 backdrop-blur-[1px]">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="px-8 py-3 bg-white text-black rounded-full font-bold tracking-tight shadow-xl hover:scale-105 active:scale-95 transition-all text-xs lg:text-sm"
            >
              View on GitHub
            </motion.span>
          </div>
        </a>
      </Magnetic>

      <div className="space-y-4" style={{ transform: "translateZ(30px)" }}>
        <div className="space-y-2">
          <Magnetic>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <h3 className="text-2xl lg:text-3xl font-bold [color:var(--text-primary)] tracking-tight hover:[color:var(--accent)] transition-colors duration-300">
                {project.title}
              </h3>
            </a>
          </Magnetic>
          <div className="h-1 w-10 bg-[color:var(--accent)] rounded-full translate-x-1" />
        </div>

        <p className="[color:var(--text-secondary)] leading-relaxed text-base lg:text-xl font-light line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              whileHover={{
                scale: 1.1,
                backgroundColor: 'var(--accent)',
                color: 'white',
                borderColor: 'var(--accent)'
              }}
              className="rounded-full border border-[color:var(--border-color)] [background-color:rgba(var(--bg-secondary),0.5)] px-4 py-1.5 text-[10px] lg:text-xs font-semibold [color:var(--accent)] transition-all duration-300 shadow-sm cursor-default"
              key={techIndex}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <div className="pb-24 overflow-hidden cursor-none">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight [color:var(--text-primary)]"
      >
        Personal <span className="[color:var(--text-secondary)] opacity-60">Projects</span>
      </motion.h2>

      <div className="relative flex overflow-hidden py-10">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 80,
              ease: "linear",
            },
          }}
          className="flex gap-16 px-12"
          style={{ width: "max-content" }}
        >
          {[...PROJECTS, ...PROJECTS].map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>

      {/* Decorative gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[var(--bg-primary)] to-transparent pointer-events-none z-10 hidden lg:block" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[var(--bg-primary)] to-transparent pointer-events-none z-10 hidden lg:block" />
    </div>
  )
}

export default Projects
