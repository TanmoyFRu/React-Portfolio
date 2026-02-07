import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"
import { FaMoon, FaSun, FaRocket, FaCode } from "react-icons/fa"
import Magnetic from "./Magnetic"

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    const themes = [
        { id: "midnight", icon: <FaMoon />, color: "#6366f1", label: "Midnight" },
        { id: "emerald", icon: <FaCode />, color: "#10b981", label: "Emerald" },
        { id: "cosmic", icon: <FaRocket />, color: "#a855f7", label: "Cosmic" },
        { id: "solar", icon: <FaSun />, color: "#f59e0b", label: "Solar" },
    ]

    return (
        <div
            className="flex items-center gap-2 sm:gap-3 p-1 sm:p-1.5 rounded-full border backdrop-blur-md"
            style={{
                backgroundColor: 'color-mix(in srgb, var(--bg-secondary), transparent 60%)',
                borderColor: 'var(--border-color)'
            }}
        >
            {themes.map((t) => (
                <Magnetic key={t.id}>
                    <button
                        onClick={() => setTheme(t.id)}
                        className={`relative p-2 sm:p-2.5 rounded-full transition-colors duration-300 group ${theme === t.id ? "text-white" : "[color:var(--text-secondary)] hover:[color:var(--text-primary)]"
                            }`}
                        aria-label={`Switch to ${t.label} atmosphere`}
                    >
                        {theme === t.id && (
                            <motion.div
                                layoutId="theme-active"
                                className="absolute inset-0 rounded-full"
                                style={{
                                    backgroundColor: t.color,
                                    boxShadow: `0 0 20px ${t.color}50`
                                }}
                                initial={false}
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10 text-base sm:text-lg">
                            {t.icon}
                        </span>

                        {/* Tooltip - hidden on mobile */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:block [background-color:var(--bg-secondary)] [color:var(--text-primary)] border [border-color:var(--border-color)]">
                            {t.label}
                        </span>
                    </button>
                </Magnetic>
            ))}
        </div>
    )
}

export default ThemeToggle
