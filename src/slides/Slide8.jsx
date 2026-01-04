import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const Slide8 = () => {
    return (
        <Slide className="bg-ocean-deep">
            <div className="text-center mb-20">
                <motion.h2
                    className="text-6xl md:text-7xl font-black text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    Arsitektur <span className="text-cyan-glow">Sistem</span>
                </motion.h2>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-32">
                {/* Frontend Component */}
                <motion.div
                    className="relative group w-full md:w-80"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="glass-card p-12 rounded-[3.5rem] border-cyan-glow/20 flex flex-col items-center group-hover:border-cyan-glow transition-all duration-500">
                        <motion.div
                            className="text-7xl mb-6"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            🖥️
                        </motion.div>
                        <h3 className="text-3xl font-bold text-white mb-2">Frontend</h3>
                        <p className="text-xl text-cyan-glow font-medium">React.js</p>
                    </div>
                    {/* Liquid Glow under box */}
                    <div className="absolute -inset-4 bg-cyan-glow/5 rounded-[4rem] blur-2xl -z-10 group-hover:bg-cyan-glow/10 transition-colors" />
                </motion.div>

                {/* Liquid Connection Stream */}
                <div className="relative h-24 md:h-2 w-2 md:w-64">
                    {/* Flow Particle */}
                    <motion.div
                        className="absolute top-1/2 left-0 w-8 h-8 md:w-4 md:h-4 bg-cyan-glow rounded-full blur-sm"
                        animate={{
                            x: ['0%', '100%'],
                            opacity: [0, 1, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent" />
                </div>

                {/* Backend Component */}
                <motion.div
                    className="relative group w-full md:w-80"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="glass-card p-12 rounded-[3.5rem] border-blue-600/20 flex flex-col items-center group-hover:border-blue-500 transition-all duration-500">
                        <motion.div
                            className="text-7xl mb-6"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        >
                            ⚙️
                        </motion.div>
                        <h3 className="text-3xl font-bold text-white mb-2">Backend</h3>
                        <p className="text-xl text-blue-500 font-medium">API Server</p>
                    </div>
                    <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-2xl -z-10 group-hover:bg-blue-600/10 transition-colors" />
                </motion.div>
            </div>

            <motion.div
                className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                {['Lebih Aman', 'Mudah dikembangkan', 'Skalabilitas Tinggi'].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 text-2xl font-semibold text-cyan-light/80">
                        <div className="w-4 h-4 rounded-full bg-cyan-glow shadow-[0_0_10px_#22d3ee]" />
                        {benefit}
                    </div>
                ))}
            </motion.div>
        </Slide>
    );
};

export default Slide8;
