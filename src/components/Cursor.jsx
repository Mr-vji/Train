import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export const Cursor = () => {
   const lightRef = useRef();
   const tmpVec = new THREE.Vector3(); // Temporary vector for lerp target
   const viewport = useThree((state) => state.viewport);

   useFrame(({ pointer }, delta) => {
      if (lightRef.current) {
         // Calculate target position based on pointer and viewport
         tmpVec.set(
            (pointer.x * viewport.width) / 2,
            (pointer.y * viewport.height) / 2,
            1 // fixed z
         );

         // Smoothly interpolate light position towards target
         lightRef.current.position.lerp(tmpVec, delta * 12);
      }
   });

   return <pointLight ref={lightRef} color="blue" intensity={5} distance={0} decay={2} />;
};
