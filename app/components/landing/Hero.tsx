"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] w-full flex flex-col items-center bg-[#fbfbfb] pt-32 px-6 overflow-hidden">

            {/* Header Content */}
            <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-xs font-semibold tracking-tight text-black/50 mb-4"
                >
                    New Spatial Standard
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-semibold tracking-tight text-black mb-6 leading-[1.05]"
                >
                    Spatial Commerce. <br />
                    <span className="text-black/40">Redefined.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-lg md:text-2xl text-black/60 font-medium leading-relaxed mb-10 max-w-2xl mx-auto"
                >
                    Transform static imagery into tactile product stories. <br className="hidden md:block" />
                    Built for the next generation of digital retail.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-row gap-6 items-center justify-center"
                >
                    <Link href="/demo/sofa" className="px-8 py-3 bg-[#0071e3] text-white rounded-full font-medium text-sm hover:bg-[#0077ed] transition-all flex items-center gap-2">
                        Try the Experience <ArrowRight size={16} />
                    </Link>
                    <button className="text-[#0071e3] font-medium text-sm hover:underline transition-all">
                        Watch the film
                    </button>
                </motion.div>
            </div>

            {/* Product Image Centerpiece - Clean Apple-style shadow */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative mt-20 w-full max-w-6xl aspect-[16/10] md:aspect-[21/10]"
            >
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/[0.02] to-transparent pointer-events-none rounded-[60px]" />
                <div className="relative w-full h-full overflow-hidden rounded-[40px] md:rounded-[60px]">
                    <Image
                        src="/assets/demo/product-images/sofa-front.jpg"
                        alt="Dephra Spatial Sofa"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Visual Depth Accents */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-zinc-500/5 blur-[80px] rounded-full" />
            </motion.div>

        </section>
    );
}
