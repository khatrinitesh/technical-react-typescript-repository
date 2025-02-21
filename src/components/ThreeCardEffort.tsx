import React from 'react';
import { motion } from 'framer-motion';
import { CardProps } from '../interface';
import { cardEffect } from '../constants/card3ddata';
import  "./ThreeCardEffort.css"
import { useNavigate } from 'react-router-dom';
import BtnPrimary from './BtnPrimary';

const ThreeCardEffort:React.FC<CardProps> = ({title,content,imageUrl,className}) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
      <motion.div
      className={`card ${className}`}
      style={{
        width: '300px',
        height: '400px',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        transformStyle: 'preserve-3d',
        position: 'relative',
      }}
      whileHover={{
        scale: cardEffect.scale,
        rotateX: -cardEffect.rotationAmount,
        rotateY: cardEffect.rotationAmount,
        transition: { type: 'spring', stiffness: 400, damping: 10 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { type: 'spring', stiffness: 400, damping: 10 },
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="card-inner"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '10px',
        }}
      ></div>
      <div
        className="card-content"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '10px',
        }}
      >
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </motion.div>
    </>
  );
}

export default ThreeCardEffort;
