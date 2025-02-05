import { create } from "zustand";
import { CircleStore } from "../interface";


export const useCircleStore = create<CircleStore>((set) => ({
    isMenuOpen:false,
    toggleMenu:() => set((state) => ({
        isMenuOpen:!state.isMenuOpen
    }))
}))