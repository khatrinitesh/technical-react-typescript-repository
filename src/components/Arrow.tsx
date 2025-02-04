import React from 'react';
import BtnPrimary from './BtnPrimary';
import { useNavigate } from 'react-router-dom';
import { useArrowStore } from './../store/useArrowStore';

const Arrow:React.FC = () => {
    const {direction,setDirection} = useArrowStore();
    const navigate  = useNavigate();
    const handleClick =() => {
        navigate("/")
    }
  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
      <div className="flex flex-col items-center space-y-4">
      {/* Top Arrow */}
      <button
        onClick={() => setDirection('top')}
        className="p-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300"
      >
        ↑
      </button>

      {/* Middle Text - Display Current Direction */}
      <div className="text-xl font-semibold">{`Current Direction: ${direction}`}</div>

      <div className="flex space-x-4">
        {/* Left Arrow */}
        <button
          onClick={() => setDirection('left')}
          className="p-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setDirection('right')}
          className="p-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300"
        >
          →
        </button>
      </div>

      {/* Bottom Arrow */}
      <button
        onClick={() => setDirection('bottom')}
        className="p-4 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300"
      >
        ↓
      </button>
    </div> 
    </>
  );
}

export default Arrow;
