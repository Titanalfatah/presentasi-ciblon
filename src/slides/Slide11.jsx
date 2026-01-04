import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const Slide11 = () => {
    const points = [
        { t: 'Sentralisasi', d: 'Semua dalam satu sistem', i: '🎯' },
        { t: 'Keamanan', d: 'Akses berbasis peran', i: '🔐' },
        { t: 'Reliabilitas', d: 'Keandalan data', i: '📈' },
    ];

    return (
        <Slide className="bg-ocean-dark">
            <div className="text-center mb-10">
                <motion.h2
                    className="text-4xl md:text-7xl font-black text-white"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                >
                    Efisiensi <span className="text-cyan-glow">Administratif</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {points.map((point, index) => (
                    <motion.div
                        key={index}
                        className="group relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                        <div className="glass-card p-8 md:p-10 rounded-[2.5rem] h-full flex flex-col items-center text-center border-white/5 group-hover:border-cyan-glow transition-all duration-500">
                            <motion.div
                                className="text-6xl md:text-7xl mb-6 md:mb-8"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                            >
                                {point.i}
                            </motion.div>

                            <h3 className="text-xl md:text-2xl font-black text-white mb-2">{point.t}</h3>
                            <p className="text-base text-cyan-light/60 leading-tight">{point.d}</p>
                        </div>
                        <div className="absolute inset-0 bg-cyan-glow/5 rounded-[3rem] blur-3xl -z-10 group-hover:bg-cyan-glow/10 transition-all" />
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-12 py-6 px-10 glass-card rounded-full border-cyan-glow/20 inline-block mx-auto"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
            >
                <p className="text-xl md:text-2xl font-black text-white text-center">
                    💼 SISTEM <span className="text-cyan-glow uppercase">Terintegrasi</span>
                </p>
            </motion.div>
        </Slide>
    );
};

export default Slide11;
