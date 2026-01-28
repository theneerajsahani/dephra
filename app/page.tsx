"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Box, ChevronRight, Layers, Smartphone, Sparkles, Upload, Zap, Globe, Shield } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import HeroViewer from "./components/HeroViewer";
import ProductViewer from "./components/ProductViewer";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <main ref={containerRef} className="relative min-h-screen w-full bg-white text-zinc-950 selection:bg-black selection:text-white overflow-x-hidden font-sans">
        
        {/* Subtle Overlays */}
        <div className="fixed inset-0 pointer-events-none z-[100] bg-noise" />
        <div className="fixed inset-0 pointer-events-none z-[0] bg-grid opacity-40" />

        {/* Minimal Preloader */}
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: loading ? 1 : 0, pointerEvents: loading ? "auto" : "none" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[999] bg-white flex items-center justify-center"
        >
            <div className="flex flex-col items-center gap-6">
                <Box className="w-12 h-12 text-black animate-bounce" />
                <div className="h-[1px] w-24 bg-zinc-100 overflow-hidden">
                    <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full bg-black"
                    />
                </div>
            </div>
        </motion.div>

        {/* Sophisticated Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-8 mix-blend-difference invert pointer-events-none">
          <div className="flex items-center gap-2 pointer-events-auto">
            <span className="text-2xl font-black tracking-tighter uppercase italic">Dephra</span>
          </div>
          <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.2em] uppercase pointer-events-auto">
            <Link href="#solutions" className="hover:opacity-50 transition-opacity">Solutions</Link>
            <Link href="#platform" className="hover:opacity-50 transition-opacity">Platform</Link>
            <Link href="#enterprise" className="hover:opacity-50 transition-opacity">Enterprise</Link>
          </div>
          <button className="text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white pb-1 pointer-events-auto hover:opacity-50 transition-opacity">
            Connect
          </button>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[110vh] w-full flex flex-col items-center justify-center pt-20">
          <motion.div 
            style={{ opacity, scale }}
            className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-12 rounded-full border border-zinc-200 bg-zinc-50/50 backdrop-blur-sm text-[10px] font-bold tracking-[0.1em] text-zinc-500 uppercase">
              <Sparkles className="w-3 h-3" />
              <span>Defining the Spatial Standard</span>
            </div>
            
            <h1 className="text-[10vw] md:text-[8vw] leading-[0.9] font-black tracking-tight mb-12 text-black text-center">
                DIMENSION <br />
                <span className="italic font-serif font-light text-zinc-300">AS A SERVICE</span>
            </h1>
            
            <p className="max-w-2xl text-lg md:text-xl text-zinc-500 font-medium leading-relaxed mb-16 text-center">
              Deploy high-fidelity 3D commerce experiences with zero overhead. <br className="hidden md:block"/>
              The enterprise infrastructure for spatial assets.
            </p>

            <div className="flex flex-col md:flex-row gap-6">
              <Link 
                href="#demo"
                className="px-10 py-5 bg-black text-white rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-zinc-200"
              >
                Launch Platform
              </Link>
              <Link 
                href="#"
                className="px-10 py-5 bg-white border border-zinc-200 text-black rounded-full font-bold text-sm hover:bg-zinc-50 transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>

          <div className="absolute inset-0 z-0">
             <HeroViewer />
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-zinc-300 text-[10px] tracking-[0.3em] uppercase font-bold">
            <div className="w-[1px] h-12 bg-zinc-100 overflow-hidden">
                <div className="w-full h-full bg-zinc-400 animate-marquee-vertical" />
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 border-y border-zinc-100 bg-zinc-50/30 overflow-hidden">
           <div className="flex animate-marquee gap-32 items-center min-w-full">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-32 text-2xl font-black tracking-tighter text-zinc-200 grayscale opacity-50">
                <span>SHOPIFY</span>
                <span>STRIPE</span>
                <span>AMAZON</span>
                <span>ADOBE</span>
                <span>NIKE</span>
                <span>APPLE</span>
                <span>SAMSUNG</span>
                <span>PORSCHE</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bento Features */}
        <section id="solutions" className="py-48 px-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
                {/* Large Main Feature */}
                <div className="md:col-span-8 bg-zinc-50 border border-zinc-100 rounded-[3rem] p-16 flex flex-col justify-between group hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-700">
                    <div>
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-zinc-100 mb-10 group-hover:scale-110 transition-transform">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Engineered for Velocity</h3>
                        <p className="text-zinc-500 text-xl max-w-md leading-relaxed">
                            Compress 3D data by up to 95% without compromising visual fidelity. Global CDN delivery as standard.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <span className="px-4 py-1.5 bg-white border border-zinc-100 rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Speed Core</span>
                        <span className="px-4 py-1.5 bg-white border border-zinc-100 rounded-full text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Auto-LOD</span>
                    </div>
                </div>

                {/* Vertical Secondary */}
                <div className="md:col-span-4 bg-zinc-950 rounded-[3rem] p-12 text-white flex flex-col justify-between relative overflow-hidden group">
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md mb-10">
                            <Globe className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-4xl font-bold tracking-tight mb-6 leading-tight">Universal <br /> Embed</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            One line of code. <br /> Any platform. <br /> Native AR.
                        </p>
                    </div>
                    <div className="relative z-10 mt-12 flex items-center justify-between">
                        <span className="text-3xl font-serif italic text-zinc-600">v4.0</span>
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-500">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Small Horizontal */}
                <div className="md:col-span-4 bg-zinc-50 border border-zinc-100 rounded-[3rem] p-12 flex flex-col justify-between group hover:border-black/10 transition-colors">
                    <Shield className="w-10 h-10 text-zinc-300 mb-8" />
                    <div>
                        <h4 className="text-2xl font-bold mb-4 tracking-tight">Enterprise Trust</h4>
                        <p className="text-zinc-500 leading-relaxed">SOC2 Type II certified infrastructure for global scale.</p>
                    </div>
                </div>

                {/* Large Secondary */}
                <div className="md:col-span-8 bg-zinc-50 border border-zinc-100 rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center gap-12 group overflow-hidden">
                    <div className="flex-1">
                        <h3 className="text-4xl font-bold tracking-tight mb-6 leading-tight">Automated Asset Pipeline</h3>
                        <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                            Upload RAW photography and receive production-ready spatial models in minutes. Powered by proprietary neural rendering.
                        </p>
                        <button className="group/btn flex items-center gap-2 text-sm font-bold tracking-tight">
                            Explore Workflow <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 aspect-square bg-zinc-200/50 rounded-2xl border border-zinc-200/50 flex items-center justify-center relative">
                        <Upload className="w-12 h-12 text-zinc-300 animate-pulse" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200/0 to-white/40" />
                    </div>
                </div>
            </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-48 px-10 bg-[#fafafa]">
           <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="text-center mb-24 max-w-2xl">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Refined Interaction.</h2>
                    <p className="text-zinc-500 text-lg font-medium">Experience the seamless transition between traditional media and spatial assets.</p>
                </div>

                <div className="w-full max-w-6xl p-4 bg-white border border-zinc-200 rounded-[3.5rem] shadow-2xl shadow-zinc-200/50">
                    <ProductViewer />
                </div>
           </div>
        </section>

        {/* Closing CTA */}
        <section className="py-64 px-10 text-center relative overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-3xl mx-auto relative z-10"
            >
                <h2 className="text-[12vw] md:text-[8vw] font-black tracking-tight leading-none mb-12">THE FUTURE IS <br /> <span className="text-zinc-200">SPATIAL.</span></h2>
                <div className="flex flex-col md:flex-row justify-center gap-6 mt-20">
                    <button className="px-12 py-6 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform">Request Access</button>
                    <button className="px-12 py-6 bg-white border border-zinc-200 text-black rounded-full font-bold hover:bg-zinc-50 transition-colors">Documentation</button>
                </div>
            </motion.div>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-zinc-50/50" />
        </section>

        {/* Footer */}
        <footer className="py-24 px-10 border-t border-zinc-100 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-24 md:gap-12">
                <div className="md:col-span-2">
                    <span className="text-3xl font-black italic tracking-tighter mb-8 block">DEPHRA</span>
                    <p className="text-zinc-400 max-w-xs leading-relaxed font-medium">Infrastructure for the next generation of commerce. Built for scale, engineered for speed.</p>
                </div>
                <div className="flex flex-col gap-6 text-sm font-bold tracking-tight">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-300">Platform</span>
                    <Link href="#" className="hover:text-zinc-400 transition-colors">Asset Management</Link>
                    <Link href="#" className="hover:text-zinc-400 transition-colors">Optimization API</Link>
                    <Link href="#" className="hover:text-zinc-400 transition-colors">AR/VR Player</Link>
                </div>
                <div className="flex flex-col gap-6 text-sm font-bold tracking-tight">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-300">Resources</span>
                    <Link href="#" className="hover:text-zinc-400 transition-colors">Developer Docs</Link>
                    <Link href="#" className="hover:text-zinc-400 transition-colors">Performance Benchmarks</Link>
                    <Link href="#" className="hover:text-zinc-400 transition-colors">Security Overview</Link>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-widest text-zinc-300 uppercase">
                <p>© 2026 DEPHRA SPATIAL TECHNOLOGIES INC.</p>
                <div className="flex gap-12">
                    <Link href="#" className="hover:text-black transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-black transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-black transition-colors">Cookies</Link>
                </div>
            </div>
        </footer>

      </main>
    </SmoothScroll>
  );
}
