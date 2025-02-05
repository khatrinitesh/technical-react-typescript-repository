import React, { useEffect, useState } from 'react';
import './GlowingStars.css';

const GlowingStars:React.FC = () => {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // Update screen width when window size changes
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Generate random values for star positions and colors
  const generateStars = (density: number) => {
    const stars = [];
    for (let i = 0; i < density; i++) {
      const hShadow = Math.random() * screenWidth;
      const vShadow = Math.random() * window.innerHeight;
      stars.push(`${hShadow}px ${vShadow}px #fff`); // Use white color for stars
    }
    return stars.join(', ');
  };
  return (
    <>
      <div className="starry-background">
      <div
        id="stars-group-1"
        style={{ boxShadow: generateStars(200) }}
      ></div>
      <div
        id="stars-group-2"
        style={{ boxShadow: generateStars(200) }}
      ></div>
      <div
        id="stars-group-3"
        style={{ boxShadow: generateStars(200) }}
      ></div>
      <div
        id="stars-group-4"
        style={{ boxShadow: generateStars(200) }}
      ></div>
      <div
        id="stars-group-5"
        style={{ boxShadow: generateStars(200) }}
      ></div>
      <div
        id="stars-group-6"
        style={{ boxShadow: generateStars(200) }}
      ></div>
    </div>
    </>
  );
}

export default GlowingStars;
