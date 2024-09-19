'use client'

import * as THREE from 'three'
import { useRef, useEffect } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { useGLTF, Html, Text, Environment, Center, OrbitControls, SpotLight } from '@react-three/drei'
import { WaterPass } from 'three-stdlib'
import { Chair } from './Chair'

extend({ WaterPass })

export default function ChairConf() {
  return (
    <Canvas
      eventPrefix="client"

      shadows
      camera={{ position: [0.5, 1, 3.1], fov: 45 }}
    >
      {/* Soft, neutral background color */}
      <color attach="background" args={['#d3d3d3']} />

      {/* Ambient light to softly illuminate the entire scene */}
     

    

      {/* Spot light to create sharp shadows and add dramatic lighting */}
    

      {/* Adding realistic environment lighting */}
      <Environment preset="studio" backgroundIntensity={0.2} />

      {/* Chair Model */}
      <Center>
        <Chair />
      </Center>

      {/* Enable user interaction with the scene */}
      <OrbitControls enableZoom={true} />

    </Canvas>
  )
}
