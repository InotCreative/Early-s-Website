import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (s: string) => void;
}

export const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'issues', label: 'Issues' },
    { id: 'events', label: 'Events' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Logo size="md" />
          </div>
          
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-xs font-bold transition-all uppercase tracking-[0.2em] cursor-pointer relative group ${
                  activeSection === item.id ? 'text-emerald-300' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 transition-transform duration-300 ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button className="bg-emerald-500 text-white px-8 py-2.5 rounded-full font-bold hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all uppercase text-xs tracking-widest cursor-pointer border border-emerald-300/20">
              Donate Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-10 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left text-xl font-bold text-white py-2 uppercase tracking-widest cursor-pointer"
                >
                  <span className={activeSection === item.id ? 'text-emerald-400' : ''}>{item.label}</span>
                </button>
              ))}
              <button className="w-full bg-emerald-500 text-white px-6 py-4 rounded-2xl font-bold uppercase text-sm tracking-widest mt-4 shadow-lg shadow-emerald-900/20">
                Donate Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
