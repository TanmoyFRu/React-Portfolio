import { PROJECTS } from "../constants"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Projects = () => {
  return (
    <div className="pb-32 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-24 text-center text-5xl font-bold tracking-tight"
      >
        Featured Projects
      </motion.h2>

      <div className="relative flex overflow-hidden py-10">
        {/* Infinite slider container */}
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
          className="flex gap-20 px-10"
          style={{ width: "max-content" }}
        >
          {/* We duplicate the projects list multiple times for a seamless loop */}
          {[...PROJECTS, ...PROJECTS].map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[40vw] bg-stone-900/40 p-8 lg:p-10 rounded-[2.5rem] border border-stone-800/50 backdrop-blur-md flex flex-col gap-8 transition-all duration-500 hover:border-indigo-500/40 hover:bg-stone-900/60"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full aspect-[16/9] overflow-hidden rounded-[1.5rem] shadow-2xl relative group block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white font-semibold text-lg">View Project Details</p>
                </div>
              </a>

              <div className="space-y-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </a>
                <p className="text-stone-400 leading-relaxed text-base lg:text-xl font-light line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      className="rounded-full border border-stone-800 bg-stone-950/80 px-4 py-1.5 text-xs lg:text-sm font-medium text-indigo-400/90"
                      key={techIndex}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative gradient overlays for smooth slide-in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10 hidden lg:block" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10 hidden lg:block" />
    </div>
  )
}

export default Projects
