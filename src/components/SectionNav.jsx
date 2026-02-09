import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "technologies", label: "Skills" },
    { id: "experience", label: "My Experience" },
    { id: "education", label: "My Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact Me" },
]

const SectionNav = () => {
    const [activeSection, setActiveSection] = useState("hero")
    const [isVisible, setIsVisible] = useState(false)
    const [hoveredSection, setHoveredSection] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300)
        }

        // Passive listener for better scrolling performance
        window.addEventListener("scroll", handleScroll, { passive: true })

        // Use IntersectionObserver for section highlighting
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px", // Trigger when section is near top/center
            threshold: 0
        }

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        sections.forEach(section => {
            const element = document.getElementById(section.id)
            if (element) observer.observe(element)
        })

        handleScroll() // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll)
            observer.disconnect()
        }
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-3"
                >
                    {sections.map((section) => (
                        <motion.button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            onMouseEnter={() => setHoveredSection(section.id)}
                            onMouseLeave={() => setHoveredSection(null)}
                            className="group flex items-center gap-3 cursor-none"
                            whileHover={{ x: -5 }}
                        >
                            {/* Label - appears on hover */}
                            <AnimatePresence>
                                {hoveredSection === section.id && (
                                    <motion.span
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.15 }}
                                        className="text-xs font-medium [color:var(--text-secondary)] whitespace-nowrap"
                                    >
                                        {section.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            {/* Dot indicator */}
                            <motion.div
                                className={`relative flex items-center justify-center`}
                                animate={{
                                    scale: activeSection === section.id ? 1 : 0.8,
                                }}
                            >
                                {/* Outer ring for active */}
                                {activeSection === section.id && (
                                    <motion.div
                                        layoutId="activeRing"
                                        className="absolute w-5 h-5 rounded-full border-2 [border-color:var(--accent)]"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                {/* Inner dot */}
                                <div
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeSection === section.id
                                        ? "[background-color:var(--accent)]"
                                        : "[background-color:var(--text-secondary)] opacity-40 group-hover:opacity-70"
                                        }`}
                                />
                            </motion.div>
                        </motion.button>
                    ))}
                </motion.nav>
            )}
        </AnimatePresence>
    )
}

export default SectionNav
