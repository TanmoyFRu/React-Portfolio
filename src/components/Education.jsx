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
                            <div className="relative h-full p-8 lg:p-12 rounded-[2.5rem] border border-[color:var(--border-color)] [background-color:rgba(var(--bg-secondary),0.1)] backdrop-blur-3xl hover:border-[color:var(--accent)] transition-all duration-700 group-hover:shadow-[0_0_30px_var(--accent-glow)] overflow-hidden cursor-none">

                                {/* Minimalist Credential Layout */}
                                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <FaGraduationCap className="text-8xl [color:var(--accent)] rotate-12" />
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                    {/* Circular Logo - Matching Experience Style */}
                                    <div className="relative group/logo">
                                        <motion.div
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                            className="w-[70px] h-[70px] rounded-full border-4 [border-color:var(--accent)] overflow-hidden flex items-center justify-center transition-all duration-500 hover:border-[6px] cursor-pointer"
                                            style={{ boxShadow: '0 0 15px var(--accent-glow), 0 0 3px var(--accent)' }}
                                        >
                                            <img
                                                src={edu.logo}
                                                alt={edu.institution}
                                                className="w-full h-full object-cover group-hover/logo:scale-110 transition-transform duration-500"
                                            />
                                        </motion.div>
                                        {/* Graduation Cap Badge */}
                                        <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full [background-color:var(--accent)] flex items-center justify-center shadow-lg">
                                            <FaGraduationCap className="text-[10px] text-white" />
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <span className="text-xs font-bold [color:var(--accent)] tracking-widest uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-4 inline-block">
                                                {edu.year}
                                            </span>
                                            <h3 className="text-2xl lg:text-3xl font-bold [color:var(--text-primary)] group-hover:[color:var(--accent)] transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-lg [color:var(--text-secondary)] font-medium opacity-80 mt-1">
                                                {edu.institution}
                                            </p>
                                        </div>

                                        <p className="max-w-xl text-base leading-relaxed [color:var(--text-secondary)] font-light opacity-70">
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
