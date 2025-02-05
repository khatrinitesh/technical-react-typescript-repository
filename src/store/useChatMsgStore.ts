import { create } from "zustand";
import { ChatMsgStore } from "../interface";


export const useChatMsgStore = create<ChatMsgStore>((set) => ({
    messages:[],
    addMessage: (user, content) =>
        set((state) => {
          const newMessage: Message = {
            id: `${Date.now()}`, // Generate a unique ID for each message
            user,
            content,
            timestamp: new Date().toLocaleTimeString(),
          };
          return { messages: [...state.messages, newMessage] }; // Add the new message
        }),
}))