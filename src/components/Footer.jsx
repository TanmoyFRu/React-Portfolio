import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from "react-icons/fa"
import { SiReact, SiTailwindcss } from "react-icons/si"
import { useTheme } from "../context/ThemeContext"
import LightRays from "./LightRays"

// Matrix Rain Effect - Emerald Theme
const MatrixRain = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resizeCanvas()

        const chars = 'アイウエオカキクケコ0123456789<>/{}[]()'
        const charArray = chars.split('')
        const fontSize = 14
        const columns = Math.floor(canvas.width / fontSize)
        const drops = Array(columns).fill(0).map(() => Math.random() * -50)

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = '#10b981'
            ctx.font = `${fontSize}px monospace`

            for (let i = 0; i < drops.length; i++) {
                const char = charArray[Math.floor(Math.random() * charArray.length)]
                ctx.fillText(char, i * fontSize, drops[i] * fontSize)
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
                drops[i]++
            }
        }

        const interval = setInterval(draw, 50)
        window.addEventListener('resize', resizeCanvas)
        return () => { clearInterval(interval); window.removeEventListener('resize', resizeCanvas) }
    }, [])

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" />
}

// Floating Stars Effect - Midnight Theme
const StarField = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resizeCanvas()

        const stars = Array(100).fill(0).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random() * 0.5 + 0.3
        }))

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.02)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            stars.forEach(star => {
                ctx.beginPath()
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(99, 102, 241, ${star.opacity})`
                ctx.fill()

                star.y -= star.speed
                star.opacity = 0.3 + Math.sin(Date.now() * 0.003 + star.x) * 0.3
                if (star.y < 0) { star.y = canvas.height; star.x = Math.random() * canvas.width }
            })
        }

        const interval = setInterval(draw, 30)
        window.addEventListener('resize', resizeCanvas)
        return () => { clearInterval(interval); window.removeEventListener('resize', resizeCanvas) }
    }, [])

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />
}

// Nebula Effect - Cosmic Theme
const NebulaEffect = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resizeCanvas()

        const particles = Array(60).fill(0).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            hue: Math.random() * 60 + 260
        }))

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            particles.forEach(p => {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, 0.6)`
                ctx.fill()

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
                ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, 0.1)`
                ctx.fill()

                p.x += p.speedX
                p.y += p.speedY
                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
            })
        }

        const interval = setInterval(draw, 30)
        window.addEventListener('resize', resizeCanvas)
        return () => { clearInterval(interval); window.removeEventListener('resize', resizeCanvas) }
    }, [])

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" />
}

const Footer = () => {
    const { theme } = useTheme()
    const currentYear = new Date().getFullYear()
    const isSolar = theme === 'solar'

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/TanmoyFRu", label: "GitHub" },
        { icon: FaLinkedin, href: "https://linkedin.com/in/tanmoy-debnath", label: "LinkedIn" },
        { icon: FaEnvelope, href: "mailto:tanmoydn2003@gmail.com", label: "Email" },
    ]

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ]

    const renderThemeEffect = () => {
        switch (theme) {
            case 'emerald': return <MatrixRain />
            case 'midnight': return <StarField />
            case 'solar': return (
                <LightRays
                    raysOrigin="bottom-left"
                    raysColor="#ff8c00"
                    raysSpeed={0.8}
                    lightSpread={1.2}
                    rayLength={1.5}
                    pulsating={true}
                    fadeDistance={1.2}
                    saturation={1.2}
                    followMouse={false}
                    noiseAmount={0.05}
                    distortion={0.02}
                />
            )
            case 'cosmic': return <NebulaEffect />
            default: return <StarField />
        }
    }

    return (
        <footer className="relative overflow-hidden [background-color:var(--bg-primary)] border-t [border-color:var(--border-color)]">
            {renderThemeEffect()}

            <div className="relative z-20 max-w-6xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold [color:var(--text-primary)]">
                            Tanmoy<span className="[color:var(--accent)]">.</span>
                        </h3>
                        <p className="text-sm [color:var(--text-secondary)] leading-relaxed opacity-70">
                            Backend developer crafting robust APIs and scalable systems.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="h-10 w-10 rounded-lg [background-color:var(--bg-secondary)] border [border-color:var(--border-color)] flex items-center justify-center [color:var(--text-secondary)] hover:[color:var(--accent)] hover:border-[color:var(--accent)] transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="text-base" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h4 className="text-xs font-bold [color:var(--text-secondary)] uppercase tracking-[0.15em]">
                            Quick Links
                        </h4>
                        <nav className="grid grid-cols-2 gap-2">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-sm [color:var(--text-secondary)] hover:[color:var(--accent)] transition-colors opacity-70 hover:opacity-100"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h4 className="text-xs font-bold [color:var(--text-secondary)] uppercase tracking-[0.15em]">
                            Built With
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md [background-color:var(--bg-secondary)] border [border-color:var(--border-color)] text-xs [color:var(--text-secondary)]">
                                <SiReact className="text-cyan-400" /> React
                            </span>
                            <span className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md [background-color:var(--bg-secondary)] border [border-color:var(--border-color)] text-xs [color:var(--text-secondary)]">
                                <SiTailwindcss className="text-sky-400" /> Tailwind
                            </span>
                            <span className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md [background-color:var(--bg-secondary)] border [border-color:var(--border-color)] text-xs [color:var(--text-secondary)]">
                                <FaCode className="[color:var(--accent)]" /> Framer
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-10">
                <span
                    className="text-[20vw] font-black tracking-tighter whitespace-nowrap leading-none block translate-y-[40%]"
                    style={{
                        color: isSolar ? 'rgba(0, 0, 0, 0.06)' : 'var(--text-primary)',
                        opacity: isSolar ? 1 : 0.03
                    }}
                >
                    TANMOY
                </span>
            </div>

            <div className="relative z-20 border-t [border-color:var(--border-color)]">
                <div className="max-w-6xl mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs [color:var(--text-secondary)] opacity-50">
                        © {currentYear} Tanmoy Debnath
                    </p>
                    <p className="text-xs [color:var(--text-secondary)] opacity-50 flex items-center gap-1">
                        Made with <FaHeart className="text-red-500 text-[10px]" /> & <span className="[color:var(--accent)]">coffee</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
