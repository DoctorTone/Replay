import { useGLTF } from "@react-three/drei";

const Scene = () => {
  const { scene } = useGLTF("./models/pitch.glb");

  return <primitive object={scene} />;
};

export default Scene;
