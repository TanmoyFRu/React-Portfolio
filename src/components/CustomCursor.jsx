import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHover = () => setIsHovered(true);
        const handleUnhover = () => setIsHovered(false);
        const handleClick = () => {
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 150);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleClick);

        const targets = document.querySelectorAll("a, button, .group, input, textarea, [role='button']");
        targets.forEach((target) => {
            target.addEventListener("mouseenter", handleHover);
            target.addEventListener("mouseleave", handleUnhover);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleClick);
            targets.forEach((target) => {
                target.removeEventListener("mouseenter", handleHover);
                target.removeEventListener("mouseleave", handleUnhover);
            });
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Subtle Follow Halo */}
            <motion.div
                style={{
                    translateX: springX,
                    translateY: springY,
                    left: -12,
                    top: -12,
                }}
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0.3 : 0.15,
                }}
                className="fixed w-6 h-6 rounded-full pointer-events-none z-[9998] [background-color:var(--accent)] blur-[6px]"
            />

            {/* Classic Mac-Style Arrow Pointer (Zero Latency) */}
            <motion.div
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    left: 0,
                    top: 0,
                }}
                animate={{
                    scale: isClicked ? 0.9 : (isHovered ? 1.2 : 1),
                }}
                className="fixed pointer-events-none z-[9999] drop-shadow-[0_0_12px_var(--accent-glow)]"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="overflow-visible"
                >
                    <path
                        d="M3 3V19.44L8.33 14.11L11.89 21L14.44 19.44L10.89 12.56L18 12.56L3 3Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>
        </>
    );
};

export default CustomCursor;
