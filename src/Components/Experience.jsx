import { Text, OrbitControls } from "@react-three/drei";
import { useFrame, useLoader } from '@react-three/fiber';
import { useControls } from "leva";
import { Suspense, useRef } from 'react'



const Experience = () => {
  
  const cuberotatateref = useRef();
  
  useFrame((state,delta)=>{
    cuberotatateref.current.rotation.x += delta
    cuberotatateref.current.rotation.y += delta

  });

    // const textureload = useLoader(
    //   TextureLoader,
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtX366oGduW1GdXg-QVbKSQTgsCcIrFqIPm7thGavSg&s=10"
    // )
    
  //  fror moddel

  // const {scene} = useGLTF("./Robot.glb");



{/* ui debug */}

const {x,y,z} = useControls({
  x: {value: 0,min: -4, max: 3,step:0.01},
  y: {value: 0,min: -4, max: 3,step:0.01},
  z: {value: 0,min: -4, max: 3,step:0.01}



});




  return (
    <>

      {/* <mesh ref={cuberotatateref}>
        <boxGeometry />
        <OrbitControls enableDamping = {true} enableZoom ={true} />
        <meshBasicMaterial  color="red"/>
      </mesh>
       */}
{/* 
  <mesh>
  <Suspense>
    <ambientLight  />
    <Environment preset='sunset'/>
    <OrbitControls enableDamping = {true} enableZoom ={true} />
   <primitive object={scene} scale={0.9}    
      position={[0, -1.8, 0]}
  />
   </Suspense>
  </mesh> */}


{/* ui debug */}

<mesh position-x={x} position-y={y} position-z={z} ref={cuberotatateref}>
    <boxGeometry/>
    <OrbitControls enableDamping = {true}/>
    <meshBasicMaterial color={"red"}/>


{/* ui debug */}

{/* for text anamtion */}
{/* <Text
  position={[2, 0, 0]}
  color="red"
>
  hello brother
</Text> */}
    </mesh>

</>
  )
}

export default Experience
