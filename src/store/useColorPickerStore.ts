import { create } from "zustand";


export const useColorPickerStore = create<ColorPickerState>((set) => ({
    selectedColor:'#000000',
    setColor:((color) => set({selectedColor:color}))
}))