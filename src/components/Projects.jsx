import { useRef, memo } from "react"
import { PROJECTS } from "../constants"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { FaGithub } from "react-icons/fa"

const ProjectItem = memo(({ project, index }) => {
  const containerRef = useRef(null)

  // Scroll parallax for the image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smooth parallax values
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-50, 50]), { stiffness: 100, damping: 30 })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  const isEven = index % 2 === 0

  return (
    <div ref={containerRef} className="min-h-[80vh] flex items-center justify-center py-20 relative px-4 md:px-0">
      {/* Massive Background Index */}
      <motion.span
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        whileInView={{ opacity: 0.15, x: isEven ? -20 : 20 }}
        transition={{ duration: 1.5 }}
        className={`absolute text-[15rem] md:text-[25rem] font-black pointer-events-none select-none [color:var(--accent)] hidden lg:block ${isEven ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 z-0 gpu-accel`}
      >
        0{index + 1}
      </motion.span>

      <motion.div
        style={{ opacity, scale }}
        className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 w-full max-w-7xl relative z-10`}
      >
        {/* Cinematic Image Container */}
        <div className="w-full lg:w-3/5 group items-center justify-center flex">
          <div className="relative w-full aspect-[16/9] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border border-[color:var(--border-color)] shadow-2xl gpu-accel transition-colors duration-700 group-hover:border-[color:var(--accent)] bg-transparent">
            <motion.div style={{ y }} className="absolute inset-0 w-full h-full scale-110 gpu-accel">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className={`w-full h-full object-cover ${project.title === "User-Blog Authentication API" ? "scale-[1.6]" : ""
                  }`}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-primary)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px] will-change-[opacity]">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg shadow-2xl"
              >
                <FaGithub className="text-2xl" />
                <span>View Source</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Narrative Content */}
        <div className={`w-full lg:w-2/5 space-y-8 text-center ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-5xl font-black [color:var(--text-primary)] tracking-tighter leading-none mb-2">
                {project.title}
              </h3>
              <div className={`h-1.5 w-20 [background-color:var(--accent)] rounded-full mx-auto ${isEven ? 'lg:ml-0' : 'lg:mr-0'}`} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              className="text-lg md:text-xl leading-relaxed [color:var(--text-secondary)] font-light"
            >
              {project.description}
            </motion.p>
          </div>

          <div className={`flex flex-wrap gap-2 justify-center ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-full border border-[color:var(--border-color)] [color:var(--text-primary)] bg-white/5 backdrop-blur-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
})

const Projects = () => {
  return (
    <div className="relative pt-32 pb-64 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-32 relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black tracking-tightest [color:var(--text-primary)]"
        >
          Chosen <span className="[color:var(--accent)]">Work</span>
        </motion.h2>
        <p className="mt-4 text-lg md:text-xl [color:var(--text-secondary)] opacity-50 uppercase tracking-[0.5em] font-medium">Selected Personal Endeavors</p>
      </div>

      <div className="space-y-[10vh] md:space-y-[0vh]">
        {PROJECTS.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects
