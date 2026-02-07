import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Magnetic = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const [rect, setRect] = useState(null);

    const handleMouseEnter = () => {
        if (ref.current) {
            setRect(ref.current.getBoundingClientRect());
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
        setRect(null); // Optional: clear rect
    };

    const handleMouseMove = (e) => {
        if (!rect) return; // Should have rect from enter, but safety first

        const { clientX, clientY } = e;
        const { height, width, left, top } = rect;
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.35, y: middleY * 0.35 });
    };

    const { x, y } = position;

    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="will-change-transform"
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
