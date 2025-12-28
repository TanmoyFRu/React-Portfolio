import { useRef, useState, useEffect, useCallback } from "react"
import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const ProjectCard = ({ project }) => {
  return (
    <div
      className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] h-full p-6 md:p-8 lg:p-10 rounded-[2rem] border border-[color:var(--border-color)] backdrop-blur-xl flex flex-col gap-6 transition-all duration-500 hover:border-[color:var(--accent)] group relative pointer-events-auto"
      style={{ backgroundColor: 'color-mix(in srgb, var(--bg-secondary), transparent 60%)' }}
    >
      <div
        className="absolute inset-0 rounded-[2rem] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"
        style={{
          background: `radial-gradient(circle at center, var(--accent) 0%, transparent 70%)`,
          filter: 'blur(40px)',
        }}
      />

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full aspect-[16/9] overflow-hidden rounded-xl md:rounded-2xl shadow-xl relative block bg-black/5"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
          <span className="px-6 py-2 bg-white text-black rounded-full font-bold text-xs lg:text-sm shadow-lg">
            View on GitHub
          </span>
        </div>
      </a>

      <div className="space-y-3 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold [color:var(--text-primary)]">
          {project.title}
        </h3>
        <p className="[color:var(--text-secondary)] text-sm md:text-base leading-relaxed line-clamp-3 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full border [border-color:var(--border-color)] text-[10px] [color:var(--accent)] font-medium"
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
  const [isInteracting, setIsInteracting] = useState(false)
  const animationRef = useRef(null)
  const autoScrollSpeed = 0.5 // pixels per frame

  const duplicatedProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS]

  const animate = useCallback(() => {
    if (!scrollRef.current || isInteracting) return

    const container = scrollRef.current
    container.scrollLeft += autoScrollSpeed

    // Seamless loop: check if we've scrolled past one-third of the total width
    const oneThirdWidth = container.scrollWidth / 3
    if (container.scrollLeft >= oneThirdWidth * 2) {
      container.scrollLeft = oneThirdWidth
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft = oneThirdWidth
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [isInteracting])

  useEffect(() => {
    // Start at the middle set for seamless initial scroll in both directions
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationRef.current)
  }, [animate])

  // Mouse handlers for desktop dragging
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e) => {
    setIsInteracting(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isInteracting) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => setIsInteracting(false)
  const handleMouseLeave = () => setIsInteracting(false)

  // Touch handlers for mobile
  const handleTouchStart = () => setIsInteracting(true)
  const handleTouchEnd = () => setIsInteracting(false)

  return (
    <div className="py-24 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="mb-16 text-center text-4xl lg:text-5xl font-bold [color:var(--text-primary)]"
      >
        Personal <span className="[color:var(--accent)]">Projects</span>
      </motion.h2>

      <div
        ref={scrollRef}
        className={`flex items-stretch gap-6 md:gap-8 overflow-x-auto pb-12 scrollbar-hide px-4 ${isInteracting ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        style={{
          scrollBehavior: 'auto', // Always use auto for programmatic animation to avoid judder
          willChange: 'scroll-position' // Hint to browser for optimization
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
      >
        {duplicatedProjects.map((project, index) => (
          <div key={index} className="flex h-[500px] md:h-[550px] lg:h-[600px]">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <p className="text-center text-xs [color:var(--text-secondary)] opacity-50 mt-4">
        Drag or swipe to explore • Auto-scroll resumes on release
      </p>
    </div>
  )
}

export default Projects
