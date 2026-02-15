import React from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export const EventsSection = () => {
  const events = [
    {
      date: "Oct 15",
      time: "6:00 PM - 8:00 PM",
      title: "Community Town Hall",
      location: "Central Park Library",
      desc: "Join Matthias for an open discussion about the future of our school district."
    },
    {
      date: "Oct 22",
      time: "10:00 AM - 12:00 PM",
      title: "Voter Registration Drive",
      location: "Main Street Plaza",
      desc: "Help us reach new voters and ensure every voice is heard this November."
    },
    {
      date: "Nov 02",
      time: "7:00 PM - 10:00 PM",
      title: "Campaign Fundraiser Gala",
      location: "The Grand Ballroom",
      desc: "An evening of music, networking, and vision-sharing for our campaign."
    }
  ];

  return (
    <section id="events" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-7xl font-black text-white mb-6 tracking-tighter uppercase">CAMPAIGN <span className="text-emerald-400">TRAIL</span></h2>
            <p className="text-gray-400 text-xl font-medium">
              Join us at our next stop. We are visiting every corner of the community to listen to your concerns.
            </p>
          </div>
          <button className="text-white font-black tracking-widest text-xs uppercase border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/5 transition-all cursor-pointer backdrop-blur-sm">
            FULL CALENDAR
          </button>
        </div>

        <div className="grid gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row gap-10 items-start md:items-center bg-gray-900/40 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 hover:border-emerald-400/30 transition-all duration-500 hover:bg-emerald-950/20"
            >
              <div className="flex-shrink-0 w-32 h-32 bg-black border border-white/10 rounded-3xl flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-emerald-400 group-hover:border-emerald-300 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400 group-hover:text-white mb-1 transition-colors">{event.date.split(' ')[0]}</p>
                <p className="text-5xl font-black text-white">{event.date.split(' ')[1]}</p>
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-6 mb-4">
                  <span className="text-xs font-black tracking-widest text-gray-500 flex items-center gap-2 group-hover:text-emerald-300 transition-colors uppercase">
                    <Calendar size={14} /> {event.time}
                  </span>
                  <span className="text-xs font-black tracking-widest text-gray-500 flex items-center gap-2 uppercase">
                    📍 {event.location}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">{event.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-medium group-hover:text-gray-300 transition-colors">{event.desc}</p>
              </div>
              <button className="flex-shrink-0 bg-white text-black px-10 py-5 rounded-2xl font-black tracking-widest text-sm uppercase hover:bg-emerald-400 hover:text-white transition-all duration-300 cursor-pointer shadow-xl">
                RSVP NOW
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
