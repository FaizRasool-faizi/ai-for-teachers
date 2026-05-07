"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Maida Nasir",
    role: "Educator",
    text: "Taimoor Hassan's class was clear, engaging, and well-organized. He explained the topic in a simple way and encouraged interaction. The pace was good and the examples were helpful.",
  },
  {
    name: "Hooriya Sameer",
    role: "Teacher",
    text: "Main ne Sir Taimoor ki AI Masterclass join ki – aur yaqeen karo, ye meri life ki sabse zabardast class thi! Unhon ne mushkil topics ko bhi itna easy bana diya ke main har cheez ko asaani se samajh gayi.",
  },
  {
    name: "Wasalaam (WhatsApp Review)",
    role: "Private Tutor",
    text: "Outstanding session, each word was impressive. Main khud teacher so main bar bar observe kr rha tha. Sir evening main home tuition teach kerta Hun... Jazakallah!",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950/30">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Teachers Love This Workshop
          </motion.h2>
          <div className="flex justify-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl group hover:border-indigo-500/50 transition-all"
            >
              <Quote className="absolute top-6 right-8 text-zinc-800 group-hover:text-indigo-500/20 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-4 text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="text-zinc-300 leading-relaxed mb-6 italic">
                "{rev.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{rev.name}</h4>
                  <p className="text-zinc-500 text-xs">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}