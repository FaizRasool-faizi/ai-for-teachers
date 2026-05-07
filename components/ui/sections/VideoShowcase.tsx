"use client";
import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Outer Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-xl">
            <div className="aspect-video w-full">
              {/* Replace the ID with the client's YouTube ID */}
              <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/DNRxW0EbnK4"
  title="AI for Teachers Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
            </div>
          </div>

          {/* Floating Caption mimicking client message */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              Learn AI, Upgrade Your Teaching & <span className="text-indigo-400">Grow Your Income</span>
            </h3>
            <p className="text-zinc-500">Watch the workshop outline to see how your classroom changes forever.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}