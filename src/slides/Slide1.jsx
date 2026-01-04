import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const Slide1 = () => {
    return (
        <Slide className="bg-ocean-dark">
            <div className="text-center relative">
                {/* Floating Liquid Asset (Background) */}
                <motion.div
                    className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-vibrant rounded-full blur-[100px] opacity-20"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [0, 50, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Main Title with Liquid Gradient */}
                    <motion.h1
                        className="text-8xl md:text-[10rem] font-black tracking-tighter mb-8 leading-none"
                        style={{
                            background: 'linear-gradient(to right, #22d3ee, #3b82f6, #06b6d4)',
                            backgroundSize: '200% auto',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                        animate={{ backgroundPosition: ['0% center', '200% center'] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                        CIBLON
                    </motion.h1>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                            Web-Based Swimming Competition Registration System
                        </h2>
                        <div className="h-1 w-32 bg-cyan-glow mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
                    </motion.div>

                    <motion.p
                        className="text-xl md:text-3xl font-light text-cyan-glow mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        Sistem pendaftaran kompetisi renang berbasis web
                    </motion.p>

                    <motion.p
                        className="text-lg md:text-xl font-medium text-ocean-light tracking-widest uppercase"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        Terintegrasi & Berbasis Peran
                    </motion.p>
                </motion.div>

                {/* Liquid Indicator */}
                <motion.div
                    className="mt-20 flex justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-10 bg-gradient-to-t from-cyan-glow to-transparent rounded-full"
                            animate={{
                                height: [40, 60, 40],
                                opacity: [0.3, 0.7, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </Slide>
    );
};

export default Slide1;
