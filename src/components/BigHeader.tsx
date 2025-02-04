import React from 'react';
import { useHeaderStore } from '../store/useHeaderStore';
import { motion } from 'framer-motion';

const BigHeader:React.FC = () => {
    const {title, backgroundColor, setTitle, setBackgroundColor} = useHeaderStore()

     // Animation variants for the header
  const headerVariants = {
    initial: { opacity: 0, y: -100 }, // Start offscreen with low opacity
    animate: { opacity: 1, y: 0, transition: { duration: 1 } }, // Animate to normal position
    exit: { opacity: 0, y: 100, transition: { duration: 0.5 } }, // Exit animation
  };

  // Handle title and background color change on button click
  const changeTitleAndColor = () => {
    const newTitle = title === 'Welcome to My Website' ? 'Enjoy the Experience!' : 'Welcome to My Website';
    const newColor = backgroundColor === '#1e3a8a' ? '#16a085' : '#1e3a8a'; // Toggle colors
    setTitle(newTitle);
    setBackgroundColor(newColor);
  };
  return (
    <>
       <motion.div
      className="w-full py-20 flex justify-center items-center text-center"
      style={{ backgroundColor }}
      variants={headerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div>
        <h1 className="text-5xl font-extrabold text-white mb-6">{title}</h1>
        <button
          onClick={changeTitleAndColor}
          className="px-6 py-3 text-xl font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Change Title & Background
        </button>
      </div>
    </motion.div>
    </>
  );
}

export default BigHeader;
