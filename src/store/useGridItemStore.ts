import { create } from "zustand";
import { GridItemProps } from "../interface";

export const useGridItemStore = create<GridItemProps>((set) => ({
    items: [],
  addItem: (item: GridItem) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id: string) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),
  updateItem: (id: string, updatedItem: GridItem) => set((state) => ({
    items: state.items.map((item) => (item.id === id ? updatedItem : item)),
  })),
}))