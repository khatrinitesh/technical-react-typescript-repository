import React, { useEffect, useState } from 'react';
import { useBeamStore } from '../store/useBeamStore';
import Beam from './../components/Beam';

const BeamPage:React.FC = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  
    const beams = useStore((state) => state.beams);
    const addBeam = useStore((state) => state.addBeam);
    const removeBeam = useStore((state) => state.removeBeam);
  
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    // Example of adding beams with random positions
    useEffect(() => {
      const interval = setInterval(() => {
        const newBeam = {
          id: Date.now(),
          x: Math.random() * screenWidth,
          y: Math.random() * screenHeight,
          width: 10,
          height: 50,
        };
        addBeam(newBeam);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [screenWidth, screenHeight]);
  
    // Handle collision detection
    useEffect(() => {
      beams.forEach((beam) => {
        if (detectCollision(beam, screenWidth, screenHeight)) {
          removeBeam(beam.id);
        }
      });
    }, [beams, screenWidth, screenHeight]);
  
    // Function to detect collision
    const detectCollision = (beam, screenWidth, screenHeight) => {
      return (
        beam.x >= screenWidth || beam.x <= 0 || beam.y >= screenHeight || beam.y <= 0
      );
    };
  
  return (
    <>
      <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#111',
        overflow: 'hidden',
      }}
    >
      {beams.map((beam) => (
        <Beam key={beam.id} {...beam} />
      ))}
    </div>
    </>
  );
}

export default Beam;
