"use client";
import { motion } from "framer-motion";
import { BookOpen, Zap, TrendingUp, Users } from "lucide-react";

const features = [
  {
    title: "AI Lesson Planning",
    desc: "Generate complete, curriculum-aligned lesson plans in under 60 seconds.",
    icon: <BookOpen className="text-indigo-400" />,
  },
  {
    title: "Instant Quizzes",
    desc: "Turn any text or video into interactive quizzes and assessments automatically.",
    icon: <Zap className="text-indigo-400" />,
  },
  {
    title: "Income Growth",
    desc: "Master AI tools that allow you to create digital products and courses to earn more.",
    icon: <TrendingUp className="text-indigo-400" />,
  },
  {
    title: "Student Personalization",
    desc: "Tailor learning paths for every student's unique needs without the extra hours.",
    icon: <Users className="text-indigo-400" />,
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 hover:border-indigo-500/50 transition-colors group"
            >
              <div className="mb-4 p-3 rounded-2xl bg-zinc-800 w-fit group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{f.title}</h4>
              <p className="text-zinc-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}