import { create } from "zustand";
import { PinState } from "../interface";

export const usePinStore = create<PinState>((set) => ({
    rotationX:0,
    rotationY:0,
    setRotation:(x,y) => set({rotationX:x,rotationY:y})
})) 