import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react'

const Experience = () => {
  // const cuberotatateref = useRef();
  
  // useFrame((state,delta)=>{
  //   cuberotatateref.current.rotation.x += delta
  //   cuberotatateref.current.rotation.y += delta

  // });

    // const textureload = useLoader(
    //   TextureLoader,
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtX366oGduW1GdXg-QVbKSQTgsCcIrFqIPm7thGavSg&s=10"
    // )
    
  //  fror moddel

  const {scene} = useGLTF("./Robot.glb");


  return (
    <>
      {/* <mesh ref={cuberotatateref}>
        <boxGeometry />
        <OrbitControls enableDamping = {true} enableZoom ={true} />
        <meshBasicMaterial  color="red"/>
      </mesh>
       */}
  <mesh>
  <Suspense>
    <ambientLight  />
    <Environment preset='sunset'/>
    <OrbitControls enableDamping = {true} enableZoom ={true} />
   <primitive object={scene} scale={0.9}       position={[0, -1.8, 0]}
  />
   </Suspense>
  </mesh>

    </>
  )
}

export default Experience
