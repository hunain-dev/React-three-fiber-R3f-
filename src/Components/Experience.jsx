import { OrbitControls } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react'
import { TextureLoader } from 'three'

const Experience = () => {
  const cuberotatateref = useRef();
  
  useFrame((state,delta)=>{
    cuberotatateref.current.rotation.x += delta
    cuberotatateref.current.rotation.y += delta

  });

    const textureload = useLoader(
      TextureLoader,
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtX366oGduW1GdXg-QVbKSQTgsCcIrFqIPm7thGavSg&s=10"
    )
    


  return (
    <>
      <mesh ref={cuberotatateref}>
        <boxGeometry />
        <OrbitControls enableDamping = {true} enableZoom ={true} />
        <meshBasicMaterial  map={textureload}/>
      </mesh>
      
    </>
  )
}

export default Experience
