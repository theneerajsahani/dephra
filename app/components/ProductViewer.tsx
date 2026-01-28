"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows, useGLTF, Html, useProgress, PerformanceMonitor } from "@react-three/drei";
import { useState, Suspense } from "react";
import { Layers, Rotate3D, Loader2 } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-zinc-200 shadow-sm">
        <Loader2 className="w-4 h-4 animate-spin text-black" />
        <span className="text-[10px] font-bold tracking-tighter text-zinc-900">{progress.toFixed(0)}%</span>
      </div>
    </Html>
  );
}

export default function ProductViewer() {
  const [view, setView] = useState<"2d" | "3d">("2d");
  const [dpr, setDpr] = useState(1.5); 
  
  const imagePath = "/assets/demo/sofa-front.jpg"; 
  const modelPath = "/assets/demo/sofa-model.glb";

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="flex justify-center mb-12">
        <div className="bg-zinc-100/50 p-1.5 rounded-full flex gap-1 border border-zinc-200/50 backdrop-blur-sm">
          <button
            onClick={() => setView("2d")}
            className={`px-8 py-2.5 rounded-full text-xs font-bold tracking-tight transition-all ${
              view === "2d" 
                ? "bg-white text-black shadow-sm" 
                : "text-zinc-400 hover:text-zinc-600"
            }`}
          >
            <span className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              Standard
            </span>
          </button>
          <button
            onClick={() => setView("3d")}
            className={`px-8 py-2.5 rounded-full text-xs font-bold tracking-tight transition-all ${
              view === "3d" 
                ? "bg-black text-white shadow-sm" 
                : "text-zinc-400 hover:text-zinc-600"
            }`}
          >
            <span className="flex items-center gap-2">
              <Rotate3D className="w-3.5 h-3.5" />
              Interactive
            </span>
          </button>
        </div>
      </div>

      {/* Viewer Window */}
      <div className="relative aspect-[16/10] bg-[#fdfdfd] rounded-[2.5rem] border border-zinc-200/60 overflow-hidden">
        <AnimatePresence mode="wait">
          {view === "2d" ? (
            <motion.div
              key="2d"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-center justify-center bg-white"
            >
              <div className="relative w-full h-full">
                <Image 
                    src={imagePath}
                    alt="Product Front View"
                    fill
                    className="object-contain p-12 md:p-24"
                    priority
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="3d"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-[#f8f8f8] cursor-grab active:cursor-grabbing"
            >
               <Canvas 
                  dpr={[1, dpr]} 
                  camera={{ position: [0, 1, 4], fov: 40 }}
                  shadows={false}
                >
                  <PerformanceMonitor 
                    onIncline={() => setDpr(1.5)} 
                    onDecline={() => setDpr(0.75)} 
                  />

                  <Suspense fallback={<Loader />}>
                    <ambientLight intensity={0.8} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
                    
                    <group position={[0, -0.6, 0]}>
                       <Model url={modelPath} />
                       <ContactShadows resolution={512} scale={12} blur={2.5} opacity={0.1} far={10} color="#000000" />
                    </group>

                    <Environment preset="studio" />
                  </Suspense>
                  
                  <OrbitControls 
                    makeDefault 
                    autoRotate 
                    autoRotateSpeed={0.5}
                    enableZoom={true} 
                    enablePan={false}
                    minDistance={2.5}
                    maxDistance={6}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 1.8}
                  />
              </Canvas>
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-zinc-400 text-[10px] font-bold tracking-widest uppercase pointer-events-none select-none bg-white/50 px-4 py-2 rounded-full backdrop-blur-md border border-zinc-100">
                <Rotate3D className="w-3 h-3" />
                Interact to Rotate
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Preload the model
useGLTF.preload("/assets/demo/sofa-model.glb");
