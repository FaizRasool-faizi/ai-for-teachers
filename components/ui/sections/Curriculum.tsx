"use client";
import { motion } from "framer-motion";
import { CheckCircle, Target } from "lucide-react";

const curriculumItems = [
  "Understand Artificial Intelligence (AI) in a simple & practical way",
  "Learn how Generative AI works with real-life teaching examples",
  "Explore powerful tools: ChatGPT, Gemini, NotebookLM, Groq & more",
  "Master Prompt Engineering for accurate & powerful results",
  "Learn the 'Role + Task + Context + Output' prompt formula",
  "Simplify difficult topics & summaries for students",
  "Generate lesson plans, quizzes & activities in seconds",
  "Use AI for grammar, translation & language exercises",
  "Automate attendance, reports & feedback tasks",
  "Create presentations & visuals using Canva AI",
  "Create ebooks, courses & start earning through freelancing",
  "Save hours of daily work and become a future-ready teacher"
];

export default function Curriculum() {
  return (
    <section className="py-24 relative bg-zinc-950/50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block p-3 rounded-2xl bg-indigo-500/10 mb-4"
          >
            <Target className="text-indigo-500" size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What You Will Learn</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            A comprehensive roadmap designed to take you from AI beginner to an Expert Educator.
          </p>
        </div>

        {/* Curriculum List with Timeline Effect */}
        <div className="max-w-4xl mx-auto relative">
          {/* The Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {curriculumItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-indigo-500/30 transition-all group`}
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle size={20} className="text-indigo-500 group-hover:scale-125 transition-transform" />
                </div>
                <p className="text-zinc-300 font-medium leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}