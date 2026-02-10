"use client";

import { motion } from "framer-motion";
import { Box, Layers, MousePointer2, Smartphone } from "lucide-react";

const features = [
    {
        title: "Spatial OS",
        description: "Proprietary rendering engine designed for real-time physics and lighting.",
        icon: <Layers className="w-6 h-6" />,
        className: "md:col-span-2 bg-white",
    },
    {
        title: "Mobile AR",
        description: "Deploy products directly into customers' spaces with high fidelity.",
        icon: <Smartphone className="w-6 h-6" />,
        className: "bg-[#f5f5f7]",
    },
    {
        title: "Intuitive Gestures",
        description: "Natural interaction models that feel familiar across any device.",
        icon: <MousePointer2 className="w-6 h-6" />,
        className: "bg-[#f5f5f7]",
    },
    {
        title: "Cloud Fidelity",
        description: "Streaming high-poly assets without compromise on load times.",
        icon: <Box className="w-6 h-6" />,
        className: "md:col-span-2 bg-white",
    },
];

export default function GridGallery() {
    return (
        <section className="py-40 px-6 md:px-12 bg-[#fbfbfb]">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`p-10 rounded-[32px] border border-black/[0.03] flex flex-col justify-between min-h-[300px] ${feature.className}`}
                        >
                            <div className="bg-black/5 w-12 h-12 rounded-2xl flex items-center justify-center mb-10 text-black/40">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                                <p className="text-sm font-medium text-black/50 leading-relaxed max-w-[240px]">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
