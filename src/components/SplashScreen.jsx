import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "../context/ThemeContext"

const SplashScreen = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true)
    const { theme } = useTheme()

    useEffect(() => {
        // Shorter on mobile for faster load feel
        const isMobile = window.innerWidth < 768
        const duration = isMobile ? 1800 : 2500

        const timer = setTimeout(() => {
            setIsVisible(false)
            setTimeout(onComplete, 400)
        }, duration)

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
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center [background-color:var(--bg-primary)]"
                >
                    {/* Background gradient - Simplified for performance */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full [background-color:var(--accent)] opacity-10 blur-[80px] md:blur-[120px]"
                        />
                    </div>

                    {/* Logo/Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative z-10 text-center px-4"
                    >
                        {/* Main Name */}
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-7xl font-black [color:var(--text-primary)] tracking-tighter"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            Tanmoy
                            <motion.span
                                className="[color:var(--accent)]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2, delay: 0.5 }}
                            >
                                .
                            </motion.span>
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            className="mt-3 md:mt-4 text-xs sm:text-sm md:text-base [color:var(--text-secondary)] tracking-[0.2em] md:tracking-[0.3em] uppercase font-light"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                        >
                            Backend Developer
                        </motion.p>
                    </motion.div>

                    {/* Loading Bar */}
                    <motion.div
                        className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 h-1 rounded-full overflow-hidden [background-color:var(--bg-secondary)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <motion.div
                            className={`h-full bg-gradient-to-r ${getAccentGradient()} rounded-full`}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                        />
                    </motion.div>

                    {/* Decorative corners - Hidden on mobile */}
                    <motion.div
                        className="absolute top-4 left-4 md:top-8 md:left-8 w-8 h-8 md:w-12 md:h-12 border-l-2 border-t-2 [border-color:var(--accent)] opacity-30 hidden sm:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    />
                    <motion.div
                        className="absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 md:w-12 md:h-12 border-r-2 border-t-2 [border-color:var(--accent)] opacity-30 hidden sm:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    />
                    <motion.div
                        className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-8 h-8 md:w-12 md:h-12 border-l-2 border-b-2 [border-color:var(--accent)] opacity-30 hidden sm:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    />
                    <motion.div
                        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-8 h-8 md:w-12 md:h-12 border-r-2 border-b-2 [border-color:var(--accent)] opacity-30 hidden sm:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.3, scale: 1 }}
                        transition={{ delay: 0.6 }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SplashScreen
