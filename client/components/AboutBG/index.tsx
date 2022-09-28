// @ts-nocheck
import * as THREE from "three";
import { Suspense } from "react";
import { Canvas, useThree, useFrame, extend } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";
import { Physics, useSphere } from "@react-three/cannon";

const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "teal",
  roughness: 0,
  envMapIntensity: 0.2,
  emissive: "#370037",
});

const AboutBG = ({ children }: { children: any }) => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}
    >
      <Suspense fallback={null}>
        <directionalLight position={[0, 0, 10]} intensity={0.5} />
        <ambientLight intensity={1.5} />
        <Html>{children}</Html>

        <ambientLight intensity={0.25} />
        <spotLight
          intensity={1}
          angle={0.2}
          penumbra={1}
          position={[30, 30, 30]}
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight
          intensity={5}
          position={[-10, -10, -10]}
          color="#2c54bb"
        />
        <Physics gravity={[0, 2, 0]} iterations={10}>
          <Pointer />
          <Clump />
        </Physics>
      </Suspense>
    </Canvas>
  );
};

function Clump({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  ...props
}) {
  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }));
  useFrame((state) => {
    for (let i = 0; i < 40; i++) {
      // Get current whereabouts of the instanced sphere
      ref.current.getMatrixAt(i, mat);
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-50)
            .toArray(),
          [0, 0, 0]
        );
    }
  });
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[null, null, 40]}
      geometry={sphereGeometry}
      material={baubleMaterial}
    />
  );
}

function Pointer() {
  const viewport = useThree((state) => state.viewport);
  const [, api] = useSphere(() => ({
    type: "Kinematic",
    args: [4],
    position: [0, 0, 0],
  }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0
    )
  );
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
