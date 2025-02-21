import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from './BtnPrimary';
import { useCanvasRevealStore } from './../store/useCanvasRevalStore';
import './CanvasReveal.css';

const CanvasReveal = () => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { revealWidth, revealHeight, setRevealDimensions, resetReveal } = useCanvasRevealStore();
    const canvasSize = { width: 800, height: 600 }; // Define canvas size (example)
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
  
      if (ctx && canvas) {
        // Set initial canvas state (background, etc.)
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        // Draw some content on the canvas (this could be an image, text, etc.)
        ctx.fillStyle = 'white';
        ctx.font = '40px Arial';
        ctx.fillText('Canvas Content', 100, 100);
      }
    }, []);
  
    // Handle mousemove to reveal on canvas
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (canvas) {
        const { left, top } = canvas.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
  
        // Set the reveal dimensions based on mouse position
        setRevealDimensions(x, y);
      }
    };
  
    // Reset the reveal effect on mouse leave
    const handleMouseLeave = () => {
      resetReveal();
    };
  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
       <div
      style={{
        position: 'relative',
        display: 'inline-block',
        width: `${canvasSize.width}px`,
        height: `${canvasSize.height}px`,
      }}
    >
      {/* Canvas with the reveal effect */}
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'absolute', zIndex: 1 }}
      />
      
      {/* Motion element to simulate reveal effect */}
      <motion.div
        style={{
          position: 'absolute',
          width: `${revealWidth}px`,
          height: `${revealHeight}px`,
          backgroundColor: 'black',
          pointerEvents: 'none',
        }}
        initial={{ opacity: 1 }}
        animate={{
          opacity: revealWidth > 0 && revealHeight > 0 ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
    </>
  );
}

export default CanvasReveal;
