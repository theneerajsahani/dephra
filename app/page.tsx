"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Box, CheckCircle2, Layers, Smartphone, Upload, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import HeroViewer from "./components/HeroViewer";
import ProductViewer from "./components/ProductViewer";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Preloader State
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <main ref={containerRef} className="relative min-h-screen w-full bg-white text-zinc-900 selection:bg-black selection:text-white overflow-x-hidden">
        
        {/* Grain & Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[100] bg-noise mix-blend-multiply opacity-50" />
        <div className="fixed inset-0 pointer-events-none z-[0] bg-grid opacity-100" />

        {/* Preloader Curtain */}
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: loading ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="fixed inset-0 z-[999] bg-black flex items-center justify-center text-white text-9xl font-bold tracking-tighter"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-4"
            >
                <span className="w-4 h-4 bg-white rounded-full animate-pulse" />
                DEPHRA
            </motion.div>
        </motion.div>

        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-white/80 border-b border-zinc-100">
          <div className="flex items-center gap-2">
            <Box className="w-6 h-6 text-black" />
            <span className="text-xl font-bold tracking-tighter text-black">dephra</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <Link href="#features" className="hover:text-black transition-colors">Features</Link>
            <Link href="#demo" className="hover:text-black transition-colors">Demo</Link>
            <Link href="#pricing" className="hover:text-black transition-colors">Pricing</Link>
          </div>
          <Link 
            href="https://calendly.com" 
            target="_blank"
            className="group flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-zinc-800 transition-all hover:scale-105"
          >
            Start Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* 3D Background */}
          <div className="absolute inset-0 z-0">
            <HeroViewer />
          </div>

          {/* Text Content */}
          <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto pointer-events-none">
            <motion.div 
              style={{ y, opacity }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm text-xs font-bold tracking-wide text-zinc-500 uppercase shadow-sm">
                <Sparkles className="w-3 h-3 text-black" />
                <span>Next-Gen Commerce</span>
              </div>
              
              <h1 className="text-[13vw] leading-[0.85] font-bold tracking-tighter mb-8 text-black mix-blend-multiply">
                REALITY<br />
                <span className="text-zinc-300">RE-RENDERED</span>
              </h1>
              
              <p className="max-w-xl text-lg md:text-xl text-zinc-500 font-medium leading-relaxed mb-12 mix-blend-multiply">
                Transform static catalogs into immersive spatial experiences. <br className="hidden md:block"/>
                No code required. Just pure visual impact.
              </p>

              <div className="pointer-events-auto flex gap-4">
                <Link 
                  href="#demo"
                  className="px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-zinc-200"
                >
                  Try the Demo
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            style={{ opacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 text-[10px] tracking-[0.2em] uppercase font-bold"
          >
            <span>Scroll to Explore</span>
            <div className="w-[1px] h-12 bg-zinc-200 overflow-hidden">
               <div className="w-full h-full bg-black animate-marquee-vertical" />
            </div>
          </motion.div>
        </section>

        {/* Marquee Section */}
        <section className="py-8 border-y border-zinc-100 bg-zinc-50 overflow-hidden whitespace-nowrap z-20 relative">
          <div className="flex animate-marquee gap-24 items-center min-w-full">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-24 text-6xl md:text-8xl font-bold tracking-tighter text-zinc-200 select-none">
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
        <section id="features" className="py-40 px-6 relative z-10 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40 items-start">
            <div className="sticky top-40">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-black">
                Spatial <br />
                <span className="text-zinc-300">Commerce.</span>
              </h2>
              <p className="text-xl text-zinc-500 max-w-sm mb-16 leading-relaxed font-medium">
                Your products deserve more than a 2D grid. Give them volume, texture, and presence.
              </p>
              
              <ul className="space-y-12">
                <FeatureItem 
                  title="01 / Photorealistic Detail" 
                  desc="Our AI preserves every stitch, grain, and reflection from your original photography."
                />
                <FeatureItem 
                  title="02 / Instant AR" 
                  desc="One tap to view in room. No app download required. Works on iOS and Android native."
                />
                <FeatureItem 
                  title="03 / Universal Embed" 
                  desc="Copy-paste integration for any platform. Lightweight and SEO friendly."
                />
              </ul>
            </div>
            
            <div className="space-y-10 pt-20 md:pt-0">
               <VisualCard icon={<Upload />} title="Upload Assets" color="bg-zinc-50 border-zinc-100 text-zinc-400" />
               <VisualCard icon={<Layers />} title="AI Processing" color="bg-zinc-50 border-zinc-100 text-black" />
               <VisualCard icon={<Smartphone />} title="Deploy Anywhere" color="bg-zinc-50 border-zinc-100 text-zinc-400" />
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-40 px-6 relative border-t border-zinc-100 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-black">
                  Take it for a <br/>
                  <span className="text-zinc-400">Spin.</span>
                </h2>
                <div className="text-right">
                    <p className="text-zinc-500 text-lg mb-2 font-medium">Interactive Preview</p>
                    <div className="h-[1px] w-full bg-zinc-300 mb-2"/>
                    <p className="text-zinc-400 text-sm">Drag to Rotate • Scroll to Zoom</p>
                </div>
             </div>

             {/* The Optimized ProductViewer */}
             <div className="w-full h-[600px] md:h-[800px] bg-white rounded-[3rem] border border-zinc-200 overflow-hidden relative group hover:border-zinc-300 transition-colors shadow-2xl shadow-zinc-200/50">
                <ProductViewer />
             </div>
          </div>
        </section>

        {/* Metrics / Stats */}
        <section className="py-40 px-6 border-y border-zinc-100 bg-white">
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-100">
              <Stat number="40%" label="Conversion Lift" />
              <Stat number="3x" label="Engagement Time" />
              <Stat number="-25%" label="Return Rate" />
           </div>
        </section>

        {/* Footer */}
        <footer className="py-40 px-6 relative overflow-hidden bg-black text-white">
           <div className="max-w-5xl mx-auto text-center relative z-10">
              <h2 className="text-[12vw] font-bold tracking-tighter leading-none mb-12 text-white select-none">
                DEPHRA
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-24">
                <Link href="#" className="text-2xl font-light hover:text-zinc-400 transition-colors hover:scale-110 transform duration-300">Start Trial</Link>
                <Link href="#" className="text-2xl font-light hover:text-zinc-400 transition-colors hover:scale-110 transform duration-300">Book Demo</Link>
                <Link href="#" className="text-2xl font-light hover:text-zinc-400 transition-colors hover:scale-110 transform duration-300">Contact</Link>
              </div>
              <div className="flex justify-between items-center text-xs text-zinc-500 border-t border-white/10 pt-8 uppercase tracking-widest">
                 <p>© 2024 Dephra Inc.</p>
                 <div className="flex gap-8">
                    <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
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
    <div className="border-l border-zinc-200 pl-8 py-2 hover:border-black transition-colors group cursor-default duration-500">
      <h3 className="text-2xl font-bold mb-3 group-hover:text-black transition-colors text-zinc-400 duration-300">{title}</h3>
      <p className="text-zinc-500 text-lg leading-relaxed max-w-sm group-hover:text-zinc-600 transition-colors duration-300">{desc}</p>
    </div>
  )
}

function VisualCard({ icon, title, color }: { icon: React.ReactNode, title: string, color: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`aspect-square md:aspect-video rounded-3xl border flex flex-col items-center justify-center gap-6 ${color} backdrop-blur-sm shadow-xl shadow-zinc-100 hover:scale-[1.02] transition-transform duration-500`}
    >
      <div className="scale-[2] opacity-80 text-black">{icon}</div>
      <span className="text-2xl font-bold tracking-tight opacity-90 text-black">{title}</span>
    </motion.div>
  )
}

function Stat({ number, label }: { number: string, label: string }) {
  return (
    <div className="py-8 md:py-0">
      <div className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-black">
        {number}
      </div>
      <div className="text-sm text-zinc-400 font-bold tracking-[0.2em] uppercase">
        {label}
      </div>
    </div>
  )
}
