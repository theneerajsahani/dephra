"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 px-4 md:px-8 bg-black text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
                        Simple Pricing
                    </h2>
                    <p className="text-xl text-zinc-400">Pay Per Product + Monthly Hosting</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Setup Fee */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-zinc-800 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl leading-none select-none">1</div>
                        <h3 className="text-2xl font-bold mb-2">Setup</h3>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-4xl md:text-5xl font-bold">₹500-800</span>
                            <span className="text-zinc-500">/ product</span>
                        </div>
                        <p className="text-zinc-400 mb-8 border-b border-zinc-800 pb-8">
                            One-time fee to create your 3D model.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-zinc-300">
                                <Check size={20} className="text-white shrink-0 mt-0.5" />
                                <span>High-fidelity modeling</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-300">
                                <Check size={20} className="text-white shrink-0 mt-0.5" />
                                <span>Texture & material matching</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-300">
                                <Check size={20} className="text-white shrink-0 mt-0.5" />
                                <span>Optimized for web & AR</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Hosting Fee */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-gradient-to-b from-blue-900/20 to-zinc-900 p-8 md:p-12 rounded-3xl border border-blue-900/30 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl leading-none select-none text-blue-500">2</div>
                        <h3 className="text-2xl font-bold mb-2 text-blue-400">Hosting</h3>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-4xl md:text-5xl font-bold">₹4,000</span>
                            <span className="text-zinc-500">/ month</span>
                        </div>
                        <p className="text-zinc-400 mb-8 border-b border-zinc-800 pb-8">
                            We host all your models, handle updates, provide support.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-zinc-300">
                                <Check size={20} className="text-blue-400 shrink-0 mt-0.5" />
                                <span>Unlimited views</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-300">
                                <Check size={20} className="text-blue-400 shrink-0 mt-0.5" />
                                <span>Fast global CDN</span>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-300">
                                <Check size={20} className="text-blue-400 shrink-0 mt-0.5" />
                                <span>Technical support</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <div className="mt-16 bg-zinc-900/50 p-8 rounded-2xl text-center max-w-2xl mx-auto border border-zinc-800">
                    <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">Example Calculation</p>
                    <p className="text-xl md:text-2xl text-white font-medium">
                        <span className="text-zinc-500">20 Products:</span> <br />
                        <span className="text-white">₹12,000 Setup (One-time)</span> + <span className="text-white">₹4,000/mo Hosting</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
