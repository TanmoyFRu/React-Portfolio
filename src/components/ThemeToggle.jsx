import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "../context/ThemeContext"
import { FaMoon, FaSun, FaRocket, FaCode } from "react-icons/fa"
import Magnetic from "./Magnetic"

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    const themes = [
        { id: "midnight", icon: <FaMoon />, color: "#6366f1", label: "Midnight" },
        { id: "emerald", icon: <FaCode />, color: "#10b981", label: "Emerald" },
        { id: "cosmic", icon: <FaRocket />, color: "#a855f7", label: "Cosmic" },
        { id: "solar", icon: <FaSun />, color: "#4f46e5", label: "Solar" },
    ]

    return (
        <div className="flex items-center gap-3 bg-stone-900/40 p-1.5 rounded-full border border-stone-800 backdrop-blur-md">
            {themes.map((t) => (
                <Magnetic key={t.id}>
                    <button
                        onClick={() => setTheme(t.id)}
                        className={`relative p-2.5 rounded-full transition-all duration-300 group ${theme === t.id ? "text-white" : "text-stone-500 hover:text-stone-300"
                            }`}
                        aria-label={`Switch to ${t.label} atmosphere`}
                    >
                        {theme === t.id && (
                            <motion.div
                                layoutId="theme-active"
                                className="absolute inset-0 rounded-full shadow-[0_0_15px_var(--accent-glow)] scale-110"
                                style={{ backgroundColor: t.id === theme ? 'var(--accent)' : t.color }}
                                initial={false}
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10 text-lg">
                            {t.icon}
                        </span>

                        {/* Tooltip */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-stone-900 text-[10px] font-bold uppercase tracking-widest text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-stone-800 whitespace-nowrap">
                            {t.label}
                        </span>
                    </button>
                </Magnetic>
            ))}
        </div>
    )
}

export default ThemeToggle
