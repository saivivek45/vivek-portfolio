"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function AvatarModel() {
  const gltf = useGLTF("https://modelviewer.dev/shared-assets/models/RobotExpressive.glb");

  return (
    <primitive
      object={gltf.scene}
      scale={0.5}
      position={[0, -1.5, 0]}
    />
  );
}

export default function AvatarCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 35 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 5]} intensity={2} />

        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}