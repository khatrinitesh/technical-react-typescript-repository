import { create } from "zustand";


export const UseAlertStore = create((set) => ({
    isAlertOpen:false,
    alertMsg:'',
    showAlert:(message:string) => set({
        isAlertOpen:true,
        alertMsg:message
    }),
    hideAlert:() => set({isAlertOpen:false,alertMsg:''})
}))