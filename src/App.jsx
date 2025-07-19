import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Environment, OrthographicCamera } from "@react-three/drei";
import { UI } from "./components/UI";
import { Cursor } from "./components/Cursor";
// import SketchfabEmbed from "./components/SketchfabEmbed";

function App() {
   return (
      <>
         {/* <SketchfabEmbed /> */}
         <Canvas
            dpr={[1, 1.5]}
            shadows
            // camera={{ position: [-0, 15, 18], fov: 35 }}
            camera={{ position: [-15, 15, 18], fov: 35 }}
            gl={{ alpha: false }}
         >
            <fog attach="fog" args={["#17171b", 30, 40]} />
            <color attach="background" args={["#17171b"]} />
            <Experience />
            <Cursor />
         </Canvas>
         <UI />
      </>
   );
}

export default App;
