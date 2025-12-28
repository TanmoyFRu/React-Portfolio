import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "technologies", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
]

const SectionNav = () => {
    const [activeSection, setActiveSection] = useState("hero")
    const [isVisible, setIsVisible] = useState(false)
    const [hoveredSection, setHoveredSection] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            // Show nav after scrolling down a bit
            setIsVisible(window.scrollY > 300)

            // Determine active section
            const scrollPosition = window.scrollY + window.innerHeight / 3

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id)
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id)
                    break
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Initial check
        return () => window.removeEventListener("scroll", handleScroll)
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
