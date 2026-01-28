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
          <color attach="background" args={['#000000']} />
          <fog attach="fog" args={['#000000', 5, 15]} />

          {/* Cinematic Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#3b82f6" castShadow />
          <spotLight position={[-10, 5, -10]} angle={0.3} penumbra={1} intensity={1} color="#ffffff" />
          <pointLight position={[0, -2, 2]} intensity={1} color="#3b82f6" />

          {/* Floating Model */}
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
             <Model url={modelPath} />
             <ContactShadows resolution={512} scale={10} blur={2} opacity={0.5} far={10} color="#000000" />
          </Float>

          <Environment preset="night" blur={1} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/assets/demo/sofa-model.glb");
