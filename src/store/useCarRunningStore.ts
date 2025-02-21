import { create } from "zustand";
import { CarState } from "../interface";


export const useCarRunningStore = create<CarState>((set) => ({
    x: 0,  // Initial horizontal position of the car
    isMoving: false,  // Car is not moving initially
    speed: 2,  // Car speed (2px per frame)
    toggleCarMovement: () => set((state) => ({ isMoving: !state.isMoving })),
    updateCarPosition: () =>
      set((state) => {
        if (state.isMoving) {
          return { x: state.x + state.speed };
        }
        return state;
      }),
    
    setSpeed: (speed: number) => set({ speed }),
  }));