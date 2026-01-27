"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows, useGLTF } from "@react-three/drei";
import { useState, Suspense } from "react";
import { Layers, Rotate3D, Loader2 } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ProductViewer() {
  const [view, setView] = useState<"2d" | "3d">("2d");
  
  const imagePath = "/assets/demo/sofa-front.jpg"; 
  const modelPath = "/assets/demo/sofa-model.glb";

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Controls */}
      <div className="flex justify-center mb-8">
        <div className="bg-zinc-100 p-1 rounded-full flex gap-1">
          <button
            onClick={() => setView("2d")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              view === "2d" 
                ? "bg-white text-zinc-900 shadow-sm" 
                : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Standard View
            </span>
          </button>
          <button
            onClick={() => setView("3d")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              view === "3d" 
                ? "bg-blue-600 text-white shadow-sm" 
                : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            <span className="flex items-center gap-2">
              <Rotate3D className="w-4 h-4" />
              Interactive 3D
            </span>
          </button>
        </div>
      </div>

      {/* Viewer Window */}
      <div className="relative aspect-square md:aspect-[16/9] bg-zinc-50 rounded-3xl border border-zinc-200 overflow-hidden shadow-2xl shadow-zinc-200/50">
        <AnimatePresence mode="wait">
          {view === "2d" ? (
            <motion.div
              key="2d"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center bg-white"
            >
              <div className="relative w-full h-full">
                <Image 
                    src={imagePath}
                    alt="Product Front View"
                    fill
                    className="object-contain p-8 md:p-12"
                    priority
                />
              </div>
              
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur border border-zinc-200 rounded-lg text-xs font-semibold text-zinc-500 shadow-sm">
                STATIC IMAGE
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="3d"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-zinc-100 cursor-grab active:cursor-grabbing"
            >
               {/* 
                 OPTIMIZATION NOTES:
                 - dpr={[1, 1.5]}: Cap pixel ratio to save GPU on retina screens
                 - shadows={false}: Disable expensive shadow maps (we use ContactShadows instead)
                 - gl={{ antialias: true }}: Keep edges smooth but efficient
               */}
               <Canvas 
                  dpr={[1, 1.5]} 
                  camera={{ position: [0, 0, 4], fov: 45 }}
                  gl={{ preserveDrawingBuffer: true }}
                >
                  <Suspense fallback={null}>
                    {/* Manual Lighting Setup (Faster than Stage) */}
                    <ambientLight intensity={0.7} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow={false} />
                    
                    {/* Center and scale the model automatically */}
                    <group position={[0, -0.5, 0]}>
                       <Model url={modelPath} />
                       {/* Lightweight fake shadow */}
                       <ContactShadows resolution={512} scale={10} blur={2} opacity={0.5} far={10} color="#000000" />
                    </group>

                    <Environment preset="city" />
                  </Suspense>
                  
                  <OrbitControls 
                    makeDefault 
                    autoRotate 
                    autoRotateSpeed={0.8}
                    enableZoom={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                  />
              </Canvas>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-zinc-400 text-xs font-medium pointer-events-none select-none bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Rotate3D className="w-3 h-3" />
                DRAG TO ROTATE
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Preload the model for faster switching
useGLTF.preload("/assets/demo/sofa-model.glb");
