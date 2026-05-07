"use client";
import { motion } from "framer-motion";
import { Wallet, Smartphone, ShieldCheck, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: <Wallet className="text-indigo-400" />,
    title: "Step 1: Payment",
    content: "Pay Fees to Easy Paisa or JazzCash",
    detail: "Account: Taimoor Hassan | 03053825455"
  },
  {
    icon: <Smartphone className="text-indigo-400" />,
    title: "Step 2: Screenshot",
    content: "Share your transaction screenshot",
    detail: "Send to: 03286965956"
  },
  {
    icon: <ShieldCheck className="text-indigo-400" />,
    title: "Step 3: Verification",
    content: "Instant Verification",
    detail: "We will verify and add you to the Class Group"
  }
];

// WhatsApp links with pre-filled messages
const supportTeam = [
  { 
    name: "Miss Mahnoor Hassan", 
    phone: "0328 6965956", 
    waLink: "https://wa.me/923286965956?text=Hi%20Miss%20Mahnoor,%20I%20want%20to%20join%20the%20AI%20Workshop." 
  },
  { 
    name: "Miss Nida Qayyum", 
    phone: "0326 8942616", 
    waLink: "https://wa.me/923268942616?text=Hi%20Miss%20Nida,%20I%20need%20help%20with%20the%20AI%20Workshop%20admission." 
  },
  { 
    name: "Miss Sawera Sagir", 
    phone: "0317 4804970", 
    waLink: "https://wa.me/923174804970?text=Hi%20Miss%20Sawera,%20can%20you%20guide%20me%20about%20the%20AI%20Workshop?" 
  }
];

export default function Admission() {
  return (
    <section className="py-24 relative bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Follow Process for Admission</h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 text-center group hover:border-indigo-500/30 transition-all"
            >
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-indigo-400 font-bold mb-2">{step.title}</h3>
              <p className="text-white font-semibold mb-2">{step.content}</p>
              <p className="text-zinc-500 text-sm">{step.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Support Team Section */}
        <div className="max-w-4xl mx-auto p-10 rounded-[2.5rem] bg-gradient-to-b from-zinc-900 to-black border border-zinc-800">
          <div className="text-center mb-10">
            <p className="text-zinc-400 uppercase tracking-widest text-xs font-bold mb-2">Need Help?</p>
            <h3 className="text-2xl font-bold text-white">Contact Our Support Team</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {supportTeam.map((member, i) => (
              <div key={i} className="text-center p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User size={18} className="text-zinc-400" />
                </div>
                <p className="text-white text-sm font-medium mb-1">{member.name}</p>
                <p className="text-indigo-400 text-xs font-mono mb-4">{member.phone}</p>
                
                {/* Working WhatsApp Button */}
                <a href={member.waLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full rounded-xl border-zinc-700 hover:bg-green-500/10 hover:text-green-500 hover:border-green-500/50 gap-2">
                    <MessageCircle size={14} /> WhatsApp Now
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}