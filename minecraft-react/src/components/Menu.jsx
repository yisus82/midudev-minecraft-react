import { useEffect } from 'react';
import { useKeyboard } from '../hooks/useKeyboard';
import { useStore } from '../hooks/useStore';

export const Menu = () => {
  const { save, load, clear } = useKeyboard();
  const [saveCubes, loadCubes, clearCubes] = useStore(state => [
    state.saveCubes,
    state.loadCubes,
    state.clearCubes,
  ]);

  useEffect(() => {
    if (save) {
      saveCubes();
    }

    if (load) {
      loadCubes();
    }

    if (clear) {
      clearCubes();
    }
  }, [save, load, clear, saveCubes, loadCubes, clearCubes]);

  return (
    <div className='menu'>
      <button onClick={saveCubes}>Save (J)</button>
      <button onClick={loadCubes}>Load (K)</button>
      <button onClick={clearCubes}>Clear (L)</button>
    </div>
  );
};
