import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { IssuesSection } from './components/IssuesSection';
import { EventsSection } from './components/EventsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-black font-sans text-gray-100 selection:bg-emerald-400 selection:text-black selection:font-bold">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-800/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-800/10 rounded-full blur-[120px] pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {activeSection === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <AboutSection />
            </motion.div>
          )}
          
          {activeSection === 'issues' && (
            <motion.div
              key="issues"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <IssuesSection />
            </motion.div>
          )}
          
          {activeSection === 'events' && (
            <motion.div
              key="events"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <EventsSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
