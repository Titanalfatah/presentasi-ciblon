import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const Slide3 = () => {
    const problems = [
        { title: 'Pendaftaran tidak terpusat', color: 'from-cyan-500 to-blue-600' },
        { title: 'Alur kerja berbasis peran belum optimal', color: 'from-blue-600 to-indigo-700' },
        { title: 'Data kompetisi terfragmentasi', color: 'from-indigo-600 to-purple-700' },
        { title: 'Sulit dikembangkan dan dipelihara', color: 'from-purple-600 to-cyan-500' },
    ];

    return (
        <Slide className="bg-ocean-dark">
            <div className="text-center mb-16">
                <motion.h2
                    className="text-6xl md:text-7xl font-black text-white"
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                >
                    Permasalahan <span className="text-cyan-glow">Utama</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {problems.map((problem, index) => (
                    <motion.div
                        key={index}
                        className="group relative h-48 rounded-[2.5rem] overflow-hidden"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.7 }}
                        whileHover={{ y: -10 }}
                    >
                        {/* Animated Liquid Background for each card */}
                        <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-20 group-hover:opacity-100 transition-opacity duration-700`}
                        />

                        <div className="absolute inset-0 p-8 flex items-center glass-card border-white/5 transition-all duration-700 group-hover:border-white/20">
                            <span className="text-5xl font-black text-white/10 group-hover:text-white/30 mr-8 transition-colors duration-500">
                                0{index + 1}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:translate-x-2 transition-transform duration-500">
                                {problem.title}
                            </h3>
                        </div>

                        {/* Subtle Liquid Glow */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 blur-2xl rounded-full group-hover:bg-white/40 transition-colors" />
                    </motion.div>
                ))}
            </div>
        </Slide>
    );
};

export default Slide3;
