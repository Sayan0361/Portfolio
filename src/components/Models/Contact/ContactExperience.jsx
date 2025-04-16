import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Lost from "./Lost_programmer";
import { useRef } from "react";

const AnimatedModel = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      // Rotate slowly while maintaining front-facing
      groupRef.current.rotation.y = Math.PI + t * 0.3;

      // Floating effect
      groupRef.current.position.y = -1.2 + Math.sin(t) * 0.1;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={0.9}
      rotation={[0.15, 0, 0]} // Slight forward tilt and face forward
      position={[0, -1.2, 0]}
    >
      <Lost />
    </group>
  );
};

const ContactExperience = () => {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 4], fov: 35 }} // Front view with slight top-down angle
      style={{ width: "100%", height: "100%", background: "black" }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 5, 5]} intensity={1.5} />

      {/* 3D Model */}
      <AnimatedModel />

      {/* Environment */}
      <Environment preset="city" />

      {/* Optional: Enable rotation for testing only */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
      />
    </Canvas>
  );
};

export default ContactExperience;
