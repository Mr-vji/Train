import { Environment, OrthographicCamera } from "@react-three/drei";

export const Effects = () => {
   return (
      <>
         <ambientLight intensity={0.25} />
         <directionalLight
            castShadow
            intensity={2}
            position={[10, 6, 6]}
            shadow-mapSize={[1024, 1024]}
         >
            <OrthographicCamera
               attach="shadow-camera"
               left={-20}
               right={20}
               top={20}
               bottom={-20}
            />
         </directionalLight>
         <Environment preset="dawn" />
      </>
   );
};
