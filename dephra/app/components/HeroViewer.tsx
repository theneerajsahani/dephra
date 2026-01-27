"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef<THREE.Group>(null);

  // Parallax Effect
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smoothly interpolate mouse movement into rotation
    const mouseX = state.mouse.x * 0.5; // Scale down for subtlety
    const mouseY = state.mouse.y * 0.2;

    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouseX + Math.PI / 4, 0.05);
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -mouseY * 0.5, 0.05);
  });

  return (
    <group ref={meshRef} position={[0, -0.5, 0]} rotation={[0, Math.PI / 4, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function HeroViewer() {
  const modelPath = "/assets/demo/sofa-model.glb";

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          {/* Ambient Lighting */}
          <ambientLight intensity={0.4} />
          
          {/* Accent Lights (Purple/Blue) */}
          <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#a855f7" castShadow />
          <spotLight position={[-10, 5, -10]} angle={0.3} penumbra={1} intensity={1} color="#3b82f6" />
          
          {/* Fill Light (White) */}
          <pointLight position={[0, -5, 5]} intensity={0.5} color="#ffffff" />

          {/* Floating Model with Interaction */}
          <Float speed={2} rotationIntensity={0} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
             <Model url={modelPath} />
          </Float>

          {/* Environment Reflection */}
          <Environment preset="city" blur={0.8} />
        </Suspense>
      </Canvas>
      
      {/* Vignette Overlay for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_90%)]" />
    </div>
  );
}

useGLTF.preload("/assets/demo/sofa-model.glb");
