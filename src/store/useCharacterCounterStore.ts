import { create } from "zustand";
import { CharacterCounterStore } from "../interface";


export const useCharacterCounterStore = create<CharacterCounterStore>((set) => ({
    text:'',
    charCount:0,
    setText:(text) => set({text}),
    updateCharacterCount:() => set((state) => ({charCount:state.text.length}))
}))