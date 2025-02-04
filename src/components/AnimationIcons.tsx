import React from 'react';
import { useAnimatinIconStore } from '../store/useAnimationIconStore';
import { motion } from 'framer-motion';
import { FaBeer } from 'react-icons/fa';
import HeadTitle from './HeadTitle';
import BtnPrimary from './BtnPrimary';
import { useNavigate } from 'react-router-dom';

const AnimationIcons = () => {
    const {isVisible,toggleVisibility} = useAnimatinIconStore();

    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/')
    }
  
  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
     <HeadTitle>AnimationIcons</HeadTitle>
       <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <FaBeer size={50} />
      </motion.div>

      <button onClick={toggleVisibility}>Toggle Icon</button>
    </>
  );
}

export default AnimationIcons;
 