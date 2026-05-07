"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, GraduationCap } from "lucide-react";

const details = [
  {
    icon: <Calendar className="text-indigo-400" size={20} />,
    label: "Live Zoom Classes",
    value: "11, 13 & 15 May 2026",
  },
  {
    icon: <Clock className="text-indigo-400" size={20} />,
    label: "Class Timing",
    value: "8:30 PM – 10:00 PM",
  },
  {
    icon: <Video className="text-indigo-400" size={20} />,
    label: "Platform",
    value: "Online on Zoom",
  },
  {
    icon: <GraduationCap className="text-indigo-400" size={20} />,
    label: "Certification",
    value: "Includes Recordings + Prompts",
  },
];

export default function WorkshopOverview() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6">
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-10 justify-center md:justify-start"
        >
          <div className="h-px w-12 bg-indigo-500/50 hidden md:block" />
          <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-400">
            Workshop Overview
          </h2>
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {details.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="mb-4 text-indigo-400 bg-indigo-500/10 w-fit p-2.5 rounded-lg">
                  {item.icon}
                </div>
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-white font-semibold italic md:not-italic">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}