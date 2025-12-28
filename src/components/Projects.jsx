import { useRef, useState, useEffect } from "react"
import { PROJECTS } from "../constants"
import { motion, useMotionValue, useAnimationControls } from "framer-motion"
import Magnetic from "./Magnetic"

const ProjectCard = ({ project }) => {
  return (
    <div
      className="flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[35vw] p-8 lg:p-10 rounded-[3rem] border border-[color:var(--border-color)] backdrop-blur-xl flex flex-col gap-8 transition-all duration-500 hover:border-[color:var(--accent)] hover:shadow-2xl hover:shadow-[color:var(--accent-glow)] group relative"
    >
      <div
        className="absolute inset-0 rounded-[3rem] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
        style={{
          background: `radial-gradient(circle at center, var(--accent) 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full aspect-[16/9] overflow-hidden rounded-[2rem] shadow-2xl relative block bg-black/20"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* View on GitHub overlay - kept */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-10">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="px-8 py-3 bg-white text-black rounded-full font-bold tracking-tight shadow-xl hover:scale-105 active:scale-95 transition-all text-xs lg:text-sm"
          >
            View on GitHub
          </motion.span>
        </div>
      </a>

      <div className="space-y-4">
        <div className="space-y-2">
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
          <div className="h-1 w-10 bg-[color:var(--accent)] rounded-full translate-x-1" />
        </div>

        <p className="[color:var(--text-secondary)] leading-relaxed text-base lg:text-xl font-light line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              className="rounded-full border border-[color:var(--border-color)] [background-color:rgba(var(--bg-secondary),0.5)] px-4 py-1.5 text-[10px] lg:text-xs font-semibold [color:var(--accent)] transition-all duration-300 shadow-sm"
              key={techIndex}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const dragX = useMotionValue(0)
  const startXRef = useRef(0)
  const lastDragXRef = useRef(0)

  // Handle drag start
  const handleDragStart = (e) => {
    setIsDragging(true)
    startXRef.current = e.clientX || e.touches?.[0]?.clientX || 0
  }

  // Handle drag
  const handleDrag = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0
    const diff = clientX - startXRef.current
    dragX.set(lastDragXRef.current + diff)
  }

  // Handle drag end - resume auto-scroll
  const handleDragEnd = () => {
    if (isDragging) {
      lastDragXRef.current = dragX.get()
      setIsDragging(false)
      // Force animation restart
      setAnimationKey(prev => prev + 1)
    }
  }

  return (
    <div className="pb-24 overflow-hidden lg:cursor-none">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight [color:var(--text-primary)]"
      >
        Personal <span className="[color:var(--accent)]">Projects</span>
      </motion.h2>

      <div
        ref={containerRef}
        className="relative flex overflow-hidden py-10 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDrag}
        onTouchEnd={handleDragEnd}
      >
        <motion.div
          key={animationKey}
          initial={{ x: isDragging ? undefined : 0 }}
          animate={isDragging ? undefined : {
            x: [0, -3000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 80,
              ease: "linear",
            },
          }}
          style={{ x: isDragging ? dragX : undefined }}
          className="flex gap-16 px-12"
        >
          {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <p className="text-center text-xs [color:var(--text-secondary)] opacity-50 mt-4 hidden md:block">
        Drag to scroll
      </p>

      {/* Decorative gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[var(--bg-primary)] to-transparent pointer-events-none z-10 hidden lg:block" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[var(--bg-primary)] to-transparent pointer-events-none z-10 hidden lg:block" />
    </div>
  )
}

export default Projects
