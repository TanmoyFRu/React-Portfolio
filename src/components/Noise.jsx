const Noise = () => {
    return (
        <div
            className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay overflow-hidden"
        >
            <div
                className="absolute inset-[-200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain"
            />
        </div>
    );
};

export default Noise;
