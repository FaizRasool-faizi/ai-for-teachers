"use client";
import { motion } from "framer-motion";
import { Gift, Video, FileText, MousePointer2, Award, Sparkles } from "lucide-react";

const bonuses = [
  {
    title: "3 Bonus Masterclasses",
    desc: "Deep dives into advanced AI workflows for specific subjects.",
    icon: <Sparkles className="text-amber-400" size={24} />,
  },
  {
    title: "Recording of Each Session",
    desc: "Lifetime access to all workshop videos to watch at your own pace.",
    icon: <Video className="text-amber-400" size={24} />,
  },
  {
    title: "Interactive Presentation Notes",
    desc: "Detailed PDFs and slides from every single class.",
    icon: <FileText className="text-amber-400" size={24} />,
  },
  {
    title: "Ready-to-use Prompts & Guides",
    desc: "A massive library of copy-paste prompts for teachers.",
    icon: <MousePointer2 className="text-amber-400" size={24} />,
  },
  {
    title: "E-Certificate of Completion",
    desc: "A professional certificate to boost your teaching portfolio.",
    icon: <Award className="text-amber-400" size={24} />,
  },
];

export default function Bonuses() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Gift className="text-amber-500" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Exclusive Bonuses</h2>
          </motion.div>
          <p className="text-zinc-400">Total Value: <span className="text-amber-500 font-bold">Rs 10,000+</span> (Included Free Today)</p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-amber-500/50 transition-all"
            >
              {/* Golden Glow on Hover */}
              <div className="absolute inset-0 bg-amber-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="mb-6 p-3 rounded-2xl bg-amber-500/10 w-fit group-hover:rotate-12 transition-transform">
                  {bonus.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{bonus.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {bonus.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}