import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const Slide6 = () => {
    const features = [
        { title: 'Eksplorasi kompetisi online', detail: 'Real-time database access' },
        { title: 'Pendaftaran atlet bertahap', detail: 'Step-by-step easy flow' },
        { title: 'Validasi usia otomatis', detail: 'Birth date intelligent check' },
        { title: 'Manajemen data terpusat', detail: 'All records in one vault' },
    ];

    return (
        <Slide className="bg-ocean-deep">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/3">
                    <motion.h2
                        className="text-6xl md:text-8xl font-black text-white leading-none mb-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        Fitur <br /> <span className="text-cyan-glow">Utama</span>
                    </motion.h2>
                    <div className="w-20 h-2 bg-gradient-to-r from-cyan-glow to-blue-600 rounded-full" />
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-8 rounded-[2.5rem] relative overflow-hidden group border-white/5"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.7 }}
                        >
                            {/* Liquid Wave Overlay on Hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-cyan-glow/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"
                            />

                            <div className="relative z-10 flex flex-col items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-cyan-glow/20 flex items-center justify-center text-cyan-glow font-black text-xl">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-cyan-light/50">
                                        {feature.detail}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Slide>
    );
};

export default Slide6;
