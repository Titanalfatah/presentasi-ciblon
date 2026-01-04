import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const Slide4 = () => {
    return (
        <Slide className="bg-ocean-deep">
            <div className="flex flex-col items-center justify-center text-center">
                <motion.p
                    className="text-2xl md:text-3xl font-light text-cyan-glow tracking-[0.3em] uppercase mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                >
                    Introducing
                </motion.p>

                <div className="relative mb-12">
                    {/* Pulsing Liquid Rings */}
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-[-40px] border border-cyan-glow/30 rounded-full -z-10"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0, 0.3],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 4 + i,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}

                    <motion.h2
                        className="text-8xl md:text-[12rem] font-black text-white italic tracking-tighter"
                        initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
                        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ type: "spring", damping: 10, stiffness: 60 }}
                    >
                        CIBLON
                    </motion.h2>
                </div>

                <motion.div
                    className="max-w-3xl glass-card py-8 px-12 rounded-[3rem] border-cyan-glow/20"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <p className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight">
                        Platform Terintegrasi & Terpusat
                    </p>
                    <p className="text-xl md:text-2xl font-light text-cyan-light/70">
                        Sistem pendaftaran kompetisi renang modern yang mendukung efisiensi pendaftaran bagi berbagai pihak.
                    </p>
                </motion.div>

                <div className="mt-12 flex gap-8">
                    <motion.div
                        className="w-4 h-4 rounded-full bg-cyan-glow"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                        className="w-4 h-4 rounded-full bg-cyan-glow"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div
                        className="w-4 h-4 rounded-full bg-cyan-glow"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                </div>
            </div>
        </Slide>
    );
};

export default Slide4;
