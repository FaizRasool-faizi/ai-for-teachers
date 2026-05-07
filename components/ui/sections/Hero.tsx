"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";

export default function Hero() {
  // WhatsApp Link for "Get Started"
  const whatsappLink = "https://wa.me/923286965956?text=Hi,%20I%20saw%20your%20AI%20for%20Teachers%20website%20and%20I%20want%20to%20get%20started.";
  
  // YouTube Link for "Watch Demo"
  const demoVideoLink = "https://youtu.be/DNRxW0EbnK4";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium inline-flex items-center gap-2 mb-6">
            <Sparkles size={14} /> The Future of Education is Here
          </span>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Empower Your Teaching <br /> with AI Intelligence.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Automate lesson planning, generate interactive quizzes, and personalize 
            student learning in seconds. Built by educators, powered by AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* WhatsApp Integration */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 w-full sm:w-auto py-7 text-lg font-semibold">
                Get Started for Free <ArrowRight className="ml-2" size={18} />
              </Button>
            </a>

            {/* YouTube Demo Integration */}
            <a href={demoVideoLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="rounded-full px-8 border-zinc-800 w-full sm:w-auto py-7 text-lg text-white hover:bg-white/5">
                <Play className="mr-2 fill-white" size={18} /> Watch Demo
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Optional: Simple Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 text-sm flex flex-col items-center gap-2"
      >
        {/* <div className="w-px h-12 bg-gradient-to-b from-indigo-500 to-transparent" /> */}
      </motion.div>
    </section>
  );
}