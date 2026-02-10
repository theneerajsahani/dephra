"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ProductViewer from "../e-commerce/ProductViewer";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center bg-[#fbfbfb] pt-32 md:pt-40 px-6 overflow-hidden">

            {/* Header Content */}
            <div className="relative z-10 text-center flex flex-col items-center max-w-5xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[10px] font-bold tracking-[0.25em] uppercase text-black/40 mb-6 block"
                >
                    Retail's Spatial Future
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-[120px] font-semibold tracking-tighter text-black mb-10 leading-[0.95]"
                >
                    Spatial Commerce.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-2xl text-black/50 font-medium leading-tight mb-14 max-w-2xl mx-auto"
                >
                    Turn static products into cinematic, spatial experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center"
                >
                    <Link href="#showcase" className="px-10 py-4 bg-black text-white rounded-full font-semibold text-sm hover:bg-zinc-800 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 shadow-xl shadow-black/5">
                        See Demos <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>

            {/* Product Centerpiece - Interactive 3D Model */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 60 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-8 w-full max-w-7xl h-[50vh] md:h-[65vh] cursor-grab active:cursor-grabbing"
            >
                <div className="absolute inset-0 bg-transparent rounded-[40px] md:rounded-[80px] overflow-hidden">
                    <ProductViewer modelUrl="/assets/demo/sofa-model-optimised.glb" />
                </div>

                {/* Interaction Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none"
                >
                    <div className="px-4 py-1.5 bg-black/5 backdrop-blur-md rounded-full border border-black/5">
                        <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest whitespace-nowrap">Click & Drag to Rotate</span>
                    </div>
                </motion.div>

                {/* Ambient Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/[0.03] blur-[150px] rounded-full -z-10 pointer-events-none" />
            </motion.div>

        </section>
    );
}
