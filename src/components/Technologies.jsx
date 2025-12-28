import { BiLogoPostgresql } from "react-icons/bi"
import { SiRedis, SiFastapi, SiPython, SiDocker, SiCelery, SiGoogle } from "react-icons/si"
import { RiReactjsLine } from "react-icons/ri"
import { motion } from 'framer-motion'
import Magnetic from "./Magnetic"

const Technologies = () => {
    const techs = [
        { icon: <SiPython className="text-5xl text-yellow-400" />, name: "Python", desc: "Core Engine", size: "lg:col-span-2 shadow-[0_0_30px_rgba(234,179,8,0.1)]" },
        { icon: <SiFastapi className="text-5xl text-green-500" />, name: "FastAPI", desc: "API Excellence", size: "lg:col-span-1" },
        { icon: <BiLogoPostgresql className="text-5xl text-sky-700" />, name: "PostgreSQL", desc: "Data Persistence", size: "lg:col-span-1" },
        { icon: <SiRedis className="text-5xl text-red-600" />, name: "Redis", desc: "In-Memory Optimization", size: "lg:col-span-1" },
        { icon: <SiCelery className="text-5xl text-green-400" />, name: "Celery", desc: "Distributed Tasks", size: "lg:col-span-1" },
        { icon: <SiGoogle className="text-5xl text-blue-400" />, name: "Gemini AI", desc: "LLM Integration", size: "lg:col-span-1" },
        { icon: <SiDocker className="text-5xl text-blue-500" />, name: "Docker", desc: "Infrastructure", size: "lg:col-span-1" },
        { icon: <RiReactjsLine className="text-5xl text-cyan-400" />, name: "React", desc: "Modern UI", size: "lg:col-span-1" },
    ]

    return (
        <div className="pb-32">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight [color:var(--text-primary)]"
            >
                Tech Stack
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
                {techs.map((tech, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`${tech.size} group`}
                    >
                        <Magnetic>
                            <div className="h-full flex flex-col items-center justify-center p-8 rounded-[2.5rem] border [border-color:var(--border-color)] [background-color:rgba(var(--bg-secondary),0.4)] backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-500 shadow-xl hover:shadow-indigo-500/10 active:scale-95 cursor-none"
                                style={{ backgroundColor: 'color-mix(in srgb, var(--bg-secondary), transparent 60%)' }}
                            >
                                <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                                    {tech.icon}
                                </div>
                                <h3 className="text-lg font-semibold [color:var(--text-primary)]">{tech.name}</h3>
                                <p className="text-xs [color:var(--text-secondary)] mt-1">{tech.desc}</p>
                            </div>
                        </Magnetic>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Technologies
