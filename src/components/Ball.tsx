import { useGLTF } from "@react-three/drei";

const Ball = () => {
  const { scene } = useGLTF("./models/football.glb");

  return <primitive position-y={2.4} object={scene} />;
};

export default Ball;
