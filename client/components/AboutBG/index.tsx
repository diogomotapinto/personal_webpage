// @ts-nocheck
import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  MarchingCubes,
  MarchingCube,
  Environment,
  Sky,
  Bounds,
  Text,
} from "@react-three/drei";
import { Physics, RigidBody, BallCollider } from "@react-three/rapier";
import { LayerMaterial, Depth, Noise } from "lamina";

const vec = new THREE.Vector3();

function MetaBall({ color, ...props }) {
  const api = useRef();
  useFrame((state, delta) => {
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiplyScalar(delta * -0.05)
    );
  });
  return (
    <RigidBody
      ref={api}
      colliders={false}
      linearDamping={4}
      angularDamping={0.95}
      {...props}
    >
      <MarchingCube
        roughness="0.7"
        transmission="1"
        strength={0.35}
        subtract={6}
        color={color}
      />
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  );
}

function Pointer() {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    const { width, height } = viewport.getCurrentViewport();
    vec.set(mouse.x * (width / 2), mouse.y * (height / 2), 0);
    ref.current.setNextKinematicTranslation(vec);
  });
  return (
    <RigidBody type="kinematicPosition" colliders={false} ref={ref}>
      <MarchingCube strength={0.5} subtract={10} color="white" />
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  );
}

function Plane() {
  const { size } = useThree();
  return (
    <mesh position={[0, 0, -10]} material-color="#ffffff" color="#ffffff">
      <planeGeometry args={[size.width, size.height]} color="#ffffff" />
    </mesh>
  );
}

function Overlay() {
  return (
    <div className="absolute top-1/4 mx-4 left-0 flex  z-30 text-white flex-col font-sans">
      {" "}
      <h1 className="text-4xl font-bold ">Socials</h1>
      <h2 className="text-2xl font-bold ">
        Github -{" "}
        <a
          className="text-blue-300 underline"
          href="https://github.com/diogomotapinto"
        >
          diogomotapinto
        </a>
      </h2>
    </div>
  );
}

export default function AboutBG() {
  // const materialProps = useControls({
  //   thickness: { value: 5, min: 0, max: 20 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
  //   clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0.9, max: 1, step: 0.01 },
  //   ior: { value: 1.25, min: 1, max: 2.3, step: 0.05 },
  //   envMapIntensity: { value: 25, min: 0, max: 100, step: 1 },
  //   color: '#ffffff',
  //   attenuationTint: '#ffe79e',
  //   attenuationDistance: { value: 0, min: 0, max: 1 },
  // })

  function Rig({ v = new THREE.Vector3() }) {
    return useFrame((state) => {
      state.camera.position.lerp(
        v.set(state.mouse.x / 2, state.mouse.y / 2, 3),
        0.1
      );
    });
  }

  function Bg() {
    return (
      <mesh scale={100}>
        <boxGeometry args={[1, 1, 1]} />
        <LayerMaterial side={THREE.BackSide}>
          <Depth
            colorB="red"
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

  return (
    <>
      <Overlay></Overlay>
      <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
        <ambientLight intensity={1} />
        <directionalLight intensity={1} />
        <directionalLight
          intensity={10}
          position={[-10, -10, -10]}
          color="purple"
        />
        <directionalLight
          intensity={10}
          position={[0, 0, -50]}
          color="purple"
        />
        <Physics gravity={[0, 2, 0]}>
          <MarchingCubes
            resolution={64}
            maxPolyCount={20000}
            enableUvs={false}
            enableColors
          >
            <meshPhysicalMaterial
              roughness={0}
              thickness={0}
              clearcoat={1}
              transmission={1}
              vertexColors
            />
            <MetaBall color="skyblue" position={[1, 1, 0.5]} />
            <MetaBall color="pink" position={[-1, -1, -0.5]} />
            <MetaBall color="teal" position={[2, 2, 0.5]} />
            <MetaBall color="teal" position={[-2, -2, -0.5]} />
            <MetaBall color="purple" position={[3, 3, 0.5]} />
            <MetaBall color="skyblue" position={[-3, -3, -0.5]} />
            <Pointer />
            <Bg />
            <Rig />
          </MarchingCubes>
        </Physics>

        <Environment files="adamsbridge.hdr" />
        {/* Zoom to fit a 1/1/1 box to match the marching cubes */}
        <Bounds fit clip observe margin={1}>
          <mesh visible={false}>
            <boxGeometry />
          </mesh>
        </Bounds>
      </Canvas>
    </>
  );
}
