
import { Suspense } from 'react'
import { useThree } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  useGLTF,
} from '@react-three/drei'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js'

function BikeModel() {
  const { gl } = useThree()

  const { scene } = useGLTF('./Bike.glb', true, true, (loader) => {
    const ktx2Loader = new KTX2Loader()

    ktx2Loader.setTranscoderPath(
      'https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/libs/basis/'
    )

    ktx2Loader.detectSupport(gl)
    loader.setKTX2Loader(ktx2Loader)
  })

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, -1, 0]}
    />
  )
}

export default function Bike() {
  return (
    <>
      <ambientLight intensity={1} />
      <Environment preset="park" />
      <OrbitControls enableDamping enableZoom />

      <Suspense fallback={null}>
        <BikeModel />
      </Suspense>
    </>
  )
}