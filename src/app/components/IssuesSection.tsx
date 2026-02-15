import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const IssuesSection = () => {
  const issues = [
    {
      title: "Economic Empowerment",
      description: "Supporting small businesses and ensuring living wages for all workers through tax incentives and infrastructure development.",
      icon: "💼",
      image: "https://images.unsplash.com/photo-1764118810360-5e89fe868411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGNpdHklMjBza3lsaW5lJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MTEyMzAzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Housing Affordability",
      description: "Creating sustainable housing solutions that allow everyone to live where they work, focusing on rent control and affordable housing projects.",
      icon: "🏠",
      image: "https://images.unsplash.com/photo-1570911109473-cec84fd73115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29tbXVuaXR5JTIwbWVldGluZyUyMGhlYWx0aGNhcmUlMjBlZHVjYXRpb24lMjBjbGltYXRlJTIwYWN0aW9ufGVufDF8fHx8MTc3MTEyMzAzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Public Safety",
      description: "Implementing community-focused safety programs, restorative justice, and mental health crisis response teams.",
      icon: "🛡️",
      image: "https://images.unsplash.com/photo-1585942740847-55be8f2f7352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vY3JhdGljJTIwcG9saXRpY2FsJTIwY2FtcGFpZ24lMjByYWxseSUyMGF1ZGllbmNlfGVufDF8fHx8MTc3MTEyMzAzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="issues" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-7xl font-black text-white mb-6 tracking-tighter uppercase">CORE <span className="text-emerald-400">PLATFORM</span></h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium">
            Progressive solutions for modern challenges. Built on transparency and community-driven policy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {issues.map((issue, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-white/5 group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="h-64 relative overflow-hidden">
                <ImageWithFallback
                  src={issue.image}
                  alt={issue.title}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-6 left-6 w-14 h-14 bg-black/60 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shadow-xl border border-white/10">
                  {issue.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              <div className="p-10 relative">
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase group-hover:text-emerald-300 transition-colors">{issue.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg font-medium">{issue.description}</p>
                <button className="flex items-center text-emerald-400 font-black tracking-widest text-xs uppercase hover:gap-3 transition-all cursor-pointer">
                  EXPLORE POLICY <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
