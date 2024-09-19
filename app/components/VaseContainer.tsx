'use client'
import React, { Suspense } from 'react'
import '../globals.css'
import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, BakeShadows, Bvh, Environment, Float, OrbitControls, Preload, SpotLight, Stage } from '@react-three/drei'
import { Vase } from './vase'
const VaseContainer = () => {
  return (
   
<div className='w-full max-h-[200px] md:max-h-full '>
<Canvas className='dark w-full max-h-[1000px] md:max-h-full ' camera={{ position: [0.5, 0, 6.3], fov: 100  }}>
             <SpotLight
      color={'#134775'}
      intensity={500.3 }
      distance={75}
      angle={0.28}
      decay={0.88}
      penumbra={0.4}
      position={[11, 15, 1]}
      castShadow={true}
    /> 
                <ambientLight/>

      
              <Suspense fallback={null}>
                <Bvh firstHitOnly>
                  <Float
                    speed={1}
                    rotationIntensity={0.5}
                    floatIntensity={0.5}
                    floatingRange={[1, 2]}
                  >
                    <OrbitControls/>
                    
                    <Vase/>
  
              
                  </Float>
                </Bvh>
                <BakeShadows />
                <Preload all />
                <AdaptiveDpr pixelated />
              </Suspense>
            </Canvas>

            </div>
   
  )
}

export default VaseContainer