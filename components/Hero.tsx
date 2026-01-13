import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pointer-events-none">
      {/* Content Container - pointer-events-auto needed because section is none to let clicks pass to canvas if needed, but we want text clickable */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
              Disponible pour une alternance
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Développeur <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Fullstack Web
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Je conçois des expériences web immersives et performantes. 
              Passionné par l'écosystème React et l'architecture 3D.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects"
                className="group relative px-8 py-3 bg-white text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                <span className="flex items-center gap-2">
                  Voir mes projets <ArrowRight size={18} />
                </span>
              </a>

              <a 
                href="#contact"
                className="px-8 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2 hover:border-white/40"
              >
                <Download size={18} />
                Télécharger CV
              </a>
            </div>
          </motion.div>

          {/* Right side is visual spacer for the 3D elements in the background */}
          <div className="hidden lg:block h-[500px]"></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;