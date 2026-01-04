import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const Slide12 = () => {
    return (
        <Slide className="bg-ocean-deep">
            <div className="flex flex-col items-center">
                <motion.h2
                    className="text-6xl md:text-8xl font-black text-white text-center mb-16"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                >
                    Kesimpulan & <br /> <span className="text-cyan-glow">Pengembangan</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
                    <motion.div
                        className="glass-card p-12 rounded-[4rem] border-cyan-glow/20"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                    >
                        <h3 className="text-3xl font-black text-white mb-8 border-b border-white/10 pb-4">Sistem Meningkatkan:</h3>
                        <ul className="space-y-6">
                            {['Akurasi pendaftaran', 'Konsistensi data', 'Efisiensi administrasi'].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-2xl font-bold text-white">
                                    <div className="w-8 h-8 rounded-full bg-cyan-glow flex items-center justify-center text-xs">✓</div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="glass-card p-12 rounded-[4rem] border-blue-600/20"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                    >
                        <h3 className="text-3xl font-black text-white mb-8 border-b border-white/10 pb-4">Pengembangan:</h3>
                        <ul className="space-y-6">
                            {['Pembayaran online', 'Manajemen hasil kompetisi'].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-2xl font-bold text-cyan-light">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs">🔮</div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-24 text-center"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                >
                    <motion.p
                        className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-blue-600 mb-8"
                        animate={{ backgroundPosition: ['0% center', '200% center'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{ backgroundSize: '200% auto' }}
                    >
                        Terima Kasih
                    </motion.p>
                    <p className="text-2xl font-light text-cyan-light tracking-[0.5em] uppercase">
                        CIBLON DEVELOPMENT TEAM
                    </p>
                </motion.div>
            </div>
        </Slide>
    );
};

export default Slide12;
