import React, { useState } from "react";
import { useChatMsgStore } from "../store/useChatMsgStore";
import { DEFAULT_USER, USERS } from "../constants/chatdata";
import ChatMsg from "./ChatMsg";

const ChatWindow: React.FC = () => {
  const { messages, addMessage } = useChatMsgStore(); // Use Zustand store to get messages and addMessage
  const [input, setInput] = useState<string>(""); // Local state for input field
  const [user, setUser] = useState<string>(DEFAULT_USER); // User state

  const handleSendMessage = () => {
    if (input.trim()) {
      addMessage(user, input); // Add new message to store
      setInput(""); // Clear input field
    }
  };
  return (
    <>
      <div className="chat-window">
        <div className="user-select">
          <label htmlFor="user">Choose a user:</label>
          <select
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)} // Change the user
          >
            {USERS.map((username) => (
              <option key={username} value={username}>
                {username}
              </option>
            ))}
          </select>
        </div>

        <div className="messages">
          {messages.map((msg) => (
            <ChatMsg
              key={msg.id}
              user={msg.user}
              content={msg.content}
              timestamp={msg.timestamp}
            />
          ))}
        </div>

        <div className="input-container">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)} // Update input state
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
