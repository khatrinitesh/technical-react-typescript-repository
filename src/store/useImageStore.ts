import { create } from "zustand";
import { ImageStore } from "../interface";


export const useImageStore = create<ImageStore>((set) => ({
    selectedImage:'',
    images: [
        'https://avatar.iran.liara.run/public/19', // Black and white image paths (or URLs)
        'https://avatar.iran.liara.run/public/20',
        'https://avatar.iran.liara.run/public/21',
        'https://avatar.iran.liara.run/public/22',
      ],
      setSelectedImage: (image: string) => set({ selectedImage: image }), // Update the selected image
}))