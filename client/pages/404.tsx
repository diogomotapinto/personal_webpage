// @ts-nocheck
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { random } from "maath";
import styles from "../styles/index.module.scss";
import Link from "next/link";

export default function App() {
  return (
    <div
      className="h-screen w-full fixed z-10"
      style={{
        color: "#ddd",
        background: "#12071f",
      }}
    >
      <div
        style={{
          zIndex: 10,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate3d(-50%,-50%,0)",
        }}
      >
        <h1
          className={" font-sans text-4xl font-bold"}
          style={{
            margin: 0,
            padding: 0,

            fontWeight: 500,
            letterSpacing: "-0.05em",
          }}
        >
          Are you lost?
        </h1>
        <h1
          className={styles.textGradient + " font-sans text-4xl font-bold"}
          style={{
            margin: 0,
            padding: 0,
            fontWeight: 500,
            letterSpacing: "-0.05em",
          }}
        >
          <Link href="/"> Go Home</Link>
        </h1>
      </div>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
