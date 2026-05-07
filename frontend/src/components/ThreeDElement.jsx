import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Cylinder, Environment, Float } from '@react-three/drei';

const TieredCake = ({ color }) => {
  const cakeGroup = useRef();

  useFrame((state) => {
    if (cakeGroup.current) {
      // Slowly rotate the cake
      cakeGroup.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <group ref={cakeGroup} position={[0, -1, 0]}>
        {/* Bottom Tier (Main color) */}
        <Cylinder args={[2, 2, 1.5, 64]} position={[0, 0.75, 0]}>
          <meshStandardMaterial color={color} roughness={0.4} />
        </Cylinder>
        
        {/* Middle Tier (Cream color) */}
        <Cylinder args={[1.5, 1.5, 1.2, 64]} position={[0, 2.1, 0]}>
          <meshStandardMaterial color="#F2E9E4" roughness={0.4} />
        </Cylinder>

        {/* Top Tier (Main color) */}
        <Cylinder args={[1, 1, 1, 64]} position={[0, 3.2, 0]}>
          <meshStandardMaterial color={color} roughness={0.4} />
        </Cylinder>

        {/* Top decoration (cherry/sphere) */}
        <mesh position={[0, 3.8, 0]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#b91c1c" roughness={0.2} metalness={0.1} />
        </mesh>

        {/* Cake Stand Plate */}
        <Cylinder args={[2.5, 2.6, 0.2, 64]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
        </Cylinder>
        
        {/* Cake Stand Pillar */}
        <Cylinder args={[0.4, 0.6, 1.5, 32]} position={[0, -0.85, 0]}>
          <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
        </Cylinder>
        
        {/* Cake Stand Base */}
        <Cylinder args={[1.5, 1.5, 0.2, 64]} position={[0, -1.7, 0]}>
          <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
        </Cylinder>
      </group>
    </Float>
  );
};

const ThreeDElement = ({ color = '#D97757' }) => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 2, 9], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, 5, -5]} intensity={0.5} />
        <TieredCake color={color} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
      </Canvas>
    </div>
  );
};

export default ThreeDElement;
