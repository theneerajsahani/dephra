"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
    return (
        <section className="py-40 px-6 md:px-12 bg-white text-black overflow-hidden relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-10 block">
                        Our Vision
                    </span>
                    <h2 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-20">
                        <span className="text-black">We believe e-commerce is stuck in 2D. </span>
                        <span className="text-black/30">Buying something you can't touch requires a leap of faith. </span>
                        <span className="text-black">We bridge that gap.</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                        <p className="text-xl md:text-2xl text-black/50 font-medium leading-[1.3]">
                            By turning static photos into tactile, interactive 3D models, we give your customers the confidence to truly explore.
                        </p>
                        <p className="text-xl md:text-2xl text-black font-semibold leading-[1.3]">
                            Experience the spatial future of retail, where every detail matters.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
