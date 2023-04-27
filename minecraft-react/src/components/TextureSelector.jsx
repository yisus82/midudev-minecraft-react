import { useEffect, useState } from 'react';
import * as images from '../assets/images/images.js';
import { useKeyboard } from '../hooks/useKeyboard.js';
import { useStore } from '../hooks/useStore.js';

export const TextureSelector = () => {
  const [visible, setVisible] = useState(false);
  const [texture, setTexture] = useStore(state => [state.texture, state.setTexture]);
  const { selectDirt, selectGlass, selectGrass, selectLog, selectWood } = useKeyboard();

  useEffect(() => {
    if (!selectDirt && !selectGlass && !selectGrass && !selectWood && !selectLog) {
      return;
    }

    setTimeout(() => {
      setVisible(false);
    }, 2000);

    setVisible(true);
  }, [selectDirt, selectGrass, selectGlass, selectWood, selectLog]);

  useEffect(() => {
    const options = {
      dirt: selectDirt,
      glass: selectGlass,
      grass: selectGrass,
      log: selectLog,
      wood: selectWood,
    };

    const selectedOption = Object.entries(options).find(([_key, value]) => value === true);
    if (selectedOption) {
      setTexture(selectedOption[0]);
    }
  }, [selectDirt, selectGrass, selectGlass, selectWood, selectLog]);

  return (
    visible && (
      <div className='texture-selector'>
        {Object.entries(images).map(([imgKey, img]) => {
          return (
            <img
              className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
              key={imgKey}
              src={img}
              alt={`${imgKey} texture`}
            />
          );
        })}
      </div>
    )
  );
};
