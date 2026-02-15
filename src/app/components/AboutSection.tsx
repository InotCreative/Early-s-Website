import { Heart, Calendar, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-12 tracking-tighter">OUR COMMITMENT <br /><span className="text-emerald-400">TO CHANGE</span></h2>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-emerald-300 group-hover:bg-emerald-400 group-hover:text-white transition-all duration-300">
                  <Heart size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Sustainable Healthcare</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Healthcare is a right, not a privilege. I am committed to expanding access to affordable, high-quality care for every member of our community, focusing on preventative medicine and mental health services.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-emerald-300 group-hover:bg-emerald-400 group-hover:text-white transition-all duration-300">
                  <Calendar size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Future-Ready Education</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Investing in our schools today means a stronger economy tomorrow. We need to support our teachers, modernize our curriculum, and ensure that every student has the tools they need to succeed in the 21st century.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-10 lg:p-16 text-white sticky top-28 border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />

            <h2 className="text-4xl font-black mb-10 tracking-tighter">THE MISSION</h2>
            <p className="text-gray-300 text-xl mb-12 leading-relaxed italic font-medium">
              "We aren't just running a campaign; we are building a movement. Our goal is to create a government that is as resilient, diverse, and forward-thinking as the people it serves. Together, we can tackle the challenges of today and build a foundation for a better tomorrow."
            </p>
            <div className="border-t border-white/10 pt-10 mt-10">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-400/50 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <ImageWithFallback
                    src="/hero.jpeg"
                    alt="Matthias Early"
                    className="w-full h-full object-cover brightness-110"
                  />
                </div>
                <div>
                  <p className="font-black text-2xl tracking-tight">Matthias Joana Early</p>
                  <p className="text-emerald-400 font-bold tracking-widest text-xs uppercase">Democratic Candidate for Office</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
