import { create } from "zustand";
import { ChangeBgScrollStore } from './../interface/index';


export const useBackgroundBgScroll = create<ChangeBgScrollStore>((set) => ({
    background: 'white',  // initial background color
  setBackground: (color) => set({ background: color }),
  }));