import React, { useEffect } from "react";
import { useCharacterCounterStore } from "../store/useCharacterCounterStore";
import BtnPrimary from "./BtnPrimary";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import './CharacterCounter.css';

const CharacterCounter: React.FC = () => {
  const { text, charCount, setText, updateCharacterCount } =
    useCharacterCounterStore();

  // Update character count whenever text changes
  useEffect(() => {
    updateCharacterCount();
  }, [text, updateCharacterCount]);
  const  navigate = useNavigate();

  const handleClick= () => {
    navigate('/')
  }
  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
      <div className="counter-container">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)} // Update text state in store
          placeholder="Start typing..."
          rows={4}
          cols={50}
        />
        <div className="counter-info">
          <motion.div
            key={charCount} // Using key to trigger animation on change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Character Count: {charCount}</h3>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CharacterCounter;
