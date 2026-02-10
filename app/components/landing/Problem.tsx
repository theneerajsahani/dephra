"use client";

import { motion } from "framer-motion";
import { EyeOff, Box, Repeat, ScanSearch, Store, RefreshCw, ArrowUpRight } from "lucide-react";

const bentoItems = [
    {
        title: "Flat Images",
        description: "Your product photos only show one angle at a time.",
        icon: EyeOff,
        colSpan: "md:col-span-1",
        bg: "bg-zinc-100",
    },
    {
        title: "No Spatial Context",
        description: "Customers can't judge size or how it fits in their space.",
        icon: Box,
        colSpan: "md:col-span-1",
        bg: "bg-zinc-100",
    },
    {
        title: "Returns Cost Money",
        description: "15-30% return rates because products don't match expectations.",
        icon: RefreshCw,
        colSpan: "md:col-span-1",
        bg: "bg-red-50 text-red-900",
    },
];

export default function Problem() {
    return (
        <section className="py-32 px-4 md:px-8 bg-white text-black">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter mb-20 text-center uppercase"
                >
                    Your Customers Can't See <br />
                    <span className="text-zinc-400">What They're Buying</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
                    {bentoItems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`relative p-8 rounded-3xl flex flex-col justify-between overflow-hidden group hover:shadow-2xl transition-shadow duration-500 ${item.colSpan} ${item.bg}`}
                        >
                            <div className="flex justify-between items-start">
                                <item.icon size={24} className="opacity-50" />
                                <div className="w-8 h-8 rounded-full border border-current opacity-20 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <ArrowUpRight size={14} />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold tracking-tight mb-2">{item.title}</h3>
                                <p className="opacity-70 font-medium leading-relaxed">{item.description}</p>
                            </div>

                            {/* Hover Effect Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
