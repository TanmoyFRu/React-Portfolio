import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

const SplashScreen = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true)
    const { theme } = useTheme()

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            setTimeout(onComplete, 500) // Wait for exit animation
        }, 2500) // Show for 2.5 seconds

        return () => clearTimeout(timer)
    }, [onComplete])

    // Theme-specific accent colors for the loading bar
    const getAccentGradient = () => {
        switch (theme) {
            case 'emerald': return 'from-emerald-500 to-green-400'
            case 'solar': return 'from-orange-500 to-yellow-400'
            case 'cosmic': return 'from-purple-500 to-pink-400'
            case 'midnight':
            default: return 'from-indigo-500 to-blue-400'
        }
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center [background-color:var(--bg-primary)]"
                >
                    {/* Background gradient */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full [background-color:var(--accent)] opacity-10 blur-[120px]"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </div>

                    {/* Logo/Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10 text-center"
                    >
                        {/* Main Name */}
                        <motion.h1
                            className="text-5xl md:text-7xl font-black [color:var(--text-primary)] tracking-tighter"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Tanmoy
                            <motion.span
                                className="[color:var(--accent)]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.8 }}
                            >
                                .
                            </motion.span>
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            className="mt-4 text-sm md:text-base [color:var(--text-secondary)] tracking-[0.3em] uppercase font-light"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            Backend Developer
                        </motion.p>
                    </motion.div>

                    {/* Loading Bar */}
                    <motion.div
                        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-1 rounded-full overflow-hidden [background-color:var(--bg-secondary)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <motion.div
                            className={`h-full bg-gradient-to-r ${getAccentGradient()} rounded-full`}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.3, delay: 1.2, ease: "easeOut" }}
                        />
                    </motion.div>

                    {/* Decorative corners */}
                    <motion.div
                        className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 [border-color:var(--accent)] opacity-30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    />
                    <motion.div
                        className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 [border-color:var(--accent)] opacity-30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ delay: 0.6 }}
                    />
                    <motion.div
                        className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 [border-color:var(--accent)] opacity-30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ delay: 0.7 }}
                    />
                    <motion.div
                        className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 [border-color:var(--accent)] opacity-30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ delay: 0.8 }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SplashScreen
