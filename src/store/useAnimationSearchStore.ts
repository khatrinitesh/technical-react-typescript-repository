import { create } from "zustand";
import { AnimationSearchStore } from "../interface";


export const useAnimationSearchStore = create<AnimationSearchStore> ((set) => ({
    searchTerm: '',
    isSearching: false,
    setSearchTerm: (term) => set({ searchTerm: term }),
    toggleSearchActive: () => set((state) => ({ isSearching: !state.isSearching })),
}))