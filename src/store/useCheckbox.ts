import { create } from "zustand";
import { CheckboxStore } from "../interface";


export const useCheckboxStore = create<CheckboxStore>((set) => ({
    isChecked:true,
    toggleCheckbox:() => set((state) => ({
        isChecked:!state.isChecked
    }))
}))