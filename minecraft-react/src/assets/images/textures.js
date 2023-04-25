import {
  dirtImg, glassImg, grassImg, logImg, woodImg
} from './images';

import { NearestFilter, RepeatWrapping, TextureLoader } from 'three';

const groundTexture = new TextureLoader().load(grassImg);
groundTexture.wrapS = groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;

const grassTexture = new TextureLoader().load(grassImg);
grassTexture.magFilter = NearestFilter;

const dirtTexture = new TextureLoader().load(dirtImg);
dirtTexture.magFilter = NearestFilter;

const logTexture = new TextureLoader().load(logImg);
logTexture.magFilter = NearestFilter;

const glassTexture = new TextureLoader().load(glassImg);
glassTexture.magFilter = NearestFilter;

const woodTexture = new TextureLoader().load(woodImg);
woodTexture.magFilter = NearestFilter;

export {
  dirtTexture,
  glassTexture,
  grassTexture,
  groundTexture,
  logTexture,
  woodTexture,
};
