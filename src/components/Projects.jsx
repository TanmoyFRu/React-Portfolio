import { useRef, useState, useEffect, useCallback } from "react"
import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const ProjectCard = ({ project }) => {
  return (
    <div
      className="flex-shrink-0 w-[85vw] md:w-[50vw] lg:w-[35vw] p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[3rem] border border-[color:var(--border-color)] backdrop-blur-xl flex flex-col gap-6 md:gap-8 transition-all duration-500 hover:border-[color:var(--accent)] hover:shadow-2xl hover:shadow-[color:var(--accent-glow)] group relative"
    >
      <div
        className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
        style={{
          background: `radial-gradient(circle at center, var(--accent) 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full aspect-[16/9] overflow-hidden rounded-xl md:rounded-[2rem] shadow-2xl relative block bg-black/20"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* View on GitHub overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-6 md:p-10">
          <span className="px-6 md:px-8 py-2 md:py-3 bg-white text-black rounded-full font-bold tracking-tight shadow-xl text-xs lg:text-sm">
            View on GitHub
          </span>
        </div>
      </a>

      <div className="space-y-3 md:space-y-4">
        <div className="space-y-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold [color:var(--text-primary)] tracking-tight hover:[color:var(--accent)] transition-colors duration-300">
              {project.title}
            </h3>
          </a>
          <div className="h-1 w-10 bg-[color:var(--accent)] rounded-full translate-x-1" />
        </div>

        <p className="[color:var(--text-secondary)] leading-relaxed text-sm md:text-base lg:text-xl font-light line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              className="rounded-full border border-[color:var(--border-color)] [background-color:rgba(var(--bg-secondary),0.5)] px-3 md:px-4 py-1 md:py-1.5 text-[10px] lg:text-xs font-semibold [color:var(--accent)] transition-all duration-300 shadow-sm"
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
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const animationRef = useRef(null)
  const autoScrollSpeed = 0.5 // pixels per frame

  // Auto-scroll function
  const autoScroll = useCallback(() => {
    if (!scrollRef.current || isDragging) return

    const container = scrollRef.current
    container.scrollLeft += autoScrollSpeed

    // Reset to beginning for infinite loop
    const maxScroll = container.scrollWidth / 3
    if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = 0
    }

    animationRef.current = requestAnimationFrame(autoScroll)
  }, [isDragging])

  // Start/stop auto-scroll based on dragging state
  useEffect(() => {
    if (!isDragging) {
      animationRef.current = requestAnimationFrame(autoScroll)
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isDragging, autoScroll])

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5 // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div className="pb-16 md:pb-24 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-12 md:my-20 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight [color:var(--text-primary)]"
      >
        Personal <span className="[color:var(--accent)]">Projects</span>
      </motion.h2>

      <div
        ref={scrollRef}
        className={`flex gap-8 md:gap-16 px-6 md:px-12 overflow-x-auto scrollbar-hide py-6 md:py-10 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        style={{
          scrollBehavior: isDragging ? 'auto' : 'smooth',
          WebkitOverflowScrolling: 'touch'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Triple the projects for seamless loop */}
        {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Scroll hint */}
      <p className="text-center text-xs [color:var(--text-secondary)] opacity-50 mt-4">
        Drag to explore
      </p>
    </div>
  )
}

export default Projects
