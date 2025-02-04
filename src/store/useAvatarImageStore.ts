import { create } from "zustand";
import { AvatarStore } from "../interface";

export const useAvatarImageStore = create<AvatarStore>((set) => ({
    selectedAvatar: '', // Default selected avatar
  avatars: [
    'https://avatar.iran.liara.run/public/4', // Add the path to your avatar images here
    'https://avatar.iran.liara.run/public/3',
    'https://avatar.iran.liara.run/public/2',
    'https://avatar.iran.liara.run/public/1',
  ], // List of avatars (can be URLs or paths to images)
  setSelectedAvatar: (avatar: string) => set({ selectedAvatar: avatar }),
}))