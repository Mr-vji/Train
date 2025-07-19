import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export const Cursor = () => {
   const lightRef = useRef();
   const tmpVec = new THREE.Vector3(); // Temporary vector for lerp target
   const viewport = useThree((state) => state.viewport);
   let vec3 = new THREE.Vector3();
   const initialCameraPos = useRef();

   useFrame(({ camera, mouse }) => {
      if (!initialCameraPos.current) {
         // Store initial position once
         initialCameraPos.current = camera.position.clone();
      }

      // Calculate target based on initial position
      vec3.set(
         initialCameraPos.current.x + mouse.x * 0.2 * 8,
         initialCameraPos.current.y + mouse.y * 0.2 * 8,
         initialCameraPos.current.z // keep original z fixed
      );
      camera.position.lerp(vec3, 0.02);
      camera.lookAt(0, 0, 0);
   });

   useFrame(({ pointer }, delta) => {
      if (lightRef.current) {
         // Calculate target position based on pointer and viewport
         tmpVec.set(
            (pointer.x * viewport.width) / 2,
            (pointer.y * viewport.height) / 9,
            1 // fixed z
         );

         // Smoothly interpolate light position towards target
         lightRef.current.position.lerp(tmpVec, delta * 12);
      }
   });

   return <pointLight ref={lightRef} color="blue" intensity={5} distance={0} decay={2} />;
};
