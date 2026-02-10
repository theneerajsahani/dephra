"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section id="schedule" className="py-32 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden">
            {/* Stage Light Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-500/[0.05] blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center"
            >
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-10"
                >
                    Get Started
                </motion.span>

                <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white mb-10 leading-[0.95]">
                    Your brand, <br />
                    <span className="text-white/40">rendered in spatial.</span>
                </h2>

                <p className="text-lg md:text-2xl text-white/50 font-medium mb-16 max-w-2xl mx-auto leading-tight">
                    A dedicated service to transform your products into <br className="hidden md:block" /> cinematic, web-ready spatial experiences.
                </p>

                <div className="flex justify-center">
                    <Link
                        href="#schedule"
                        className="group relative px-12 py-5 bg-white text-black rounded-full font-bold text-base hover:bg-zinc-200 transition-all shadow-2xl shadow-white/10 overflow-hidden flex items-center gap-2"
                    >
                        Schedule a Call
                        <ArrowUpRight size={18} className="translate-y-px group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

            </motion.div>
        </section>
    );
}
