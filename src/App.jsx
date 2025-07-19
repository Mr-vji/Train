import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Environment, Loader, OrthographicCamera, Scroll, ScrollControls } from "@react-three/drei";
import { UI } from "./components/UI";
import { Cursor } from "./components/Cursor";
// import SketchfabEmbed from "./components/SketchfabEmbed";

function App() {
   return (
      <>
         {/* <SketchfabEmbed /> */}
         <Loader />
         <Canvas
            dpr={[1, 1.5]}
            shadows
            className="w-screen h-screen"
            camera={{ position: [-15, 15, 18], fov: 35 }}
            gl={{ alpha: false }}
         >
            <fog attach="fog" args={["#17171b", 30, 40]} />
            <color attach="background" args={["#17171b"]} />
            <Cursor />
            <ScrollControls pages={3} damping={0.75}>
               <Experience />
               <Scroll html></Scroll>
            </ScrollControls>
         </Canvas>
         <UI />
      </>
   );
}

export default App;
