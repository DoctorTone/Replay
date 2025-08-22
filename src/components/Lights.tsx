import { Environment } from "@react-three/drei";

const Lights = () => {
  return (
    <>
      <Environment preset="sunset" />
      <directionalLight intensity={2} position={[10, 10, 5]} />
      <directionalLight intensity={1} position={[-10, 10, 5]} />
      {/* <ambientLight intensity={0.5} /> */}
    </>
  );
};

export default Lights;
