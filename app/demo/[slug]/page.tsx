"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { ArrowLeft, Box, Smartphone, X, ChevronRight } from "lucide-react";
import ProductViewer from "../../components/e-commerce/ProductViewer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import QRCodeComponent from "@/app/components/ui/QRCode";
import { getProductBySlug } from "@/app/lib/products";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const product = getProductBySlug(resolvedParams.slug);

    if (!product) {
        notFound();
    }

    const [viewMode, setViewMode] = useState<"3d" | "2d">("2d");
    const [activeImage, setActiveImage] = useState(0);
    const [showARModal, setShowARModal] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
        };
        checkMobile();
    }, []);

    const handleARClick = () => {
        if (isMobile) {
            const modelUrl = product.modelUrl;

            if (/Android/i.test(navigator.userAgent)) {
                // Android Scene Viewer Intent
                const intentUrl = `intent://arvr.google.com/scene-viewer/1.0?file=${modelUrl}&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${window.location.href};end;`;
                window.location.href = intentUrl;
            } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                // iOS Quick Look
                window.open(modelUrl, '_blank');
                alert("For iOS AR, a .usdz file is required. This demo uses .glb which works on Android.");
            }
        } else {
            setShowARModal(true);
        }
    };

    return (
        <main className="h-screen w-full bg-white text-black overflow-hidden flex flex-col lg:flex-row">

            {/* AR Modal */}
            <AnimatePresence>
                {showARModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                        onClick={() => setShowARModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="bg-white rounded-2xl p-8 max-w-sm w-full text-center relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowARModal(false)}
                                className="absolute top-4 right-4 p-2 hover:bg-zinc-100 rounded-full transition-colors"
                            >
                                <X size={20} className="text-zinc-500" />
                            </button>

                            <div className="mb-6">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Smartphone size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">View in your space</h3>
                                <p className="text-zinc-500 text-sm">Scan this QR code with your phone to view this {product.slug} in your room instantly.</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-zinc-100 shadow-inner mb-6">
                                <QRCodeComponent value={typeof window !== 'undefined' ? window.location.href : ""} />
                            </div>

                            <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span>Compatible with iOS & Android</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Left: Interactive Media Area */}
            <div className="h-1/2 lg:h-full lg:w-2/3 relative flex items-center justify-center overflow-hidden"
                style={{ background: "radial-gradient(circle at 50% 50%, #fcfcfc 0%, #e8e8e9 100%)" }}>

                {/* Back Button */}
                <header className="absolute top-6 left-6 z-20">
                    <Link href="/" className="flex items-center gap-2 text-xs font-bold px-4 py-2 bg-white/40 backdrop-blur-xl border border-white/40 rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all text-zinc-800">
                        <ArrowLeft size={16} /> <span>Back</span>
                    </Link>
                </header>

                <AnimatePresence mode="wait">
                    {viewMode === "3d" ? (
                        <motion.div
                            key="3d"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full relative"
                        >
                            <ProductViewer modelUrl={product.modelUrl} />

                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                                <button
                                    onClick={() => setViewMode("2d")}
                                    className="bg-zinc-900/10 backdrop-blur-md text-zinc-900 px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-sm border border-zinc-900/10 flex items-center gap-2"
                                >
                                    Exit 3D View
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="2d"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-full h-full relative flex items-center justify-center p-8 lg:p-20"
                        >
                            <div className="relative w-full h-full max-w-4xl max-h-[80vh] drop-shadow-2xl">
                                <Image
                                    src={product.images[activeImage]}
                                    alt={product.title}
                                    fill
                                    className="object-contain mix-blend-multiply"
                                    priority
                                />
                            </div>

                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                                <button
                                    onClick={() => setViewMode("3d")}
                                    className="bg-white/40 backdrop-blur-xl text-zinc-900 px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-sm border border-white/40 flex items-center gap-2"
                                >
                                    <Box size={18} className="opacity-60" />
                                    <span>View in 3D</span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Right: Product Details */}
            <div className="h-1/2 lg:h-full lg:w-1/3 bg-white p-6 lg:p-12 flex flex-col overflow-y-auto">
                <div className="mt-auto mb-auto">
                    <span className="text-zinc-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">{product.collection}</span>
                    <h1 className="text-4xl lg:text-5xl font-black text-zinc-900 mb-3 tracking-tighter">{product.title}</h1>
                    <p className="text-2xl font-light text-zinc-500 mb-8">{product.price}</p>

                    <p className="text-zinc-600 text-sm leading-relaxed mb-10 font-medium">
                        {product.description}
                    </p>

                    {/* Image Selector */}
                    <div className="flex gap-3 mb-8">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => { setActiveImage(idx); setViewMode("2d"); }}
                                className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${activeImage === idx && viewMode === "2d" ? "border-black" : "border-transparent bg-zinc-100"}`}
                            >
                                <Image src={img} alt={`View ${idx}`} fill sizes="48px" className="object-contain" />
                            </button>
                        ))}
                    </div>

                    {/* AR Card */}
                    <div
                        onClick={handleARClick}
                        className="group border border-zinc-200 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:border-zinc-400 hover:shadow-lg hover:shadow-zinc-200/50 hover:-translate-y-0.5 transition-all mb-10 bg-white"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                <Box size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm text-zinc-900">View in your space</h3>
                                <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide">Augmented Reality</p>
                            </div>
                        </div>
                        <div className="bg-zinc-100 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider text-zinc-600 group-hover:bg-black group-hover:text-white transition-colors">
                            TRY NOW
                        </div>
                    </div>

                    {/* Specs List */}
                    <div className="space-y-3 mb-10 text-xs">
                        {product.specs.map((spec, idx) => (
                            <div key={idx} className="flex items-center justify-between py-2 border-b border-zinc-50">
                                <span className="text-zinc-400">{spec.label}</span>
                                <span className="font-bold text-black">{spec.value}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full bg-zinc-900 text-white py-4 rounded-full font-bold hover:bg-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-zinc-200/50 flex items-center justify-center gap-2">
                        <span>Launch Experience</span>
                        <ChevronRight size={16} className="opacity-50" />
                    </button>

                    <p className="text-center text-[10px] text-zinc-400 mt-4">Spatial assets ready for deployment.</p>
                </div>
            </div>
        </main>
    );
}
