import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Enhanced Slide Component with Liquid Animations
 */
const Slide = ({ children, className = '' }) => {
    return (
        <section
            className={`relative h-full w-full flex items-center justify-center overflow-hidden py-28 px-4 md:px-8 ${className}`}
        >
            {/* Liquid Organic Background Elements (Ambient) */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-30"
                    style={{ background: 'radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)' }}
                />
            </div>

            <motion.div
                className="container mx-auto max-w-7xl z-10 w-full"
                initial={{ y: 60, opacity: 0, filter: 'blur(10px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1
                }}
            >
                {children}
            </motion.div>

            {/* Subtle Liquid Wave (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] h-24 opacity-10 pointer-events-none">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(110%+1.3px)] h-full">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.12C43.34,64.21,141.6,183,141.6,183s84-118,179.79-126.56Z" fill="#22d3ee"></path>
                </svg>
            </div>
        </section>
    );
};

export default Slide;
