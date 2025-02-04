import { create } from "zustand";
import { Autocomplete } from "../interface";

export const useAutocompleteStore = create<AutocompleteStore>((set) => ({
  searchTerm: "",
  suggestions: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSuggestions: (suggestions) => set({ suggestions }),
  fetchSuggestions: (term) => {
    const allSuggestions = [
      "Apple",
      "Banana",
      "Orange",
      "Grape",
      "Watermelon",
      "Pineapple",
      "Peach",
      "Plum",
      "Cherry",
      "Mango",
    ];
    const filteredSuggestions = allSuggestions.filter((item) =>
        item.toLowerCase().includes(term.toLowerCase())
      );
      set({ suggestions: filteredSuggestions });
  },
}));
