import React from 'react';
import './AnimatedBtn.css';
import { useAnimatedBtnStore } from '../store/useAnimatedBtnStore';
import BtnPrimary from './BtnPrimary';
import { useNavigate } from 'react-router-dom';

const AnimatedBtn:React.FC = () => {
    const {isAnimated,toggleAnimation} = useAnimatedBtnStore();

    // Animated button styles (using conditional classes)
    const buttonClass = isAnimated ? 'animate-pulse bg-blue-500' : 'bg-gray-500';
    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/')
    }
  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
    <br/>
      <button
      onClick={toggleAnimation}
      className={`p-4 text-white rounded-md transition-all duration-300 ${buttonClass}`}
    >
      {isAnimated ? 'Animating...' : 'Click to Animate'}
    </button>
    </>
  );
}

export default AnimatedBtn;
