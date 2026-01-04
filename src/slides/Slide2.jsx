import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const Slide2 = () => {
    const problems = [
        { text: 'Ketidakkonsistenan data', icon: '📊' },
        { text: 'Beban administratif tinggi', icon: '⚖️' },
        { text: 'Akses informasi terbatas', icon: '🌐' },
    ];

    return (
        <Slide className="bg-ocean-deep">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.h2
                        className="text-6xl md:text-7xl font-black mb-8 leading-tight"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Latar <span className="text-cyan-glow">Belakang</span>
                    </motion.h2>

                    <motion.p
                        className="text-2xl md:text-3xl font-medium text-slate-300 mb-6 leading-relaxed"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Kompetisi renang membutuhkan pengelolaan data yang akurat.
                    </motion.p>

                    <motion.p
                        className="text-xl md:text-2xl font-light text-cyan-light/80 leading-relaxed"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Banyak acara masih menggunakan sistem manual atau semi-digital yang menghambat efisiensi.
                    </motion.p>
                </div>

                <div className="space-y-6">
                    <p className="text-2xl font-bold text-white mb-8">Menyebabkan:</p>
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            className="glass-card glass-card-hover p-6 rounded-3xl flex items-center gap-6 group"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                            whileHover={{ x: 20, scale: 1.02 }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-cyan-glow/20 flex items-center justify-center text-3xl group-hover:bg-cyan-glow group-hover:rotate-12 transition-all duration-500">
                                {problem.icon}
                            </div>
                            <p className="text-xl md:text-2xl font-semibold text-white">
                                {problem.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
};

export default Slide2;
