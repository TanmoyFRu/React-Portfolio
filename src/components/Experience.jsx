import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <div className="pb-32">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight [color:var(--text-primary)]"
            >
                Experience<span className="[color:var(--accent)]">.</span>
            </motion.h2>

            <div className="max-w-4xl mx-auto px-4 relative">
                {/* Modern Roadmap Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--accent)] via-[var(--accent-glow)] to-transparent opacity-30" />

                <div className="space-y-24">
                    {EXPERIENCES.map((experience, index) => (
                        <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                            {/* Roadmap Node with Logo - Visible on all devices */}
                            <div className="absolute left-0 md:left-1/2 md:ml-[-25px] z-10 group/logo">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                    className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full border-3 md:border-4 [border-color:var(--accent)] overflow-hidden flex items-center justify-center transition-all duration-500 hover:border-[6px] cursor-pointer"
                                    style={{ boxShadow: '0 0 15px var(--accent-glow), 0 0 3px var(--accent)' }}
                                >
                                    <img
                                        src={experience.logo}
                                        alt={experience.company}
                                        className="w-full h-full object-cover group-hover/logo:scale-110 transition-transform duration-500"
                                    />
                                </motion.div>
                            </div>

                            {/* Content Card */}
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                transition={{ duration: 0.8 }}
                                className={`w-full pl-14 md:pl-0 md:w-[42%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} group`}
                            >
                                <div className="relative p-10 rounded-[2rem] border border-[color:var(--border-color)] [background-color:rgba(var(--bg-secondary),0.3)] backdrop-blur-xl hover:border-[color:var(--accent)] transition-all duration-700 group-hover:shadow-[0_0_30px_var(--accent-glow)] overflow-hidden">
                                    {/* Subtle Background Accent */}
                                    <div className="absolute -top-10 -right-10 w-24 h-24 [background-color:var(--accent)] opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700" />

                                    <div className="flex flex-col gap-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold [color:var(--text-primary)] group-hover:[color:var(--accent)] transition-colors line-height-tight">
                                                    {experience.company}
                                                </h3>
                                                <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 [color:var(--text-secondary)]">
                                                    {experience.year}
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold [color:var(--text-primary)] mb-3 opacity-90">
                                                {experience.role}
                                            </h4>
                                            <p className="text-sm leading-relaxed [color:var(--text-secondary)] font-light opacity-80 mb-6">
                                                {experience.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 text-[10px] font-bold [background-color:var(--bg-secondary)] [color:var(--text-primary)] border border-[color:var(--border-color)] rounded-lg tracking-wider uppercase opacity-60 group-hover:opacity-100 group-hover:border-[color:var(--accent)] group-hover:[color:var(--accent)] transition-all duration-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
