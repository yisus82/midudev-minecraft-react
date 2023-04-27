import { useBox } from '@react-three/cannon';
import * as textures from '../assets/images/textures.js';

const Cube = ({ id, position, texture }) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry attach='geometry' />
      <meshStandardMaterial attach='material' map={textures[`${texture}Texture`]} />
    </mesh>
  );
};

export default Cube;
