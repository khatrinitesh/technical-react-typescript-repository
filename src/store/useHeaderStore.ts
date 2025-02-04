import { create } from "zustand";
import { HeaderStore } from "../interface";


export const useHeaderStore = create<HeaderStore>((set) => ({
    title:'welcome to my website',
    backgroundColor:'#1e3a8a',
    setTitle:(title) => set({title}),
    setBackgroundColor:(color) => set({backgroundColor:color})
}))