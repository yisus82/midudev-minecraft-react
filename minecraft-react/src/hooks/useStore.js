import { create } from "zustand";

export const useStore = create((set) => ({
  texture: 'dirt',
  cubes: [],
}));