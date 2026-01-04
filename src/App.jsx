import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import './index.css';

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10, Slide11, Slide12
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    document.title = 'CIBLON | Horizontal Liquid Presentation';

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const paginate = (newDirection) => {
    if (currentIndex + newDirection >= 0 && currentIndex + newDirection < slides.length) {
      setDirection(newDirection);
      setCurrentIndex(currentIndex + newDirection);
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
      skewX: direction > 0 ? 20 : -20,
      filter: 'blur(20px)',
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      skewX: 0,
      filter: 'blur(0px)',
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.2,
      skewX: direction < 0 ? 20 : -20,
      filter: 'blur(20px)',
    })
  };

  const CurrentSlide = slides[currentIndex];

  return (
    <div className="relative h-screen w-full bg-[#020617] overflow-hidden selection:bg-cyan-glow selection:text-ocean-dark">
      {/* Liquid Sweep Overlay */}
      <AnimatePresence>
        {direction !== 0 && (
          <motion.div
            key={`sweep-${currentIndex}`}
            initial={{ x: direction > 0 ? '100%' : '-100%', skewX: -45 }}
            animate={{ x: direction > 0 ? '-100%' : '100%', skewX: 45 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] pointer-events-none bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      {/* Liquid Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-glow/10 rounded-full blur-[150px]"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"
          animate={{
            x: [0, -60, 60, 0],
            y: [0, 60, -60, 0],
            scale: [1, 1.1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Navigation Top Label */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          className="glass-card px-6 py-2 rounded-full border-cyan-glow/10 flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow animate-pulse" />
          <p className="text-[10px] font-black tracking-[0.4em] text-cyan-glow/80 uppercase">
            {currentIndex + 1} / {slides.length}
          </p>
        </motion.div>
      </div>

      {/* Main Slide Container */}
      <div className="relative h-full w-full flex items-center justify-center pt-10 pb-20">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 120, damping: 20, mass: 1 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              filter: { duration: 0.8 }
            }}
            className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next/Prev Buttons (Compact Liquid Style) */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center items-center gap-8">
        <motion.button
          whileHover={{ scale: 1.1, x: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          disabled={currentIndex === 0}
          className={`group flex items-center justify-center w-14 h-14 rounded-full glass-card border-cyan-glow/10 transition-all ${currentIndex === 0 ? 'opacity-10 cursor-not-allowed' : 'hover:border-cyan-glow/40 hover:bg-white/5'}`}
        >
          <span className="text-xl text-cyan-glow/70 transition-transform group-hover:-translate-x-1 group-hover:text-cyan-glow">←</span>
        </motion.button>

        {/* Progress Bar (Compact) */}
        <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-glow to-blue-600 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.1, x: 3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          disabled={currentIndex === slides.length - 1}
          className={`group flex items-center justify-center w-14 h-14 rounded-full glass-card border-cyan-glow/10 transition-all ${currentIndex === slides.length - 1 ? 'opacity-10 cursor-not-allowed' : 'hover:border-cyan-glow/40 hover:bg-white/5'}`}
        >
          <span className="text-xl text-cyan-glow/70 transition-transform group-hover:translate-x-1 group-hover:text-cyan-glow">→</span>
        </motion.button>
      </div>

      {/* Modern Overlay Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-1/4 right-10 w-2 h-24 bg-cyan-glow/20 rounded-full"
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-2 h-24 bg-blue-600/20 rounded-full"
          animate={{ y: [0, -100, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>
    </div>
  );
}

export default App;
