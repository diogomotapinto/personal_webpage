import { useSphere } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function InstancedSpheres({ count = 100 }) {
  const texture = useTexture("/cross.jpg");

  const { viewport } = useThree();
  const [ref] = useSphere((index) => ({
    mass: 100,
    //  position: [4 - Math.random() * 8, viewport.height, 0, 0],
    position: [
      4 - Math.random() * 8,
      Math.floor(Math.random() * viewport.height) + 1,
      Math.floor(Math.random() * 50) + 1,
    ],
    args: [1.2],
  }));
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[null, null, count]}
    >
      <sphereBufferGeometry args={[1.2, 32, 32]} />
      <meshLambertMaterial color="#0ea28a" map={texture} />
    </instancedMesh>
  );
}
