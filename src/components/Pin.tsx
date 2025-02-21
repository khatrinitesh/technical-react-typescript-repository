import React, { useEffect } from "react";
import { PinState } from "../interface";
import { usePinStore } from "../store/usePinStore";
import { motion } from 'framer-motion';
import  "./Pin.css";
import BtnPrimary from "./BtnPrimary";
import { useNavigate } from "react-router-dom";

const ThreeDPin: React.FC = () => {
  const { rotationX, rotationY, setRotation } = usePinStore();

  // Handle mouse movement to update rotation
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const x = (clientY / window.innerHeight - 0.5) * 30; // rotationX limits
    const y = (clientX / window.innerWidth - 0.5) * 30; // rotationY limits
    setRotation(x, y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [setRotation]);

  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
  }
  return(
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
     <motion.div
      className="pin"
      style={{
        width: '150px',
        height: '150px',
        backgroundColor: 'rgb(255, 0, 0)',
        borderRadius: '50%',
        position: 'relative',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
      }}
      animate={{
        rotateX: rotationX,
        rotateY: rotationY,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    />
    </>
  )
};

export default ThreeDPin;
