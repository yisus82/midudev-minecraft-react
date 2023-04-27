import { useBox } from '@react-three/cannon';
import { useState } from 'react';
import * as textures from '../assets/images/textures.js';
import { useStore } from '../hooks/useStore.js';

const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [addCube] = useStore(state => [state.addCube]);
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }));

  const handlePointerMove = event => {
    event.stopPropagation();
    setIsHovered(true);
  };

  const handlePointerOut = event => {
    event.stopPropagation();
    setIsHovered(false);
  };

  const handleClick = event => {
    event.stopPropagation();
    const clickedFace = Math.floor(event.faceIndex / 2);
    const { x, y, z } = ref.current.position;
    if (clickedFace === 0) {
      addCube(x + 1, y, z);
      return;
    } else if (clickedFace === 1) {
      addCube(x - 1, y, z);
      return;
    } else if (clickedFace === 2) {
      addCube(x, y + 1, z);
      return;
    } else if (clickedFace === 3) {
      addCube(x, y - 1, z);
      return;
    } else if (clickedFace === 4) {
      addCube(x, y, z + 1);
      return;
    } else if (clickedFace === 5) {
      addCube(x, y, z - 1);
      return;
    }
  };

  return (
    <mesh
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial
        color={isHovered ? 'grey' : 'white'}
        map={textures[`${texture}Texture`]}
        transparent={true}
        opacity={texture === 'glass' ? 0.6 : 1}
        attach='material'
      />
    </mesh>
  );
};

export default Cube;
