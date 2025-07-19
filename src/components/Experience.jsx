import React, { useRef } from "react";
import { ScrollControls, Environment, useScroll } from "@react-three/drei";
import { Train } from "./Train";
import { Track } from "./Track";
import { Flor } from "./Flor";
import { Effects } from "./Effects";
import { useFrame } from "@react-three/fiber";

const Trains = () => {
   const scroll = useScroll();

   const train1Ref = useRef();
   const train2Ref = useRef();
   const train3Ref = useRef();
   const train4Ref = useRef();

   const currentZ = useRef(0);

   useFrame((state, delta) => {
      const targetZ = -scroll.offset * 50;

      currentZ.current += (targetZ - currentZ.current) * 0.2;

      if (train1Ref.current) train1Ref.current.position.z = currentZ.current;
      if (train2Ref.current) train2Ref.current.position.z = currentZ.current - 16.5;
      if (train3Ref.current) train3Ref.current.position.z = currentZ.current - 33;
      if (train4Ref.current) train4Ref.current.position.z = currentZ.current - 49.5;
   });

   return (
      <>
         <Train ref={train1Ref} scale={1.29} position={[-4.2, -0.99, 0]} />
         <Train ref={train2Ref} scale={1.29} position={[-4.2, -0.99, -16.5]} />
         <Train ref={train3Ref} scale={1.29} position={[-4.2, -0.99, -33]} />
         <Train ref={train4Ref} scale={1.29} position={[-4.2, -0.99, -49.5]} />{" "}
      </>
   );
};

export const Experience = () => {
   return (
      <>
         <Environment preset="city" />
         <Effects />
         <Track position={[-4.2, -1.2, -15.0]} />
         <Flor />

         <ScrollControls pages={3} damping={0.5}>
            <group position={[0, 0, 30]}>
               <Trains />
            </group>
         </ScrollControls>
      </>
   );
};
