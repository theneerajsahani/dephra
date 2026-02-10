"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
    return (
        <section id="schedule" className="py-40 px-6 md:px-12 bg-white flex flex-col items-center text-center">

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
            >
                <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-black mb-10 leading-[1.1]">
                    Create something <br />
                    <span className="text-black/40">extraordinary.</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                    <a href="mailto:hello@dephra.com" className="px-10 py-4 bg-black text-white rounded-full font-semibold text-base hover:bg-zinc-800 transition-all">
                        Talk to an Expert
                    </a>
                    <Link href="/demo/sofa" className="text-[#0071e3] font-semibold text-lg hover:underline transition-all flex items-center gap-2">
                        Get Started <ArrowUpRight size={20} />
                    </Link>
                </div>

                <p className="mt-16 text-sm font-medium text-black/40">
                    Current development cycles: 2-4 weeks.
                </p>
            </motion.div>
        </section>
    );
}
