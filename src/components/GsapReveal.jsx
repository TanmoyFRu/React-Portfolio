import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const GsapReveal = ({ children, delay = 0, duration = 1.2, y = 50, skewY = 0, stagger = 0.1, scrub = false, start = "top 85%", className = "" }) => {
    const containerRef = useRef()

    useGSAP(() => {
        const elements = containerRef.current.children
        if (!elements || elements.length === 0) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: start,
                toggleActions: scrub ? "play none none reverse" : "play none none none",
                scrub: scrub
            }
        })

        tl.from(elements, {
            y: y,
            skewY: skewY,
            opacity: 0,
            duration: duration,
            stagger: stagger,
            ease: "power4.out",
            delay: delay
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className={`gsap-reveal-container ${className}`}>
            {children}
        </div>
    )
}




export default GsapReveal
