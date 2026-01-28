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
      <main ref={containerRef} className="relative min-h-screen w-full bg-black text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
        
        {/* Grain & Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[100] bg-noise opacity-40" />
        <div className="fixed inset-0 pointer-events-none z-[0] bg-grid opacity-30" />
        <div className="fixed inset-0 pointer-events-none z-[1] bg-radial-gradient" />

        {/* Preloader Curtain */}
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: loading ? 0 : "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="fixed inset-0 z-[999] bg-white flex items-center justify-center text-black text-9xl font-bold tracking-tighter"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="flex items-center gap-4"
            >
                <span className="w-6 h-6 bg-black rounded-full animate-ping" />
                DEPHRA
            </motion.div>
        </motion.div>

        {/* Navbar */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-7xl px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full shadow-2xl">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Box className="w-6 h-6 text-blue-500 group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold tracking-tighter text-white">dephra</span>
          </div>
          <div className="hidden md:flex gap-10 text-sm font-medium text-zinc-400">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#demo" className="hover:text-white transition-colors">Demo</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>
          <Link 
            href="https://calendly.com" 
            target="_blank"
            className="group flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-blue-500 hover:text-white transition-all active:scale-95"
          >
            Start Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* 3D Background */}
          <div className="absolute inset-0 z-0 opacity-80">
            <HeroViewer />
          </div>

          {/* Text Content */}
          <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto pointer-events-none">
            <motion.div 
              style={{ y, opacity }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase shadow-2xl shadow-blue-500/20">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span>Spatial Commerce Engine v2.0</span>
              </div>
              
              <h1 className="text-[14vw] leading-[0.8] font-bold tracking-tighter mb-10 text-white drop-shadow-2xl">
                FUTURE<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">UNFOLDED</span>
              </h1>
              
              <p className="max-w-2xl text-lg md:text-2xl text-zinc-400 font-medium leading-relaxed mb-12">
                Bridge the gap between physical and digital. <br className="hidden md:block"/>
                Immersive 3D experiences for the modern web.
              </p>

              <div className="pointer-events-auto flex gap-6">
                <Link 
                  href="#demo"
                  className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 hover:scale-105 transition-all active:scale-95 shadow-2xl shadow-blue-600/30"
                >
                  Explore Demo
                </Link>
                <Link 
                  href="#features"
                  className="px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all"
                >
                  View Features
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            style={{ opacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-zinc-500 text-[10px] tracking-[0.3em] uppercase font-bold"
          >
            <span>Explore Universe</span>
            <div className="w-[1px] h-16 bg-white/10 overflow-hidden">
                <div className="w-full h-full bg-blue-500 animate-marquee-vertical" />
            </div>
          </motion.div>
        </section>

        {/* Marquee Section */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap z-20 relative backdrop-blur-sm">
          <div className="flex animate-marquee gap-24 items-center min-w-full">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-24 text-6xl md:text-9xl font-bold tracking-tighter text-white/5 select-none italic">
                <span>SHOPIFY</span>
                <span>WOOCOMMERCE</span>
                <span>MAGENTO</span>
                <span>BIGCOMMERCE</span>
                <span>STRIPE</span>
                <span>ADOBE</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bento Features Section */}
        <section id="features" className="py-60 px-6 relative z-10 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32 text-center md:text-left">
              <h2 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.8] text-white">
                Engineered for <br />
                <span className="text-zinc-800">Performance.</span>
              </h2>
              <p className="text-xl text-zinc-400 max-w-xl leading-relaxed font-medium">
                Our proprietary optimization engine compresses heavy 3D files by up to 90% without losing a single pixel of detail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
              <div className="md:col-span-8 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-12 flex flex-col justify-between group hover:border-blue-500/50 transition-colors">
                <div>
                   <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 mb-8">
                     <Zap className="w-8 h-8" />
                   </div>
                   <h3 className="text-4xl font-bold mb-6">Lightweight Assets</h3>
                   <p className="text-zinc-400 text-xl max-w-md leading-relaxed">Models that load faster than static images. Perfect for mobile networks and slow connections.</p>
                </div>
                <div className="mt-12 overflow-hidden rounded-2xl aspect-video bg-black/50 border border-white/5">
                   {/* Placeholder for visual or keep as is */}
                   <div className="w-full h-full flex items-center justify-center text-zinc-800 font-mono text-xs">VISUAL_ENGINE_CORE.LOG</div>
                </div>
              </div>

              <div className="md:col-span-4 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-12 flex flex-col justify-between group hover:border-blue-500/50 transition-colors">
                <div>
                   <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-500 mb-8">
                     <Smartphone className="w-8 h-8" />
                   </div>
                   <h3 className="text-4xl font-bold mb-6">Native AR</h3>
                   <p className="text-zinc-400 text-xl leading-relaxed">Integrated Apple QuickLook and Google SceneViewer support.</p>
                </div>
                <div className="mt-8 flex justify-center">
                    <CheckCircle2 className="w-24 h-24 text-zinc-800 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>

              <div className="md:col-span-4 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-12 group hover:border-blue-500/50 transition-colors">
                 <div className="w-14 h-14 bg-green-600/20 rounded-2xl flex items-center justify-center text-green-500 mb-8">
                   <Layers className="w-8 h-8" />
                 </div>
                 <h3 className="text-4xl font-bold mb-6">Multi-Format</h3>
                 <p className="text-zinc-400 text-xl leading-relaxed">Export to GLB, USDZ, OBJ, and glTF with a single click.</p>
              </div>

              <div className="md:col-span-8 bg-blue-600 rounded-[2.5rem] p-12 text-white relative overflow-hidden group">
                 <div className="relative z-10">
                   <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Ready to transform your brand?</h3>
                   <p className="text-blue-100 text-xl max-w-lg mb-10">Join 500+ global retailers scaling their business with spatial commerce.</p>
                   <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform">Get Started Today</button>
                 </div>
                 <Box className="absolute -right-20 -bottom-20 w-80 h-80 text-white/10 rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-60 px-6 relative border-t border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                <div>
                  <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white mb-6">
                    Hands-on <br/>
                    <span className="text-blue-500">Experience.</span>
                  </h2>
                  <p className="text-zinc-400 text-xl max-w-md font-medium">Test the quality and responsiveness of our optimized 3D models.</p>
                </div>
                <div className="text-right">
                    <p className="text-zinc-500 text-lg mb-2 font-medium">System Preview</p>
                    <div className="h-[1px] w-64 bg-white/10 mb-2 ml-auto"/>
                    <p className="text-zinc-600 text-xs tracking-widest uppercase">Precision Render Engine v4.0</p>
                </div>
             </div>

             <div className="w-full p-2 bg-zinc-900 border border-white/5 rounded-[4rem] shadow-2xl">
                <ProductViewer />
             </div>
          </div>
        </section>

        {/* Metrics / Stats */}
        <section className="py-60 px-6 border-y border-white/5 bg-black">
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <Stat number="40%" label="Conversion Lift" />
              <Stat number="3x" label="Engagement Time" />
              <Stat number="-25%" label="Return Rate" />
           </div>
        </section>

        {/* Footer */}
        <footer className="py-60 px-6 relative overflow-hidden bg-white text-black">
           <div className="max-w-5xl mx-auto text-center relative z-10">
              <h2 className="text-[15vw] font-bold tracking-tighter leading-none mb-12 text-black select-none">
                DEPHRA
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-24">
                <Link href="#" className="text-3xl font-bold hover:text-blue-600 transition-colors">Start Trial</Link>
                <Link href="#" className="text-3xl font-bold hover:text-blue-600 transition-colors">Book Demo</Link>
                <Link href="#" className="text-3xl font-bold hover:text-blue-600 transition-colors">Contact</Link>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 border-t border-black/10 pt-12 uppercase tracking-[0.3em] font-bold gap-6">
                  <p>© 2026 DEPHRA SPATIAL TECHNOLOGIES</p>
                  <div className="flex gap-12">
                     <span className="hover:text-black cursor-pointer transition-colors">Privacy Policy</span>
                     <span className="hover:text-black cursor-pointer transition-colors">Terms of Service</span>
                  </div>
              </div>
           </div>
        </footer>

      </main>
    </SmoothScroll>
  );
}

function Stat({ number, label }: { number: string, label: string }) {
  return (
    <div className="py-12 md:py-0">
      <div className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 text-white">
        {number}
      </div>
      <div className="text-xs text-zinc-500 font-bold tracking-[0.3em] uppercase">
        {label}
      </div>
    </div>
  )
}
