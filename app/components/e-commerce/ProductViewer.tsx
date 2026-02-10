import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls, Stage, ContactShadows, useGLTF } from "@react-three/drei";

function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
}

export default function ProductViewer({ modelUrl }: { modelUrl: string }) {
    return (
        <div className="w-full h-full min-h-[500px] relative">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 4] }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.8} adjustCamera={1.0}>
                        <Center>
                            <group rotation={[0, Math.PI / 2, 0]}>
                                <Model url={modelUrl} />
                            </group>
                        </Center>
                    </Stage>
                    <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} minDistance={3.5} maxDistance={6} />
                </Suspense>
            </Canvas>
        </div>
    );
}
