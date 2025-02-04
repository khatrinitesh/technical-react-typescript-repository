import React, { useEffect } from 'react';
import { useBackgroundBgScroll } from '../store/useChangeBgScroll';

const ChangeBgScroll:React.FC = () => {
    const {background, setBackground } = useBackgroundBgScroll();

    useEffect(() => {
        // Function to change background color on scroll
        const handleScroll = () => {
          const scrollY = window.scrollY;
          let color = 'white';  // Default color
    
          // Change background color based on scroll position
          if (scrollY < 200) {
            color = 'white';
          } else if (scrollY >= 200 && scrollY < 400) {
            color = 'lightblue';
          } else if (scrollY >= 400 && scrollY < 600) {
            color = 'lightgreen';
          } else if (scrollY >= 600) {
            color = 'lightcoral';
          }
    
          setBackground(color);
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
      }, [setBackground]);
  return (
    <>
       <div
      style={{
        height: '2000px',  // Enough height to allow scrolling
        backgroundColor: background,
        transition: 'background-color 0.5s ease',  // Smooth transition for background color change
      }}
    >
      <h1 style={{ textAlign: 'center', paddingTop: '100px' }}>
        Scroll to change the background color
      </h1>
    </div>
    </>
  );
}

export default ChangeBgScroll;
