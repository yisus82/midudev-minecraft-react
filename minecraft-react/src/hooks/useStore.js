import { nanoid } from "nanoid";
import { create } from "zustand";

export const useStore = create((set) => ({
  texture: 'dirt',
  setTexture: (texture) => set({ texture }),
  cubes: [],
  addCube: (x, y, z) => {
    set(state => ({
      cubes: [...state.cubes, {
        id: nanoid(),
        texture: state.texture,
        pos: [x, y, z]
      }]
    }));
  },
  removeCube: (id) => {
    set(state => ({
      cubes: state.cubes.filter(cube => cube.id !== id)
    }));
  },
  saveCubes: () => {
    const cubes = JSON.stringify(useStore.getState().cubes);
    localStorage.setItem('cubes', cubes);
  },
  loadCubes: () => {
    const cubes = localStorage.getItem('cubes');
    if (cubes) {
      set({ cubes: JSON.parse(cubes) });
    }
  },
  clearCubes: () => {
    localStorage.removeItem('cubes');
    set({ cubes: [] });
  }
}));