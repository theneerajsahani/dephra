"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, useGLTF, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef<THREE.Group>(null);

  // Parallax Effect
  useFrame((state) => {
    if (!meshRef.current) return;
    const mouseX = state.mouse.x * 0.5;
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
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <color attach="background" args={['#ffffff']} />
          
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} color="#ffffff" castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f0f0f0" />
          <directionalLight position={[0, 5, 5]} intensity={1} />

          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
             <Model url={modelPath} />
             <ContactShadows resolution={1024} scale={15} blur={2} opacity={0.15} far={10} color="#000000" />
          </Float>

          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/assets/demo/sofa-model.glb");
