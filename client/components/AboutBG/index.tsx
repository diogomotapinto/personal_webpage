import * as THREE from "three";
import { Suspense } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";

const AboutBG = ({ children }: { children: any }) => {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 10], fov: 22 }}>
      <Bg />
      <Suspense fallback={null}>
        <directionalLight position={[0, 0, 10]} intensity={0.5} />
        <ambientLight intensity={1.5} />
        <Html>{children}</Html>
        <Rig />
      </Suspense>
    </Canvas>
  );
};

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y - 2, 12),
      0.05
    );
  });
}

// function Caption({ children }: { children: any }) {
//   const { width } = useThree((state) => state.viewport);
//   return (
//     <Text
//       position={[0, 0, -5]}
//       lineHeight={0.8}
//       fontSize={width / 10}
//       material-toneMapped={false}
//       color="white"
//       castShadow={true}
//       anchorX="center"
//       anchorY="middle"
//     >
//       {children}
//     </Text>
//   );
// }

function Bg() {
  return (
    <mesh scale={100} receiveShadow={true}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial
        side={THREE.BackSide}
        iridescenceMap={undefined}
        iridescenceIOR={undefined}
        iridescenceThicknessRange={undefined}
        iridescenceThicknessMap={undefined}
      >
        <Depth
          colorB="green"
          colorA="skyblue"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise
          mapping="local"
          type="white"
          scale={1000}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.2}
        />
      </LayerMaterial>
    </mesh>
  );
}

export default AboutBG;
