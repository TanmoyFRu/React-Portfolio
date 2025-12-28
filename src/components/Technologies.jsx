import { BiLogoPostgresql } from "react-icons/bi"
import { SiRedis, SiFastapi, SiPython, SiDocker, SiCelery, SiGoogle } from "react-icons/si"
import { RiReactjsLine } from "react-icons/ri"
import { motion } from 'framer-motion'
import Magnetic from "./Magnetic"

const Technologies = () => {
    const techs = [
        { icon: <SiPython className="text-5xl text-yellow-400" />, name: "Python", desc: "Core Engine", size: "lg:col-span-2", floatDelay: 0 },
        { icon: <SiFastapi className="text-5xl text-green-500" />, name: "FastAPI", desc: "API Excellence", size: "lg:col-span-1", floatDelay: 0.2 },
        { icon: <BiLogoPostgresql className="text-5xl text-sky-700" />, name: "PostgreSQL", desc: "Data Persistence", size: "lg:col-span-1", floatDelay: 0.4 },
        { icon: <SiRedis className="text-5xl text-red-600" />, name: "Redis", desc: "In-Memory Optimization", size: "lg:col-span-1", floatDelay: 0.6 },
        { icon: <SiCelery className="text-5xl text-green-400" />, name: "Celery", desc: "Distributed Tasks", size: "lg:col-span-1", floatDelay: 0.8 },
        { icon: <SiGoogle className="text-5xl text-blue-400" />, name: "Gemini AI", desc: "LLM Integration", size: "lg:col-span-1", floatDelay: 1.0 },
        { icon: <SiDocker className="text-5xl text-blue-500" />, name: "Docker", desc: "Infrastructure", size: "lg:col-span-1", floatDelay: 1.2 },
        { icon: <RiReactjsLine className="text-5xl text-cyan-400" />, name: "React", desc: "Modern UI", size: "lg:col-span-1", floatDelay: 1.4 },
    ]

    // Floating animation variants
    const floatingVariants = {
        float: (delay) => ({
            y: [0, -10, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }
        })
    }

    return (
        <div className="pb-32">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight [color:var(--text-primary)]"
            >
                Tech Stack<span className="[color:var(--accent)]">.</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
                {techs.map((tech, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1] // Custom quint ease
                        }}
                        className={`${tech.size} group`}
                    >
                        <motion.div
                            variants={floatingVariants}
                            custom={tech.floatDelay}
                            animate="float"
                            className="h-full"
                        >
                            <Magnetic>
                                <div className="h-full flex flex-col items-center justify-center p-8 rounded-[2.5rem] border [border-color:var(--border-color)] [background-color:rgba(var(--bg-secondary),0.4)] backdrop-blur-xl hover:border-[color:var(--accent)] transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_var(--accent-glow)] active:scale-95 cursor-none relative overflow-hidden"
                                    style={{ backgroundColor: 'color-mix(in srgb, var(--bg-secondary), transparent 60%)' }}
                                >
                                    {/* Glowing background on hover */}
                                    <div className="absolute inset-0 [background-color:var(--accent)] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[2.5rem]" />

                                    <div className="mb-4 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 relative z-10">
                                        {tech.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold [color:var(--text-primary)] relative z-10">{tech.name}</h3>
                                    <p className="text-xs [color:var(--text-secondary)] mt-1 relative z-10">{tech.desc}</p>

                                    {/* Decorative corner accent */}
                                    <div className="absolute -bottom-4 -right-4 w-16 h-16 [background-color:var(--accent)] opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500" />
                                </div>
                            </Magnetic>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Technologies
