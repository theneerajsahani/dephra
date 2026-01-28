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
      <div className="flex flex-col items-center gap-2 px-4 py-2 bg-black/90 backdrop-blur rounded-lg shadow-lg border border-zinc-800">
        <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
        <span className="text-xs font-semibold text-zinc-400">{progress.toFixed(0)}% loaded</span>
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
    <div className="w-full max-w-5xl mx-auto">
      {/* Controls */}
      <div className="flex justify-center mb-8">
        <div className="bg-zinc-900 p-1 rounded-full flex gap-1 border border-zinc-800">
          <button
            onClick={() => setView("2d")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              view === "2d" 
                ? "bg-zinc-800 text-white shadow-sm" 
                : "text-zinc-500 hover:text-zinc-300"
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
                : "text-zinc-500 hover:text-zinc-300"
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
      <div className="relative aspect-square md:aspect-[16/9] bg-zinc-950 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl shadow-blue-500/5">
        <AnimatePresence mode="wait">
          {view === "2d" ? (
            <motion.div
              key="2d"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center bg-black"
            >
              <div className="relative w-full h-full">
                <Image 
                    src={imagePath}
                    alt="Product Front View"
                    fill
                    className="object-contain p-8 md:p-12 opacity-80"
                    priority
                />
              </div>
              
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-zinc-900/90 backdrop-blur border border-zinc-800 rounded-lg text-xs font-semibold text-zinc-500 shadow-sm">
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
              className="absolute inset-0 bg-zinc-950 cursor-grab active:cursor-grabbing"
            >
               <Canvas 
                  dpr={[1, dpr]} 
                  camera={{ position: [0, 1, 4], fov: 45 }}
                  shadows={false}
                >
                  <PerformanceMonitor 
                    onIncline={() => setDpr(1.5)} 
                    onDecline={() => setDpr(0.75)} 
                  />

                  <Suspense fallback={<Loader />}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#3b82f6" />
                    
                    <group position={[0, -0.5, 0]}>
                       <Model url={modelPath} />
                       <ContactShadows resolution={256} scale={10} blur={2} opacity={0.6} far={10} color="#000000" />
                    </group>

                    <Environment preset="night" />
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
                    maxPolarAngle={Math.PI / 2}
                  />
              </Canvas>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-zinc-500 text-xs font-medium pointer-events-none select-none bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-zinc-800">
                <Rotate3D className="w-3 h-3" />
                DRAG TO ROTATE • SCROLL TO ZOOM
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
