import { create } from "zustand";
import { PreloaderStore } from "../interface";


export const usePreloaderStore = create<PreloaderStore> ((set) => ({
    loading:false,
    setLoading:(loading) => set({loading}),
}));