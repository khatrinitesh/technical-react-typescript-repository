import React from 'react';
import { useAnimationSearchStore } from '../store/useAnimationSearchStore';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import HeadTitle from './HeadTitle';
import BtnPrimary from './BtnPrimary';
import { useNavigate } from 'react-router-dom';

const AnimatedSearch:React.FC = () => {

  const { searchTerm, setSearchTerm, isSearching, toggleSearchActive } = useAnimationSearchStore();
  
  // Handle the input field change and search term update
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Trigger the search animation when the input field is focused
  const handleFocus = () => {
    toggleSearchActive();
  };

  // Handle the blur effect for the input
  const handleBlur = () => {
    if (searchTerm === '') {
      toggleSearchActive();
    }
  };

  // Animated classes based on search state
  const searchInputClass = isSearching ? 'border-blue-500 scale-105' : 'border-gray-300';

    const navigate = useNavigate();
    const handleClick = () => {
      navigate('/')
    }
  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
    <HeadTitle>Animated Search</HeadTitle>
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search..."
        className={`w-full p-3 pl-10 text-sm rounded-md border-2 focus:outline-none transition-all duration-300 ease-in-out ${searchInputClass}`}
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        🔍
      </div>
    </div>
    </>
  );
}

export default AnimatedSearch;
