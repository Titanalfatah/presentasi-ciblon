import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const Slide10 = () => {
    return (
        <Slide className="bg-ocean-deep">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <motion.h2
                        className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        Validasi & <span className="text-cyan-glow">Konsistensi</span>
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                            { t: 'Validasi usia otomatis', d: 'Berdasarkan tanggal lahir atlet', i: '📅' },
                            { t: 'Wajib Data Wali', d: 'Untuk atlet di bawah 17 tahun', i: '👨‍👩‍👦' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex gap-4 items-start"
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <div className="text-3xl shrink-0">{item.i}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{item.t}</h3>
                                    <p className="text-base text-cyan-light/70">{item.d}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <motion.div
                        className="glass-card p-8 md:p-10 rounded-[3rem] border-white/10 relative z-10"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-2xl font-black text-white mb-6 text-center">Model Data Terpadu</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-cyan-glow/10 p-4 md:p-6 rounded-2xl border border-cyan-glow/20">
                                <div className="w-3 h-3 rounded-full bg-cyan-glow" />
                                <p className="text-lg font-bold text-white">Mengurangi Duplikasi</p>
                            </div>
                            <div className="flex items-center gap-4 bg-blue-600/10 p-4 md:p-6 rounded-2xl border border-blue-600/20">
                                <div className="w-3 h-3 rounded-full bg-blue-600" />
                                <p className="text-lg font-bold text-white">Menjaga Konsistensi</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-glow to-blue-600 rounded-[4rem] blur-[60px] opacity-10"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                </div>
            </div>
        </Slide>
    );
};

export default Slide10;
