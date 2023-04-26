import { useSphere } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';
import { useKeyboard } from '../hooks/useKeyboard';

const CHARACTER_SPEED = 4.0;
const CHARACTER_JUMP_FORCE = 4.0;

const Player = () => {
  const { moveForward, moveBackward, moveLeft, moveRight, jump } = useKeyboard();
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 0.5, 0],
  }));

  const position = useRef([0, 0.5, 0]);
  useEffect(() => {
    api.position.subscribe(p => (position.current = p));
  }, [api.position]);

  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe(v => (velocity.current = v));
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(
      new Vector3(position.current[0], position.current[1], position.current[2])
    );

    const direction = new Vector3();
    const frontVector = new Vector3(0, 0, (moveForward ? -1 : 0) + (moveBackward ? 1 : 0));
    const sideVector = new Vector3((moveLeft ? 1 : 0) + (moveRight ? -1 : 0), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(CHARACTER_SPEED)
      .applyEuler(camera.rotation);
    api.velocity.set(direction.x, velocity.current[1], direction.z);

    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
      api.velocity.set(velocity.current[0], CHARACTER_JUMP_FORCE, velocity.current[2]);
    }
  });

  return <mesh ref={ref} />;
};

export default Player;
