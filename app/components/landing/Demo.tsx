"use client";

import { useRef, Suspense, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage, Float } from "@react-three/drei";
import { View, Smartphone, Maximize2 } from "lucide-react";

function DemoModel() {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh>
                <torusKnotGeometry args={[1, 0.35, 200, 32]} />
                <meshStandardMaterial
                    color="#ff4d00"
                    roughness={0.1}
                    metalness={0.6}
                    emissive="#ff4d00"
                    emissiveIntensity={0.2}
                />
            </mesh>
        </Float >
    );
}

export default function Demo() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const [hovered, setHovered] = useState(false);

    return (
        <section
            id="demo"
            ref={containerRef}
            className="py-32 px-4 md:px-8 bg-zinc-50 flex flex-col items-center overflow-hidden"
        >
            <motion.div
                style={{ opacity }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-[12vw] md:text-[8vw] font-black tracking-tighter leading-none text-zinc-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
                    DEMO
                </h2>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 relative z-10">
                    See It In Action
                </h2>
                <p className="text-xl text-zinc-500 max-w-lg mx-auto relative z-10">
                    This is what your customers will experience. <br />
                    Rotate it. View it in your space.
                </p>
            </motion.div>

            <motion.div
                style={{ scale }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`relative w-full max-w-6xl h-[70vh] bg-white rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5 transition-all duration-700 ${hovered ? "scale-[1.02] shadow-orange-500/10" : ""}`}
            >
                <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
                    <Suspense fallback={null}>
                        <Environment preset="city" />
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                        <DemoModel />
                        <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
                    </Suspense>
                </Canvas>

                {/* Overlay UI */}
                <div className="absolute top-6 right-6">
                    <button className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
                        <Maximize2 size={20} />
                    </button>
                </div>

                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-full text-sm font-bold text-black flex items-center gap-2 shadow-lg">
                        <View size={16} /> Drag to rotate
                    </div>
                    <button className="pointer-events-auto flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg">
                        <Smartphone size={18} /> View in AR
                    </button>
                </div>
            </motion.div>

            <p className="mt-8 text-sm text-zinc-400 font-medium tracking-wide uppercase max-w-sm text-center">
                Open this page on your phone and tap the button above to see this product in your room.
            </p>
        </section>
    );
}
