import { create } from "zustand";
import { BgState } from "../interface";

export const useBeamStore = create((set) => ({
    beams: [],
    addBeam: (beam) => set((state) => ({ beams: [...state.beams, beam] })),
    removeBeam: (id) =>
      set((state) => ({
        beams: state.beams.filter((beam) => beam.id !== id),
      })),
}))