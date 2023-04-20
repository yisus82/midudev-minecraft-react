import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const App = () => {
  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={0.5} />
    </Canvas>
  );
};

export default App;
