import { EDUCATION } from "../constants"
import { motion } from "framer-motion"
import { FaGraduationCap } from "react-icons/fa"

const Education = () => {
    return (
        <div className="pb-32 px-8">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight [color:var(--text-primary)]"
            >
                Education<span className="[color:var(--text-secondary)] opacity-40">.</span>
            </motion.h2>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {EDUCATION.map((edu, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group lg:col-span-2"
                        >
                            <div className="relative h-full p-6 md:p-8 lg:p-12 rounded-3xl md:rounded-[2.5rem] border border-[color:var(--border-color)] [background-color:rgba(var(--bg-secondary),0.1)] backdrop-blur-3xl hover:border-[color:var(--accent)] transition-all duration-700 group-hover:shadow-[0_0_30px_var(--accent-glow)] overflow-hidden">

                                {/* Minimalist Credential Layout */}
                                <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <FaGraduationCap className="text-6xl md:text-8xl [color:var(--accent)] rotate-12" />
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                    {/* Circular Logo - Matching Experience Style */}
                                    <div className="relative group/logo flex-shrink-0">
                                        <motion.div
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full border-2 md:border-4 [border-color:var(--accent)] overflow-hidden flex items-center justify-center transition-all duration-500 hover:border-[4px] md:hover:border-[6px] cursor-pointer"
                                            style={{ boxShadow: '0 0 10px var(--accent-glow), 0 0 2px var(--accent)' }}
                                        >
                                            <img
                                                src={edu.logo}
                                                alt={edu.institution}
                                                className="w-full h-full object-cover group-hover/logo:scale-110 transition-transform duration-500"
                                            />
                                        </motion.div>
                                        {/* Graduation Cap Badge */}
                                        <div className="absolute -bottom-1 -right-1 h-4 w-4 md:h-6 md:w-6 rounded-full [background-color:var(--accent)] flex items-center justify-center shadow-lg">
                                            <FaGraduationCap className="text-[8px] md:text-[10px] text-white" />
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-3 md:space-y-4">
                                        <div>
                                            <span className="text-[10px] md:text-xs font-bold [color:var(--accent)] tracking-widest uppercase [background-color:rgba(var(--accent),0.1)] px-3 py-1 rounded-full border [border-color:rgba(var(--accent),0.2)] mb-3 md:mb-4 inline-block">
                                                {edu.year}
                                            </span>
                                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold [color:var(--text-primary)] group-hover:[color:var(--accent)] transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-base md:text-lg [color:var(--text-secondary)] font-medium opacity-80 mt-1">
                                                {edu.institution}
                                            </p>
                                        </div>

                                        <p className="max-w-xl text-sm md:text-base leading-relaxed [color:var(--text-secondary)] font-light opacity-70">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -bottom-20 -left-20 w-64 h-64 [background-color:var(--accent)] opacity-5 rounded-full blur-[80px] group-hover:opacity-10 transition-all duration-1000" />
                            </div>
                        </motion.div>
                    ))}

                    {/* Dynamic Quote Card */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 20 }}
                        className="hidden lg:flex flex-col justify-center p-10 rounded-[2.5rem] border border-[color:var(--border-color)] [background-color:var(--bg-secondary)] opacity-40 hover:opacity-100 transition-opacity"
                    >
                        <h4 className="text-xl font-bold [color:var(--text-primary)] mb-4 italic font-serif">"Commitment to continuous learning and technical excellence."</h4>
                        <div className="h-[2px] w-12 [background-color:var(--accent)] rounded-full" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Education
