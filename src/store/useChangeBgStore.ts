import { create } from "zustand";
import { ChangeBgStore } from "../interface";


export const useChangeBgStore = create<ChangeBgStore>((set) => ({
    backgroundColor:'#ff0000', // Default color
    setBackgroundColor:(color:string) => set({backgroundColor:color})
}))