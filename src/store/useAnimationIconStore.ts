import { create } from "zustand";
import { AnimateIconStore } from "../interface";


export const useAnimatinIconStore = create<AnimateIconStoree>((set) => ({
    isVisible:false,
    toggleVisibility:() => set((state) => ({isVisible:!state.isVisible}))
}))