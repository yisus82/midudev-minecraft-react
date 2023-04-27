import { useEffect, useState } from "react";

const ACTIONS_KEYBOARD_MAP = {
  KeyW: "moveForward",
  KeyS: "moveBackward",
  KeyA: "moveLeft",
  KeyD: "moveRight",
  Space: "jump",
  Digit1: "selectDirt",
  Digit2: "selectGlass",
  Digit3: "selectGrass",
  Digit4: "selectLog",
  Digit5: "selectWood",
};

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    selectDirt: false,
    selectGlass: false,
    selectGrass: false,
    selectLog: false,
    selectWood: false,
  });

  const handleKeyDown = (event) => {
    const action = ACTIONS_KEYBOARD_MAP[event.code];
    if (action) {
      setActions((actions) => ({ ...actions, [action]: true }));
    }
  };

  const handleKeyUp = (event) => {
    const action = ACTIONS_KEYBOARD_MAP[event.code];
    if (action) {
      setActions((actions) => ({ ...actions, [action]: false }));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return actions;
};