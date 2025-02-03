import { create } from "zustand";
import { AccordionStore } from "../interface";


export const useAccordionStore = create<AccordionStore>((set) => ({
    isOpen:false,
    toggle:() => set((state) => ({isOpen: !state.isOpen})),
}));