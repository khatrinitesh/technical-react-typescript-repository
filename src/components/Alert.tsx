import React from 'react';
import { UseAlertStore } from '../store/useAlertStore';
import { motion } from 'framer-motion';
import './Alert.css';

const Alert:React.FC = () => {
    const {isAlertOpen,alertMsg,hideAlert,showAlert} = UseAlertStore();
  return (
    <>
     <button
        onClick={() => showAlert('This is a success alert!')}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px',
        }}
      >
        Show Success Alert
      </button>

      <button
        onClick={() => showAlert('This is an error alert!')}
        style={{
          backgroundColor: '#f44336',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px',
        }}
      >
        Show Error Alert
      </button>

      <button
        onClick={() => showAlert('This is an info alert!')}
        style={{
          backgroundColor: '#2196F3',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '10px',
        }}
      >
        Show Info Alert
      </button>

      <motion.div
      className="alert"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isAlertOpen ? 1 : 0, y: isAlertOpen ? 0 : -50 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '15px',
        borderRadius: '5px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
      }}
    >
      <p>{alertMsg}</p>
      <button
        onClick={hideAlert}
        style={{
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '3px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Close
      </button>
    </motion.div> 
    </>
  );
}

export default Alert;
