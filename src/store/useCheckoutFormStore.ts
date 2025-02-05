import { create } from "zustand";
import { NumericStore } from "../interface";
import { DEFAULT_FORM_STATE } from "../constants/checkoutformdata";


export const useCheckoutFormStore = create<NumericStore>((set) => ({
    formData: DEFAULT_FORM_STATE,
    setFormData: (field, value) => set((state) => ({
        formData: { ...state.formData, [field]: value },
    })),
    validateForm: () => {
        const { name, email, address } = DEFAULT_FORM_STATE;
        return name.trim() !== '' && email.trim() !== '' && address.trim() !== '';
    },
}))