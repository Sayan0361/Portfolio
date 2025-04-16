import React, { useRef, useMemo, useEffect, useState } from 'react'
import { useGLTF, useAnimations, Trail, Points, PointMaterial } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useGraph, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Generate flame particles around the bird
function FireParticles({ count = 500, bird }) {
  const [positions, setPositions] = useState([])
  
  useEffect(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 3
      const y = (Math.random() - 0.5) * 3
      const z = (Math.random() - 0.5) * 3
      temp.push(x, y, z)
    }
    setPositions(temp)
  }, [count])

  useFrame((state) => {
    if (bird.current) {
      points.current.position.x = bird.current.position.x
      points.current.position.y = bird.current.position.y
      points.current.position.z = bird.current.position.z
    }
  })

  const points = useRef()
  
  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff4000"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function Bird({ mouse, ...props }) {
  const group = useRef()
  const trailRef = useRef()
  const { scene, animations } = useGLTF('/models/phoenix_bird.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  const [wingSpeed, setWingSpeed] = useState(1)

  // Custom lighting setup
  const spotLight = useMemo(() => new THREE.SpotLight(0xff7700, 10, 20, Math.PI / 4, 0.5, 1), [])
  const pointLight = useMemo(() => new THREE.PointLight(0xff2200, 5, 10), [])
  
  // Play the default animation once ready
  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      // Get the first animation and adjust its timeScale for wing speed
      const anim = actions[Object.keys(actions)[0]]
      anim.timeScale = wingSpeed
      anim.play()
    }
  }, [actions, wingSpeed])

  // Smooth mouse-following logic with improved dynamics
  useFrame((state) => {
    if (group.current && mouse) {
      const [mouseX, mouseY] = mouse

      const targetX = mouseX * 6
      const targetY = -mouseY * 6

      // Calculate movement speed
      const speedX = Math.abs(targetX - group.current.position.x)
      const speedY = Math.abs(targetY - group.current.position.y)
      const speed = speedX + speedY
      
      // Adjust wing speed based on movement
      const newWingSpeed = 1 + speed * 0.2
      setWingSpeed(newWingSpeed)

      // Smooth position transition with easing
      group.current.position.x += (targetX - group.current.position.x) * 0.05
      group.current.position.y += (targetY - group.current.position.y) * 0.05

      // Dynamic rotation for more natural movement
      group.current.rotation.z = -mouseX * 0.4
      group.current.rotation.x = mouseY * 0.3
      
      // Update light positions to follow the bird
      pointLight.position.set(
        group.current.position.x,
        group.current.position.y,
        group.current.position.z
      )
      
      spotLight.position.set(
        group.current.position.x,
        group.current.position.y + 2,
        group.current.position.z
      )
      spotLight.target = group.current
    }
  })

  // Create a color shift effect over time
  const [time, setTime] = useState(0)
  useFrame((state, delta) => {
    setTime((prev) => prev + delta)
  })
  
  // Pulsing emissive intensity
  const emissivePulse = useMemo(() => {
    return 3 + Math.sin(time * 5) * 1.5
  }, [time])

  return (
    <group>
      {/* Lights */}
      <primitive object={spotLight} />
      <primitive object={pointLight} />
      
      {/* Main bird group */}
      <group ref={group} {...props} dispose={null}>
        {/* Flame trail effect */}
        <Trail
          ref={trailRef}
          width={1.5}
          length={8}
          color={new THREE.Color(0xff2200)}
          attenuation={(t) => t * t}
        >
          <mesh visible={false}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color={0xff2200} />
          </mesh>
        </Trail>
        
        {/* Base bird model */}
        <primitive object={clone} />

        {/* Wings with enhanced materials */}
        {nodes?.Object_7 && (
          <skinnedMesh
            geometry={nodes.Object_7.geometry}
            skeleton={nodes.Object_7.skeleton}
            castShadow
            receiveShadow
          >
            <meshPhysicalMaterial
              color="#ffcc00"
              emissive="#ff4500"
              emissiveIntensity={emissivePulse}
              roughness={0.3}
              metalness={0.9}
              clearcoat={1}
              clearcoatRoughness={0.1}
              envMapIntensity={1}
              transmission={0.1}
            />
          </skinnedMesh>
        )}

        {/* Body with enhanced materials */}
        {nodes?.Object_8 && (
          <skinnedMesh
            geometry={nodes.Object_8.geometry}
            skeleton={nodes.Object_8.skeleton}
            castShadow
            receiveShadow
          >
            <meshPhysicalMaterial
              color="#ff9900"
              emissive="#ff2200"
              emissiveIntensity={emissivePulse}
              roughness={0.2}
              metalness={0.8}
              clearcoat={0.5}
              clearcoatRoughness={0.1}
              envMapIntensity={1}
            />
          </skinnedMesh>
        )}
        
        {/* Particle effects */}
        <FireParticles count={300} bird={group} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/phoenix_bird.glb')