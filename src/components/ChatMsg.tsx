import React from 'react';
import { ChatMsgStore } from '../interface';
import { motion } from 'framer-motion';

const ChatMsg:React.FC<ChatMsgStore> = ({user, content, timestamp}) => {
  return (
    <>
      <motion.div
      className="message"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="message-header">
        <strong>{user}</strong> <span>{timestamp}</span>
      </div>
      <p>{content}</p>
    </motion.div>
    </>
  );
}

export default ChatMsg;
