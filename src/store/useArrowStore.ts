import { create } from "zustand";
import { ArrowState } from "../interface";


export const useArrowStore = create<ArrowState>((set) => ({
    direction:'none',
    setDirection:(direction) => set({direction}) // update direction
}))