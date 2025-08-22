import { Canvas } from "@react-three/fiber";
import { Box, Stage, OrbitControls } from "@react-three/drei";
import { SCENE } from "./state/Config";
import DaySky from "./components/DaySky";
import Scene from "./components/Scene";
import Lights from "./components/Lights";

function App() {
  return (
    <>
      <Canvas camera={{ position: SCENE.CAMERA_POSITION }}>
        <DaySky />
        <Lights />
        <Scene />
        <OrbitControls
          makeDefault
          enablePan={false}
          enableRotate={true}
          enableDamping={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </>
  );
}

export default App;
