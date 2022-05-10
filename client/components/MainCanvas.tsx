import { useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three";

const MainCanvas = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && ref) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshStandardMaterial({
        color: "#00FF95",
      });

      const light = new THREE.PointLight(0xffffff);
      const light2 = new THREE.PointLight(0xffffff);

      light2.lookAt(0, 0, 0);
      light2.position.set(3, 3, 3);

      light.lookAt(0, 0, 0);
      light.position.set(0, 0, 5);

      scene.add(light2);
      scene.add(light);

      camera.position.z = 5;
      camera.position.x = 0;

      const Figure = new THREE.Mesh(geometry, material);
      const plane = new THREE.Mesh(geometry, material);
      plane.scale.set(5, 0.2, 5);
      plane.position.y = -2;

      scene.add(Figure);
      scene.add(plane);

      light2.castShadow = true;

      light.castShadow = true;
      Figure.castShadow = true;
      plane.receiveShadow = true;

      const controls = new OrbitControls(camera, ref.current || undefined);
      controls.enableDamping = true;

      const clock = new THREE.Clock();
      let delta = clock.getDelta();

      const animate = () => {
        requestAnimationFrame(animate);

        // light.position.x = Math.sin(Date.now() * 0.001) * 5;
        //light.position.y = Math.cos(Date.now() * 0.001) * 5;
        light.position.x = camera.position.x;
        light.position.y = camera.position.y;
        light.position.z = camera.position.z;

        Figure.position.y = Math.sin(Date.now() * 0.001) * 1;

        light.castShadow = true;
        renderer.shadowMap.enabled = true;
        controls.update();
        renderer.render(scene, camera);
      };

      const resize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };

      animate();

      ref!.current!.appendChild(renderer.domElement);
      window.addEventListener("resize", resize);
      setLoaded(true);
      return () => window.removeEventListener("resize", resize);
    }
  }, [ref, loaded]);

  return (
    <>
      <h1
        style={{
          position: "absolute",
          top: "0",
          fontSize: "2rem",
          color: "#fff",
          zIndex: 1,
        }}
      >
        Hey
      </h1>
      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
        ref={ref}
      />
    </>
  );
};

export default MainCanvas;
