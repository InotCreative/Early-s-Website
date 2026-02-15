import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-lg bg-emerald-950/40 text-emerald-300 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-emerald-400/20"
            >
              Building The Future Together
            </motion.span>
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] mb-10 tracking-tighter">
              MATTHIAS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">JOANA EARLY</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl font-medium">
              A transformative leader for a modern community. Dedicated to progress, equality, and sustainable innovation for every resident.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer overflow-hidden">
                <span className="relative z-10">JOIN THE MOVEMENT</span>
                <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button className="bg-transparent text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/5 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                OUR VISION
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-20 lg:mt-0 relative"
          >
            <div className="aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20 border border-white/10 group">
              <ImageWithFallback
                src="/hero.jpeg"
                alt="Matthias Joana Early"
                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Animated border frames */}
            <div className="absolute -bottom-8 -right-8 w-full h-full border border-emerald-400/30 rounded-[2rem] -z-10 transition-transform duration-500 hover:translate-x-2 hover:translate-y-2" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-400/20 rounded-full blur-3xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
