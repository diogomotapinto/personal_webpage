"use client";

import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Caption } from "./caption";
import { InstancedSpheres } from "./intanced-spheres";
import { Mouse } from "./mouse";
import { Borders } from "./borders";

export function MainCanvas() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas
        shadows
        gl={{ stencil: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 50, near: 17, far: 40 }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={["#2c54bb", 25, 35]} />
          <color attach="background" args={["#ffffff"]} />
          <ambientLight intensity={1.5} />
          {/* <directionalLight position={[-10, -10, -5]} intensity={0.5} /> */}
          <directionalLight
            castShadow
            intensity={4}
            position={[50, 50, 25]}
            shadow-mapSize={[256, 256]}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <Caption>{`Diogo\nSoftware Developer\nBased in Amsterdam.`}</Caption>
          <Physics
            gravity={[0, -9.81, 0]}
            defaultContactMaterial={{ restitution: 0.5 }}
          >
            <group position={[0, 0, -10]}>
              <Mouse />
              <Borders />
              <InstancedSpheres />
            </group>
          </Physics>
        </Suspense>
      </Canvas>
    </Suspense>
  );
}
