import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const Slide9 = () => {
    const tests = [
        { title: 'Seluruh fitur berjalan sesuai kebutuhan', icon: '✨' },
        { title: 'Tidak ditemukan kesalahan kritis', icon: '🛡️' },
        { title: 'Sistem stabil saat digunakan', icon: '⚡' },
    ];

    return (
        <Slide className="bg-ocean-dark">
            <div className="text-center mb-10">
                <motion.h2
                    className="text-4xl md:text-6xl font-black text-white"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    Hasil Pengujian <span className="text-cyan-glow">Sistem</span>
                </motion.h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
                {tests.map((test, index) => (
                    <motion.div
                        key={index}
                        className="group relative"
                        initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="glass-card p-6 md:p-8 rounded-[2rem] border-white/5 flex items-center gap-8 group-hover:bg-cyan-glow/5 transition-all duration-500">
                            <motion.div
                                className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-cyan-glow to-blue-600 flex items-center justify-center text-3xl shadow-xl shrink-0"
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.8 }}
                            >
                                {test.icon}
                            </motion.div>
                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-glow transition-colors">
                                {test.title}
                            </h3>
                        </div>
                        {/* Liquid decorative blob on edge */}
                        <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-12 bg-cyan-glow rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity ${index % 2 === 0 ? '-left-2' : '-right-2'
                            }`} />
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-12 text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.8, damping: 10 }}
            >
                <span className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-glow to-blue-600 text-xl md:text-2xl font-black text-white shadow-[0_0_50px_rgba(34,211,238,0.4)] block md:inline-block">
                    🎉 PENGUJIAN BERHASIL
                </span>
            </motion.div>
        </Slide>
    );
};

export default Slide9;
