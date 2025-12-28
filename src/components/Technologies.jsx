import { BiLogoPostgresql } from "react-icons/bi"
import { SiRedis, SiFastapi, SiMongodb } from "react-icons/si"
import { RiReactjsLine, RiVuejsLine } from "react-icons/ri"
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight"
            >
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4 rounded-2xl border-4 border-neutral-800 hover:scale-110 transition-transform duration-300"
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    className="p-4 rounded-2xl border-4 border-neutral-800 hover:scale-110 transition-transform duration-300">
                    <RiVuejsLine className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(5)}
                    className="p-4 rounded-2xl border-4 border-neutral-800 hover:scale-110 transition-transform duration-300">
                    <SiMongodb className="text-7xl text-cyan-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    className="p-4 rounded-2xl border-4 border-neutral-800 hover:scale-110 transition-transform duration-300">
                    <SiFastapi className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6)}
                    className="p-4 rounded-2xl border-4 border-neutral-800 hover:scale-110 transition-transform duration-300">
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className="p-4 rounded-2xl border-4 border-neutral-800 hover:scale-110 transition-transform duration-300">
                    <SiRedis className="text-7xl text-red-600" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
