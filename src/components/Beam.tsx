import React, { useEffect } from 'react';
import { useBeamStore } from '../store/useBeamStore';
import { BeamProps } from '../interface';
import { motion } from 'framer-motion';

const Beam:React.FC = ({x, y, width, height, id }) => {

  

  return (
    <>
      <motion.div
      style={{
        position: 'absolute',
        backgroundColor: 'white',
        width: `${width}px`,
        height: `${height}px`,
        left: `${x}px`,
        top: `${y}px`,
      }}
      animate={{
        x: x + 100, // Move beam to the right
        y: y,
      }}
      transition={{ duration: 2 }}
    />
    </>
  );
}

export default Beam;
