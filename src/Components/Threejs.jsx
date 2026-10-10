import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from
"three/examples/jsm/controls/OrbitControls.js";

const Threejs = () => {
  useEffect(() => {
    // resize
    const size = {
      height: window.innerHeight,
      width: window.innerWidth,
    };

    const scene = new THREE.Scene();
    const timer = new THREE.Timer();
    const background = new THREE.Color("white");
    scene.background = background

    // texture

    const texture = new THREE.TextureLoader();
   const load =  texture.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kIoCaXLUuJciD4SOaoquQ24ZCIbzAVKNqRkFlY5cWg&s");
   load.colorSpace =  THREE.SRGBColorSpace

// agar humein model lagaana ho to hum gltfloader  ka used krte hai









    // geomery mesh material
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
    //   color: "red",
    map:load
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // camera
    const camera = new THREE.PerspectiveCamera(
      75,
      size.width / size.height,
      0.1,
      100,
    );

    camera.position.z = 3;
    camera.lookAt(0,0,0);

    

    // render
    const canvas = document.querySelector("#webgl");
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(size.height, size.width);

    renderer.render(scene, camera);

    // orbit controls 

    const controls = new OrbitControls(
        camera,
        renderer.domElement
    );
    controls.enableDamping = true
    
    

    function setsize() {
      size.width = window.innerWidth;
      size.height = window.innerHeight;

      renderer.setSize(size.width, size.height);

      camera.aspect = size.width / size.height;

      camera.updateProjectionMatrix();
    }

    window.addEventListener("resize", setsize);
    setsize();

    // aniamtion
    function animate() {
      timer.update();
      controls.update();
      const delta = timer.getDelta();
      requestAnimationFrame(animate);
      mesh.rotation.x += delta;
      mesh.rotation.y += delta;
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  // setsize

  return <canvas id="webgl"></canvas>;
};

export default Threejs;
