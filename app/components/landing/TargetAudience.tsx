"use client";

import { motion } from "framer-motion";

const groups = [
    "Furniture & Home Decor",
    "Jewelry Brands",
    "Fashion & Accessories",
    "Electronics Retailers",
    "Catalogs with 20-200 Items"
];

export default function TargetAudience() {
    return (
        <section className="py-24 px-4 md:px-8 bg-zinc-50 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/3">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-6">
                        Who This Is For
                    </h2>
                    <p className="text-zinc-500 text-lg">
                        Designed for brands that want to elevate their ecommerce experience.
                    </p>
                </div>

                <div className="md:w-2/3 flex flex-wrap gap-4">
                    {groups.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white px-6 py-4 rounded-full border border-zinc-200 text-lg font-medium shadow-sm"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
