import { useState, useEffect } from "react";

const Noise = () => {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        // Disable noise on mobile for performance
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Skip noise on mobile for performance
    if (isMobile) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
            style={{ willChange: 'auto' }}
        >
            {/* CSS-based noise for better performance */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
};

export default Noise;
