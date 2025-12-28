import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight"
            >
                Experience
            </motion.h2>

            <div className="relative mx-auto max-w-6xl px-4">
                {/* Vertical Timeline Line */}
                <div className="absolute left-4 lg:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent" />

                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className={`mb-16 flex flex-wrap lg:justify-between items-center w-full ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Timeline Node / Company Logo */}
                        <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 z-20">
                            {experience.logo ? (
                                <motion.div
                                    whileInView={{ scale: [0, 1.2, 1] }}
                                    transition={{ duration: 0.5 }}
                                    className="h-10 w-10 lg:h-14 lg:w-14 rounded-full border-2 border-indigo-500 bg-white p-1 shadow-[0_0_15px_rgba(99,102,241,0.5)] overflow-hidden"
                                >
                                    <img
                                        src={experience.logo}
                                        alt={`${experience.company} logo`}
                                        className="h-full w-full object-contain"
                                    />
                                </motion.div>
                            ) : (
                                <div className="h-4 w-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
                            )}
                        </div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-[45%] pl-10 lg:pl-0"
                        >
                            <div className="group relative rounded-3xl border border-stone-800 bg-stone-900/40 p-6 lg:p-8 backdrop-blur-md hover:border-indigo-500/50 transition-all duration-500 shadow-xl hover:shadow-indigo-500/10">
                                <span className="inline-block rounded-full bg-stone-800 px-4 py-1 text-xs font-semibold text-indigo-400 mb-4 shadow-inner">
                                    {experience.year}
                                </span>
                                <h3 className="mb-2 text-2xl font-bold tracking-tight text-stone-100">
                                    {experience.role}
                                </h3>
                                <h4 className="mb-4 text-lg font-medium text-indigo-300">
                                    {experience.company}
                                </h4>
                                <p className="mb-6 text-stone-400 leading-relaxed font-light text-base lg:text-lg">
                                    {experience.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="rounded-full bg-stone-800/80 px-3 py-1 text-[10px] lg:text-xs font-medium text-stone-300 border border-stone-700/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Empty spacer for desktop layout */}
                        <div className="hidden lg:block lg:w-[45%]" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
