import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
        />
      </Sphere>
    </mesh>
  );
};

export const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
