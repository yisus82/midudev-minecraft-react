import { usePlane } from '@react-three/cannon';
import { groundTexture } from '../assets/images/textures';
import { useStore } from '../hooks/useStore';

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));
  const [addCube] = useStore(state => [state.addCube]);

  groundTexture.repeat.set(100, 100);

  const handleClick = event => {
    event.stopPropagation();
    const [x, y, z] = Object.values(event.point).map(n => Math.ceil(n));
    addCube(x, y, z);
  };

  return (
    <mesh ref={ref} onClick={handleClick}>
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={groundTexture} />
    </mesh>
  );
};

export default Ground;
