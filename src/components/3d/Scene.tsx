'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusGeometry args={[1, 0.2, 16, 32]} />
        <meshStandardMaterial color="#4A90E2" metalness={0.8} roughness={0.2} />
      </mesh>
    </>
  );
}

export default Scene; 