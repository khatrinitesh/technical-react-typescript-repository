import React, { useEffect } from "react";
import { useCarRunningStore } from "../store/useCarRunningStore";
import { motion } from 'framer-motion';

const CarRunning = () => {
  const { x, isMoving, toggleCarMovement, updateCarPosition, speed } =
    useCarRunningStore();

  // Update car position every frame if moving
  useEffect(() => {
    if (isMoving) {
      const interval = setInterval(() => {
        updateCarPosition();
      }, 16); // ~60 FPS
      return () => clearInterval(interval);
    }
  }, [isMoving, updateCarPosition]);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Car Component with motion for animation */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "50px", // Adjust the bottom position
            left: `${x}px`,
          }}
          animate={{
            left: `${x}px`,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <div
            style={{
              width: "100px",
              height: "50px",
              backgroundColor: "#ff5733",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Add an icon or image for the car */}
          </div>
        </motion.div>

        {/* Button to start/stop the car */}
        <button
          onClick={toggleCarMovement}
          style={{
            position: "absolute",
            bottom: "20px",
            padding: "10px 20px",
            backgroundColor: "#ff5733",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {isMoving ? "Stop Car" : "Start Car"}
        </button>

        {/* Speed control */}
        <input
          type="range"
          min="1"
          max="10"
          value={speed}
          onChange={(e) =>
            useCarStore.getState().setSpeed(Number(e.target.value))
          }
          style={{
            position: "absolute",
            bottom: "80px",
            width: "200px",
          }}
        />
      </div>
    </>
  );
};

export default CarRunning;
