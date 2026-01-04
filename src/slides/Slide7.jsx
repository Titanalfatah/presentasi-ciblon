import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const Slide7 = () => {
    const stages = [
        { title: 'Analisis Kebutuhan', desc: 'Identifikasi user & persyaratan' },
        { title: 'Desain Sistem', desc: 'Arsitektur & rancangan database' },
        { title: 'Implementasi', desc: 'Coding & integrasi komponen' },
        { title: 'Pengujian Fungsional', desc: 'Uji coba fitur & stabilitas' },
    ];

    return (
        <Slide className="bg-ocean-dark">
            <div className="text-center mb-16">
                <motion.h2
                    className="text-6xl md:text-7xl font-black text-white"
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                >
                    Metode <span className="text-cyan-glow">Penelitian</span>
                </motion.h2>
            </div>

            <div className="relative max-w-4xl mx-auto px-4">
                {/* Animated Liquid Connector */}
                <motion.div
                    className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-cyan-glow via-blue-600 to-indigo-800 rounded-full hidden md:block"
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                <div className="space-y-12">
                    {stages.map((stage, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                        >
                            <div className="flex-1 text-center md:text-left">
                                <div className={`glass-card p-8 rounded-[2.5rem] relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                    }`}>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        {stage.title}
                                    </h3>
                                    <p className="text-lg text-cyan-light/60">
                                        {stage.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Liquid Node */}
                            <div className="relative z-10">
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-cyan-glow flex items-center justify-center text-ocean-dark font-black shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                >
                                    {index + 1}
                                </motion.div>
                            </div>

                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
};

export default Slide7;
