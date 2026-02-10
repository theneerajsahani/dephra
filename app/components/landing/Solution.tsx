"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

export default function Solution() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [100, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="min-h-screen py-32 px-4 md:px-8 bg-zinc-950 text-white overflow-hidden flex items-center">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-blue-500 font-mono tracking-widest text-sm uppercase mb-6 block">The Solution</span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1] mb-12">
                        Absolute <br />
                        Clarity.
                    </h2>

                    <div className="space-y-12 text-xl text-zinc-400 font-light leading-relaxed">
                        <p>
                            <strong className="text-white font-medium">Interactive 3D</strong> allows your customers to rotate, zoom, and inspect from every angle. It removes the guesswork.
                        </p>
                        <p>
                            <strong className="text-white font-medium">Augmented Reality</strong> bridges the gap between digital and physical, letting them place products in their own space.
                        </p>
                    </div>

                    <div className="mt-12 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-500/10 p-2 rounded-full border border-blue-500/20"><Check size={20} className="text-blue-500" /></div>
                            <span className="text-2xl font-medium tracking-tight">20-35% conversion lift</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-500/10 p-2 rounded-full border border-blue-500/20"><Check size={20} className="text-blue-500" /></div>
                            <span className="text-2xl font-medium tracking-tight text-white/60">43% more engagement</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Visual (Parallax) */}
                <div className="relative h-[600px] w-full hidden lg:block">
                    <motion.div
                        style={{ x, opacity }}
                        className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl overflow-hidden border border-white/10"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-zinc-700 font-black text-9xl select-none opacity-50">3D</span>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
