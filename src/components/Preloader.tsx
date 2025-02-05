import React from "react";
import "./Preloader.css";

const Preloader: React.FC = () => {
  return (
    <>
      <div className="loading-screen">
        <div className="loader"></div>
        <p className="uppercase font-bold tracking-wider">Loading...</p>
      </div>
    </>
  );
};

export default Preloader;
