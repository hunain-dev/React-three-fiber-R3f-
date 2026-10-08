import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

const Experience = () => {
    const Usecube = useRef();
    const [Cubecolor, setCubecolor] = useState("brown")

    useFrame((state,delta)=>{
        Usecube.current.rotation.x += delta;
        Usecube.current.rotation.y += delta;


    })
  return (
    <>
           <ambientLight intensity={1.2} color={"grey"}/>,
           <directionalLight intensity = {2} position={[1,1,1]} color={"white"} />
       
    <mesh ref={Usecube}>
  
        <boxGeometry/>
        <meshBasicMaterial color={Cubecolor} />
        <OrbitControls enableDamping = {true} />

    </mesh>
      
    </>
  )
}

export default Experience
