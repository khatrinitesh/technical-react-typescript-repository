import { create } from "zustand";
import { RevealState } from "../interface";

export const useCanvasRevealStore = create<RevealState>((set) => ({
    revealWidth: 0,
    revealHeight: 0,
    setRevealDimensions: (width: number, height: number) => set({ 
        revealWidth: width, 
        revealHeight: height 
    }),
    resetReveal: () => set({ revealWidth: 0, revealHeight: 0 }),
  }));
  