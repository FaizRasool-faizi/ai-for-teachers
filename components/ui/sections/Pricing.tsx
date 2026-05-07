"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flame, Ticket, CheckCircle2 } from "lucide-react";

export default function Pricing() {
  // Main WhatsApp link for reservation
  const whatsappReservationLink = "https://wa.me/923286965956?text=Hi,%20I%20want%20to%20reserve%20my%20seat%20for%20the%20AI%20Workshop%20at%20the%20special%20price%20of%20Rs%20999.";

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto relative"
        >
          {/* Animated Background Glow for the Price */}
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-3xl blur-3xl opacity-50" />

          <div className="relative bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 md:p-12 backdrop-blur-xl text-center">
            
            {/* Urgency Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-sm font-bold uppercase tracking-widest">
                <Flame size={16} className="animate-pulse" /> Limited Time Offer
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Invest in Your Future
            </h2>

            {/* Pricing Logic */}
            <div className="mb-8">
              <p className="text-zinc-500 line-through text-xl mb-1">Regular Fees: Rs 2,500</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-zinc-400 text-2xl">Today Special:</span>
                <span className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter">
                  Rs 999<span className="text-2xl text-zinc-500">/-</span>
                </span>
              </div>
              <p className="mt-4 text-orange-400 font-medium flex items-center justify-center gap-2">
                <Ticket size={18} /> First 20 Seats Only
              </p>
            </div>

            {/* Value Points */}
            <ul className="text-left space-y-3 mb-10 max-w-xs mx-auto">
              <li className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 size={18} className="text-green-500" /> Full Workshop Access
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 size={18} className="text-green-500" /> Professional Certificate
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <CheckCircle2 size={18} className="text-green-500" /> Recorded Sessions
              </li>
            </ul>

            {/* The "Power" Button with WhatsApp Link */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={whatsappReservationLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full py-7 text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white rounded-2xl shadow-[0_0_20px_rgba(234,88,12,0.3)] border-0">
                  Reserve My Seat Now
                </Button>
              </a>
            </motion.div>

            <p className="mt-6 text-zinc-500 text-sm italic">
              Join teachers already using AI to transform their classrooms.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}