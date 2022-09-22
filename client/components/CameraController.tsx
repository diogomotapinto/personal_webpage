import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 3;
    controls.maxDistance = 20;
    controls.enableDamping = true;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

export default CameraController;
