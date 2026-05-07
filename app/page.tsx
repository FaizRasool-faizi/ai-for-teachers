import Admission from "@/components/ui/sections/Admission";
import Bonuses from "@/components/ui/sections/Bonuses";
import Curriculum from "@/components/ui/sections/Curriculum";
import Features from "@/components/ui/sections/Features";
import Hero from "@/components/ui/sections/Hero";
import Pricing from "@/components/ui/sections/Pricing";
import Testimonials from "@/components/ui/sections/Testimonials";
import VideoReviews from "@/components/ui/sections/VideoReviews";
import VideoShowcase from "@/components/ui/sections/VideoShowcase";
import WorkshopOverview from "@/components/ui/sections/WorkshopOverview";
import BackgroundParticles from "@/components/visuals/BackgroundParticles";


export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <BackgroundParticles />
      <div className="relative z-10">
        <Hero />
        <VideoShowcase />
        <WorkshopOverview />
        <Features />
        <Pricing />
        <Curriculum />
        <Bonuses />
        <Testimonials />
        <VideoReviews />
        <Admission />
        
        {/* Footer or CTA could go here next */}
        {/* Final Footer Section */}
        <footer className="py-24 relative overflow-hidden border-t border-zinc-900/50 bg-zinc-950/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center justify-center text-center">
              
              {/* Logo or Brand Name */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white tracking-tighter uppercase">
                  Digital Earning <span className="text-indigo-500">School</span>
                </h3>
              </div>

              {/* Navigation Links (Optional but looks pro) */}
              <div className="flex gap-8 text-sm text-zinc-500 mb-10">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              </div>

              {/* Copyright Line */}
              <p className="text-zinc-600 text-sm">
                © {new Date().getFullYear()} Digital Earning School. All Rights Reserved.
              </p>
              
              <p className="mt-2 text-zinc-700 text-xs uppercase tracking-widest">
                Empowering the next generation of educators in Pakistan
              </p>

            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}