import React from 'react';
import { Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(52,211,153,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-24 border-b border-white/5 pb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-10">
              <Logo size="lg" />
            </div>
            <p className="text-gray-400 text-xl mb-12 max-w-md leading-relaxed font-medium">
              A young professional dedicated to bringing fresh energy and proven solutions to our community. Together, we can build a more equitable future.
            </p>
            <div className="flex gap-6">
              {[Facebook, Twitter, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-emerald-400 mb-10">Campaign</h4>
            <ul className="space-y-6 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
              <li><a href="#about" className="hover:text-white transition-colors">Biography</a></li>
              <li><a href="#issues" className="hover:text-white transition-colors">Our Platform</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] text-emerald-400 mb-10">Updates</h4>
            <p className="text-gray-400 mb-8 font-medium">Get exclusive campaign insights delivered to your inbox.</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600 font-black tracking-widest text-[10px]"
              />
              <button className="absolute right-2 top-2 bg-emerald-500 text-white px-6 py-3 rounded-xl font-black tracking-widest text-[10px] uppercase hover:bg-emerald-400 transition-all cursor-pointer shadow-lg">
                JOIN
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-gray-600 text-[10px] font-black tracking-[0.2em] uppercase">
          <p>© 2026 PAID FOR BY MATTHIAS JOANA EARLY FOR OFFICE.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
