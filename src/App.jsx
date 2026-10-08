import { Canvas } from "@react-three/fiber"
import Experience from "./Components/Experience"

const App = () => {
  return (
    <div className="container">
      <Canvas>
        <Experience/>
      
      </Canvas>
      
    </div>
  )
}

export default App
