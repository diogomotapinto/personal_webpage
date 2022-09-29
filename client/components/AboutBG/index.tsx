// @ts-nocheck
import * as THREE from "three";
import { Suspense } from "react";
import { Canvas, useThree, useFrame, extend } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";
import { Physics, useSphere, usePlane } from "@react-three/cannon";
import { Text } from "@react-three/drei";
const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "teal",
  roughness: 0,
  envMapIntensity: 0.2,
  emissive: "#370037",
});

const AboutBG = ({
  children,
  caption = "",
}: {
  children?: any;
  caption?: string;
}) => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}
    >
      <Suspense fallback={null}>
        <directionalLight position={[0, 0, 10]} intensity={0.5} />
        <ambientLight intensity={1.5} />
        <Html>{children}</Html>
        <Caption>{`${caption}`}</Caption>
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
        <directionalLight
          castShadow
          intensity={1}
          position={[50, 50, 25]}
          shadow-mapSize={[256, 256]}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Physics gravity={[0, 2, 0]} iterations={10}>
          <group position={[0, 0, -10]}>
            <Pointer />
            <Borders />
            <Clump />
          </group>
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

function Borders() {
  const { viewport } = useThree();
  return (
    <>
      <Plane
        position={[0, -viewport.height / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Plane
        position={[-viewport.width / 2 - 1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Plane
        position={[viewport.width / 2 + 1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Plane position={[0, 0, -1]} rotation={[0, 0, 0]} />
      <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
    </>
  );
}

function Plane({ color, ...props }) {
  usePlane(() => ({ ...props }));
  return null;
}

function Pointer() {
  const viewport = useThree((state) => state.viewport);
  const [, api] = useSphere(() => ({
    type: "Kinematic",
    args: [6],
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

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport);
  return (
    <Text
      position={[0, 0, -7]}
      lineHeight={0.8}
      fontSize={width / 8}
      color="black"
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
    >
      {children}
    </Text>
  );
}

export default AboutBG;
