"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Upload, Wand2, Globe, Check } from "lucide-react";
import { useRef } from "react";

const steps = [
    {
        icon: Upload,
        title: "You Send Photos",
        description: "Share 3-4 images of your product (your existing photos work fine).",
    },
    {
        icon: Wand2,
        title: "We Create 3D",
        description: "Our team builds a 3D model. Ready in 24-48 hours.",
    },
    {
        icon: Globe,
        title: "We Embed It",
        description: "We add it to your website. Your customers see it instantly.",
    },
];

const benefits = [
    "360° rotating product view",
    "\"View in AR\" for smartphones",
    "Embedded on your product pages",
    "Hosted and maintained by us"
];

export default function HowItWorks() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);

    return (
        <section ref={targetRef} className="py-32 px-4 md:px-8 bg-zinc-50 border-b border-zinc-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">What We Do</span>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none max-w-4xl mx-auto">
                        We Turn Your Photos Into Interactive 3D Models
                    </h2>
                </div>

                {/* Steps */}
                <motion.div
                    style={{ scale }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
                >
                    {steps.map((step, i) => (
                        <div key={i} className="group relative bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-xl transition-shadow duration-500">
                            <span className="absolute -left-3 top-8 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm font-bold ring-4 ring-zinc-50">
                                {i + 1}
                            </span>

                            <div className="mb-6 bg-zinc-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <step.icon size={32} className="text-zinc-900" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-2xl font-bold tracking-tight mb-3">{step.title}</h3>
                            <p className="text-zinc-500 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </motion.div>

                {/* What You Get */}
                <div className="bg-white rounded-[2rem] p-8 md:p-16 border border-zinc-200">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                        <div className="md:w-1/3">
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">What You Get</h3>
                            <p className="text-zinc-500">Everything you need to launch spatial commerce on your store.</p>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <Check size={14} className="text-green-600" strokeWidth={3} />
                                    </div>
                                    <span className="font-medium text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
