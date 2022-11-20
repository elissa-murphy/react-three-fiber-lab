import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import { useSpring, animated } from "@react-spring/three";
import "./three.css";

export default function ThreeTest() {
  const [selectedBoxPos, setSelectedBoxPosition] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const { stageRotation } = useSpring({ stageRotation: -selectedBoxPos.x });

  return (
    <div id="threeContent">
      <h1>React Three Fiber Lab | Elissa Murphy</h1>
      <Canvas>
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        {/* Light from Above */}
        <pointLight position={[-8, -2, -2]} />

        {/* animated. makes properties eligble for animation, we need access to the position  */}
        <animated.group rotation-y={stageRotation}>
          <Box position={[1.2, 1, 0]} setBoxSelected={setSelectedBoxPosition} />
          <Box position={[-1, 1, 0]} setBoxSelected={setSelectedBoxPosition} />

          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1, 0]}
            scale={[200, 20, 20]}
          >
            <planeGeometry />
            <meshStandardMaterial color={"blue"} />
          </mesh>
        </animated.group>
      </Canvas>
    </div>
  );
}
