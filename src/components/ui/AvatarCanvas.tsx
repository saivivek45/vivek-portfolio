"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function AvatarModel() {
  const gltf = useGLTF("https://models.readyplayer.me/685d901455c53bb7da276634.glb");
  return <primitive object={gltf.scene} scale={2} />;
}

export default function AvatarCanvas() {
  return (
    <Canvas style={{ width: "300px", height: "300px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <AvatarModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
