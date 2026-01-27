"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Box, CheckCircle2, Layers, Smartphone, Upload, Zap, Eye, MousePointerClick, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import HeroViewer from "./components/HeroViewer";
import ProductViewer from "./components/ProductViewer";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <SmoothScroll>
      <main ref={containerRef} className="relative min-h-screen w-full bg-[#050505] text-white selection:bg-purple-500/30 overflow-x-hidden">
        
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/5 border-b border-white/5 mix-blend-difference">
          <div className="flex items-center gap-2">
            <Box className="w-6 h-6 text-white" />
            <span className="text-xl font-bold tracking-tighter">dephra</span>
          </div>
          <Link 
            href="https://calendly.com" 
            target="_blank"
            className="hidden md:flex group items-center gap-2 px-6 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors"
          >
            Start Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* 3D Background */}
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 opacity-80">
            <HeroViewer />
          </motion.div>

          {/* Text Content */}
          <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto pointer-events-none">
            <motion.div 
              style={{ y: textY, opacity }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium tracking-wide text-zinc-400">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>Next-Gen Commerce</span>
              </div>
              
              <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter mb-6 mix-blend-exclusion">
                REALITY<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">RE-RENDERED</span>
              </h1>
              
              <p className="max-w-xl text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-10 mix-blend-exclusion">
                Transform static catalogs into immersive spatial experiences. <br className="hidden md:block"/>
                No code required. Just pure visual impact.
              </p>

              <div className="pointer-events-auto flex gap-4">
                <Link 
                  href="#demo"
                  className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform active:scale-95"
                >
                  Try the Demo
                </Link>
                <Link 
                  href="https://calendly.com"
                  target="_blank"
                  className="px-8 py-4 border border-white/20 bg-black/20 backdrop-blur rounded-full font-medium hover:bg-white/10 transition-colors"
                >
                  Book a Call
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            style={{ opacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs tracking-widest uppercase"
          >
            <span>Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent" />
          </motion.div>
        </section>

        {/* Marquee Section */}
        <section className="py-12 border-y border-white/5 bg-black/50 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee gap-20 items-center justify-center min-w-full">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-20 text-4xl md:text-6xl font-bold tracking-tighter text-white/5 select-none">
                <span>SHOPIFY</span>
                <span>WOOCOMMERCE</span>
                <span>MAGENTO</span>
                <span>BIGCOMMERCE</span>
                <span>SHOPIFY</span>
                <span>WOOCOMMERCE</span>
                <span>MAGENTO</span>
                <span>BIGCOMMERCE</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid - Sticky Scroll */}
        <section className="py-32 px-6 relative z-10 bg-[#050505]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40 items-start">
            <div className="sticky top-32">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                Spatial <br />
                <span className="text-purple-500">Commerce.</span>
              </h2>
              <p className="text-xl text-zinc-400 max-w-sm mb-12">
                Your products deserve more than a 2D grid. Give them volume, texture, and presence.
              </p>
              
              <ul className="space-y-8">
                <FeatureItem 
                  title="Photorealistic Detail" 
                  desc="Our AI preserves every stitch, grain, and reflection from your original photography."
                />
                <FeatureItem 
                  title="Instant AR" 
                  desc="One tap to view in room. No app download required. Works on iOS and Android native."
                />
                <FeatureItem 
                  title="Universal Embed" 
                  desc="Copy-paste integration for any platform. Lightweight and SEO friendly."
                />
              </ul>
            </div>
            
            <div className="space-y-10 pt-20 md:pt-0">
               <VisualCard icon={<Upload />} title="Upload" color="bg-blue-500/10 border-blue-500/20 text-blue-400" />
               <VisualCard icon={<Layers />} title="Process" color="bg-purple-500/10 border-purple-500/20 text-purple-400" />
               <VisualCard icon={<Smartphone />} title="Deploy" color="bg-green-500/10 border-green-500/20 text-green-400" />
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-32 px-6 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                  Take it for a <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Spin.</span>
                </h2>
                <p className="text-zinc-500 text-right max-w-xs">
                  Interact with the model below. Use your mouse or finger to rotate and zoom.
                </p>
             </div>

             {/* The Optimized ProductViewer */}
             <div className="w-full h-[600px] md:h-[800px] bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden relative group hover:border-white/20 transition-colors">
                <ProductViewer />
             </div>
          </div>
        </section>

        {/* Metrics / Stats */}
        <section className="py-40 px-6 border-y border-white/5 bg-zinc-900/20">
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <Stat number="40%" label="Conversion Lift" />
              <Stat number="3x" label="Engagement Time" />
              <Stat number="-25%" label="Return Rate" />
           </div>
        </section>

        {/* Footer */}
        <footer className="py-32 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-purple-900/20 pointer-events-none" />
           <div className="max-w-5xl mx-auto text-center relative z-10">
              <h2 className="text-[10vw] font-bold tracking-tighter leading-none mb-10 text-white mix-blend-overlay">
                DEPHRA
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
                <Link href="#" className="text-2xl font-medium hover:text-purple-400 transition-colors">Start Trial</Link>
                <Link href="#" className="text-2xl font-medium hover:text-purple-400 transition-colors">Book Demo</Link>
                <Link href="#" className="text-2xl font-medium hover:text-purple-400 transition-colors">Contact</Link>
              </div>
              <div className="flex justify-between items-center text-sm text-zinc-600 border-t border-white/5 pt-8">
                 <p>© 2024 Dephra Inc.</p>
                 <div className="flex gap-4">
                    <span>Privacy</span>
                    <span>Terms</span>
                 </div>
              </div>
           </div>
        </footer>

      </main>
    </SmoothScroll>
  );
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="border-l border-white/10 pl-6 hover:border-purple-500 transition-colors group cursor-default">
      <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors text-zinc-300">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function VisualCard({ icon, title, color }: { icon: React.ReactNode, title: string, color: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`aspect-video rounded-3xl border flex flex-col items-center justify-center gap-6 ${color} backdrop-blur-sm`}
    >
      <div className="scale-150">{icon}</div>
      <span className="text-2xl font-bold tracking-tight">{title}</span>
    </motion.div>
  )
}

function Stat({ number, label }: { number: string, label: string }) {
  return (
    <div>
      <div className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
        {number}
      </div>
      <div className="text-xl text-zinc-500 font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  )
}
