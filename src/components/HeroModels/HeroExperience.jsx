import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Bird from './Bird'
import Particles from './Particles'

const HeroExperience = () => {
  const [mouse, setMouse] = useState([0, 0])

  // Mouse movement handler to track the position
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      const x = (clientX / window.innerWidth) * 2 - 1
      const y = -(clientY / window.innerHeight) * 2 + 1
      setMouse([x, y])
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <Canvas camera={{ position: [0, 15, 15], fov: 45 }}>
      {/* Lighting */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      
      {/* OrbitControls */}
      <OrbitControls enablePan={false} enableZoom={false} />

      {/* Particles effect */}
      <Particles count={200} />

      {/* Main group to hold the bird */}
      <group scale={0.009} position={[1, -1.5, -2]} rotation={[0, Math.PI, 0]}>
        <Bird mouse={mouse} />
      </group>

      {/* Glowing Bloom effect */}
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0}
          luminanceSmoothing={0.01}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  )
}

export default HeroExperience
