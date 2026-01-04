import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const Slide5 = () => {
    const userTypes = [
        {
            title: 'Pengguna Umum',
            desc: 'Melihat informasi & berita',
            icon: '🌊',
            color: 'bg-cyan-500'
        },
        {
            title: 'Atlet Terdaftar',
            desc: 'Kelola profil & pendaftaran',
            icon: '🏊',
            color: 'bg-blue-600'
        },
        {
            title: 'Administrator',
            desc: 'Kelola kompetisi & data',
            icon: '⚡',
            color: 'bg-indigo-700'
        }
    ];

    return (
        <Slide className="bg-ocean-dark">
            <div className="text-center mb-16">
                <motion.h2
                    className="text-6xl md:text-7xl font-black text-white"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                >
                    Jenis <span className="text-cyan-glow">Pengguna</span>
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {userTypes.map((user, index) => (
                    <motion.div
                        key={index}
                        className="group relative"
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                    >
                        {/* Liquid Background Shape */}
                        <motion.div
                            className={`absolute inset-0 ${user.color} opacity-0 group-hover:opacity-10 rounded-[3rem] blur-3xl transition-opacity duration-500`}
                        />

                        <div className="relative glass-card p-10 rounded-[3.5rem] h-full flex flex-col items-center text-center border-white/5 group-hover:border-cyan-glow/40 transition-all duration-500 transform group-hover:-translate-y-4">
                            <motion.div
                                className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-glow/20 to-blue-600/20 flex items-center justify-center text-5xl mb-8 group-hover:scale-110 transition-transform duration-500"
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                            >
                                {user.icon}
                            </motion.div>

                            <h3 className="text-3xl font-bold text-white mb-4">
                                {user.title}
                            </h3>

                            <p className="text-xl text-cyan-light/70 leading-relaxed">
                                {user.desc}
                            </p>

                            {/* Liquid Hover Indicator */}
                            <motion.div
                                className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <div className="w-12 h-1 bg-cyan-glow rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Slide>
    );
};

export default Slide5;
