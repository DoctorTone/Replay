import { useGLTF } from "@react-three/drei";

const Pitch = () => {
  const { scene } = useGLTF("./models/pitch.glb");

  return <primitive object={scene} />;
};

export default Pitch;
