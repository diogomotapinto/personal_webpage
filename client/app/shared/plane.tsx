import { usePlane } from "@react-three/cannon";

export function Plane({ ...props }) {
  usePlane(() => ({ ...props }));
  return null;
}
