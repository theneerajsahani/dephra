"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { products } from "@/app/lib/products";

export default function Showcase() {
    return (
        <section id="showcase" className="py-40 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40 mb-6 block">
                            Spatial Experiences
                        </span>
                        <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-black">
                            Redefining Digital <br />
                            <span className="text-black/30">Through Spatial Interaction.</span>
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {products.map((product, index) => (
                        <Link key={product.slug} href={`/demo/${product.slug}`} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="relative aspect-[4/3] bg-[#f5f5f7] rounded-[40px] overflow-hidden mb-6"
                            >
                                <Image
                                    src={product.images[0]}
                                    alt={product.title}
                                    fill
                                    className="object-contain p-12 transition-transform duration-1000 group-hover:scale-[1.05]"
                                />

                                {/* Subtle interactive overlay */}
                                <div className="absolute inset-0 bg-transparent group-hover:bg-black/[0.02] transition-colors duration-500" />
                            </motion.div>

                            <div className="flex justify-between items-end px-4">
                                <div>
                                    <p className="text-sm font-semibold text-black/40 mb-1">{product.collection}</p>
                                    <h2 className="text-2xl font-semibold text-black">{product.title}</h2>
                                </div>
                                <div className="text-[#0071e3] font-semibold flex items-center gap-1 group/btn">
                                    Explore <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
