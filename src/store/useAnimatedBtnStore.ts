import { create } from "zustand";
import { AnimatedBtnStore } from "../interface";

export const useAnimatedBtnStore = create<AnimatedBtnStore> ((set) => ({
    isAnimated:false,
    toggleAnimation:() => set((state) => ({isAnimated:!state.isAnimated}))
}))