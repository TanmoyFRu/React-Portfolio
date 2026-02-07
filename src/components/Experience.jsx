import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"
import { memo } from "react"

const Experience = () => {
    const isSingle = EXPERIENCES.length === 1;

    return (
        <div className="pb-32">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight [color:var(--text-primary)]"
            >
                Experience<span className="[color:var(--accent)]">.</span>
            </motion.h2>

            <div className={`max-w-${isSingle ? '5xl' : '4xl'} mx-auto px-4 relative`}>
                {/* Modern Roadmap Line - Only show if multiple items */}
                {!isSingle && (
                    <div className="absolute left-4 md:left-1/2 top-10 bottom-0 w-[1px] bg-gradient-to-b from-[var(--accent)] via-[var(--accent-glow)] to-transparent opacity-30 hidden sm:block" />
                )}

                <div className={`space-y-12 ${isSingle ? '' : 'md:space-y-24'}`}>
                    {EXPERIENCES.map((experience, index) => (
                        <div key={index} className={`relative flex flex-col ${isSingle ? 'items-center' : 'md:flex-row items-start md:items-center'}`}>
                            {/* Roadmap Node with Logo - Centered for single, Alternating for multiple */}
                            {!isSingle && (
                                <div className="absolute left-1/2 ml-[-25px] z-10 group/logo hidden md:block gpu-accel">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        className="w-[50px] h-[50px] rounded-full border-4 [border-color:var(--accent)] overflow-hidden flex items-center justify-center transition-[transform,border-width] duration-500 hover:border-[6px] cursor-pointer"
                                        style={{ boxShadow: '0 0 15px var(--accent-glow), 0 0 3px var(--accent)' }}
                                    >
                                        <img
                                            src={experience.logo}
                                            alt={experience.company}
                                            className="w-full h-full object-cover group-hover/logo:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </motion.div>
                                </div>
                            )}

                            {/* Content Card */}
                            <motion.div
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                initial={{
                                    opacity: 0,
                                    x: isSingle ? 0 : (index % 2 === 0 ? -50 : 50),
                                    y: isSingle ? 20 : 0
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`w-full ${isSingle ? 'md:w-[90%] lg:w-[85%]' : 'md:w-[42%]'} ${!isSingle && (index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto')} group gpu-accel`}
                            >
                                <div className="relative p-6 md:p-10 lg:p-14 rounded-3xl md:rounded-[3rem] border border-[color:var(--border-color)] [background-color:rgba(var(--bg-secondary),0.3)] blur-optimized hover:border-[color:var(--accent)] transition-[border-color,box-shadow] duration-700 group-hover:shadow-[0_0_40px_var(--accent-glow)] overflow-hidden">
                                    {/* Subtle Background Accent */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 [background-color:var(--accent)] opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700" />

                                    <div className="flex flex-col gap-6 md:gap-8">
                                        <div className="flex items-center gap-6">
                                            {/* Logo - On desktop for single entry, it's inside the card heading area */}
                                            <div className={`${isSingle ? 'block' : 'md:hidden'}`}>
                                                <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full border-2 md:border-4 [border-color:var(--accent)] overflow-hidden flex items-center justify-center shadow-[0_0_15px_var(--accent-glow)] bg-white/5">
                                                    <img
                                                        src={experience.logo}
                                                        alt={experience.company}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold [color:var(--text-primary)] group-hover:[color:var(--accent)] transition-colors line-height-tight">
                                                    {experience.company}
                                                </h3>
                                                <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase opacity-50 [color:var(--text-secondary)]">
                                                    {experience.year}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold [color:var(--text-primary)] opacity-90">
                                                {experience.role}
                                            </h4>
                                            <p className="text-sm md:text-base lg:text-lg leading-relaxed [color:var(--text-secondary)] font-light opacity-80">
                                                {experience.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            {experience.technologies.map((tech, i) => (
                                                <span key={i} className="px-3 md:px-4 py-1 text-[10px] md:text-[11px] font-bold [background-color:var(--bg-secondary)] [color:var(--text-primary)] border border-[color:var(--border-color)] rounded-xl tracking-wider uppercase opacity-60 group-hover:opacity-100 group-hover:border-[color:var(--accent)] group-hover:[color:var(--accent)] transition-colors duration-300">
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

export default memo(Experience)
