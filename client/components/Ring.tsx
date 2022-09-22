import React, { useEffect, useRef, useState } from "react";

function Ring(props: any) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh}>
      <torusGeometry args={[1, 0.1, 16, 100]} />
      <meshStandardMaterial color={"orange"} metalness={0} roughness={0} />
    </mesh>
  );
}

export default Ring;
