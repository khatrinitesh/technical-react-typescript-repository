import React from 'react';
import { useChangeBgStore } from '../store/useChangeBgStore';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from './BtnPrimary';

const ChangeBgColor:React.FC = () => {
    const {backgroundColor} = useChangeBgStore();
    const navigate = useNavigate();

    const handleClick  =() => {
        navigate("/")
    }
  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
    <br />
    <br />
     <ColorDropdown/>
     <motion.div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'background-color 0.5s ease',
        }}
        animate={{ backgroundColor }}
        initial={{ backgroundColor: '#ffffff' }}
      >
        <h1 style={{ color: 'white' }}>Welcome to the Color Changer!</h1>
      </motion.div>
    </>
  );
}

export default ChangeBgColor;

const ColorDropdown: React.FC = () => {
    const { setBackgroundColor } = useChangeBgStore();
  
    const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setBackgroundColor(event.target.value);
    };
  
    return (
      <select onChange={handleColorChange}>
        <option value="#ffffff">White</option>
        <option value="#f44336">Red</option>
        <option value="#4caf50">Green</option>
        <option value="#2196f3">Blue</option>
        <option value="#ff9800">Orange</option>
      </select>
    );
  };
