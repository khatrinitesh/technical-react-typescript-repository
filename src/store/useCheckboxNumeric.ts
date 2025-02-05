import { create } from "zustand";
import { CheckIsNumericStore } from "../interface";


export const useCheckboxNumeric = create<CheckIsNumericStore>((set) => ({
    value: '', // Initial input value
    isNumeric: false, // Initial state of the numeric check
    setValue: (value) => set({ value }), // Update the value in the store
    checkIfNumeric: () => set((state) => {
        const isNumeric = !isNaN(Number(state.value)); // Check if value is numeric
        return { isNumeric };
    }),
}))