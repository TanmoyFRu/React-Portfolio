import { EDUCATION } from "../constants"
import { motion } from "framer-motion"
import { FaGraduationCap } from "react-icons/fa"
import { memo } from "react"

const Education = () => {
    const isSingle = EDUCATION.length === 1;

    return (
        <div className="pb-32 px-4 md:px-8">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight [color:var(--text-primary)]"
            >
                Education<span className="[color:var(--text-secondary)] opacity-40">.</span>
            </motion.h2>

            <div className="max-w-6xl mx-auto">
                <div className={`grid grid-cols-1 ${isSingle ? 'lg:grid-cols-12' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8 md:gap-12 items-center`}>
                    {EDUCATION.map((edu, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative group ${isSingle ? 'lg:col-span-8 lg:col-start-1' : 'lg:col-span-2'} gpu-accel`}
                        >
                            <div className="relative h-full p-6 md:p-10 lg:p-16 rounded-3xl md:rounded-[3rem] border border-[color:var(--border-color)] [background-color:rgba(var(--bg-secondary),0.1)] blur-optimized hover:border-[color:var(--accent)] transition-[border-color,box-shadow] duration-700 group-hover:shadow-[0_0_40px_var(--accent-glow)] overflow-hidden">

                                {/* Minimalist Credential Layout */}
                                <div className="absolute top-0 right-0 p-6 md:p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <FaGraduationCap className="text-7xl md:text-9xl [color:var(--accent)] rotate-12" />
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                                    {/* Circular Logo - Matching Experience Style */}
                                    <div className="relative group/logo flex-shrink-0">
                                        <motion.div
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                            className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] rounded-full border-2 md:border-4 [border-color:var(--accent)] overflow-hidden flex items-center justify-center transition-[transform,border-width] duration-500 hover:border-[4px] md:hover:border-[6px] cursor-pointer bg-white/5"
                                            style={{ boxShadow: '0 0 20px var(--accent-glow), 0 0 5px var(--accent)' }}
                                        >
                                            <img
                                                src={edu.logo}
                                                alt={edu.institution}
                                                className="w-full h-full object-cover group-hover/logo:scale-110 transition-transform duration-500"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </motion.div>
                                        {/* Graduation Cap Badge */}
                                        <div className="absolute -bottom-1 -right-1 h-5 w-5 md:h-8 md:w-8 rounded-full [background-color:var(--accent)] flex items-center justify-center shadow-lg border-2 border-[var(--bg-primary)]">
                                            <FaGraduationCap className="text-[10px] md:text-[14px] text-white" />
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-4 md:space-y-6">
                                        <div className="space-y-2">
                                            <span className="text-[10px] md:text-xs font-bold [color:var(--accent)] tracking-widest uppercase [background-color:rgba(var(--accent),0.1)] px-4 py-1.5 rounded-full border [border-color:rgba(var(--accent),0.2)] mb-4 inline-block">
                                                {edu.year}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold [color:var(--text-primary)] group-hover:[color:var(--accent)] transition-colors leading-tight">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-lg md:text-xl [color:var(--text-secondary)] font-medium opacity-80">
                                                {edu.institution}
                                            </p>
                                        </div>

                                        <p className="max-w-2xl text-base md:text-lg leading-relaxed [color:var(--text-secondary)] font-light opacity-70 italic">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -bottom-20 -left-20 w-80 h-80 [background-color:var(--accent)] opacity-5 rounded-full blur-[100px] group-hover:opacity-10 transition-opacity duration-1000" />
                            </div>
                        </motion.div>
                    ))}

                    {/* Dynamic Quote Card */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 20 }}
                        viewport={{ once: true }}
                        className={`${isSingle ? 'lg:col-span-4' : 'hidden lg:flex'} flex flex-col justify-center p-10 rounded-[2.5rem] border border-[color:var(--border-color)] [background-color:var(--bg-secondary)] opacity-40 hover:opacity-100 transition-opacity h-full min-h-[250px] gpu-accel`}
                    >
                        <h4 className="text-xl font-bold [color:var(--text-primary)] mb-6 italic font-serif leading-relaxed">"Commitment to continuous learning and technical excellence."</h4>
                        <div className="h-[2px] w-12 [background-color:var(--accent)] rounded-full mb-4" />
                        <p className="text-xs uppercase tracking-[0.3em] [color:var(--text-secondary)] opacity-50">Philosophy</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default memo(Education)
