"use client";
import { motion } from "framer-motion";
import { PlayCircle, MessageSquareQuote } from "lucide-react";

export default function VideoReviews() {
  return (
    <section className="py-24 relative bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4"
          >
            <MessageSquareQuote size={16} /> Real Student Experience
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hear from our Teachers
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            {/* Background Magic Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dzUWhUAHouE"
                  title="Teacher Feedback Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Bottom Info Bar */}
              <div className="p-6 md:p-8 bg-zinc-900/90 backdrop-blur-md flex items-center justify-between border-t border-zinc-800">
                <div>
                  <h3 className="text-white font-bold text-xl md:text-2xl">After Learning AI Tools</h3>
                  <p className="text-zinc-500">Workshop Feedback & Classroom Impact</p>
                </div>
                <div className="hidden md:block">
                   <PlayCircle className="text-indigo-500 group-hover:scale-110 transition-transform" size={48} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}