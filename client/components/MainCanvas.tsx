// import { useEffect, useRef, useState } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import * as THREE from "three";
// import Home from "../components/Home/Home";

// const MainCanvas = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     console.log("useeffect");
//     if (!loaded && ref) {
//       const scene = new THREE.Scene();
//       const camera = new THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//       );

//       const renderer = new THREE.WebGLRenderer();
//       renderer.setSize(window.innerWidth, window.innerHeight);

//       const geometry = new THREE.SphereBufferGeometry(1, 80, 80);
//       const material = new THREE.MeshStandardMaterial({
//         color: "#00FF95",
//       });
//       material.roughness = 0;
//       material.metalness = 0;

//       const materialPlane = new THREE.MeshStandardMaterial({
//         color: "#f6f6f6",
//       });

//       const light = new THREE.PointLight(0xffffff);
//       const light2 = new THREE.PointLight(0xffffff, 0.5, 10);
//       const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

//       light2.lookAt(0, 0, 0);
//       light2.position.set(3, 3, 3);

//       light.lookAt(0, 0, 0);
//       light.position.set(0, 0, 5);

//       scene.add(ambientLight);
//       scene.add(light2);
//       //scene.add(light);

//       camera.position.z = 5;
//       camera.position.y = 2;
//       camera.position.x = -2;

//       const figure = new THREE.Mesh(geometry, material);
//       const plane = new THREE.Mesh(geometry, materialPlane);

//       plane.scale.set(10, 0.2, 10);

//       plane.position.y = -2;

//       scene.add(figure);
//       scene.add(plane);

//       light2.castShadow = true;

//       light.castShadow = true;
//       figure.castShadow = true;
//       plane.receiveShadow = true;

//       const controls = new OrbitControls(camera, ref.current || undefined);
//       controls.enableDamping = true;

//       const clock = new THREE.Clock();
//       let delta = clock.getDelta();

//       const animate = () => {
//         requestAnimationFrame(animate);

//         // light.position.x = Math.sin(Date.now() * 0.001) * 5;
//         //light.position.y = Math.cos(Date.now() * 0.001) * 5;
//         light.position.x = camera.position.x;
//         light.position.y = camera.position.y;
//         light.position.z = camera.position.z;

//         figure.position.y = Math.sin(Date.now() * 0.001) * 1;

//         light.castShadow = true;
//         renderer.shadowMap.enabled = true;
//         controls.update();
//         renderer.render(scene, camera);
//       };

//       const resize = () => {
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//       };

//       animate();

//       ref!.current!.appendChild(renderer.domElement);
//       window.addEventListener("resize", resize);
//       setLoaded(true);
//       return () => window.removeEventListener("resize", resize);
//     }
//   }, []);

//   return (
//     <>
//       <Home></Home>
//       <div
//         style={{
//           height: "100vh",
//           width: "100vw",
//         }}
//         ref={ref}
//       />
//     </>
//   );
// };

// export default MainCanvas;
