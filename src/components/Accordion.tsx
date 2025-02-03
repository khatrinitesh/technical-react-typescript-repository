import React, { useState } from "react";
// store
import { useAccordionStore } from "../store/useAccordionStore";
// library
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Arrow icons
// constants
import { accordionData } from "../constants/accordiondata";
import HeadTitle from './HeadTitle';
import { useNavigate } from "react-router-dom";
import BtnPrimary from "./BtnPrimary";
import './Accordion.css';

const Accordion: React.FC = () => {
  const { isOpen, toggle } = useAccordionStore();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the currently open accordion item
    } else {
      setActiveIndex(index); // Open the clicked accordion item
    }
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
      <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
      <div className="accordion">
        <HeadTitle>Accordion</HeadTitle>
        {accordionData.map((item, index) => (
          <div key={index} className={activeIndex === index ? "accordion-item active" : "accordion-item"}>
            <div
              onClick={() => handleToggle(index)}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>{item.title}</span>
              {activeIndex === index ? (
                <FaChevronUp style={{ marginLeft: "10px" }} />
              ) : (
                <FaChevronDown style={{ marginLeft: "10px" }} />
              )}
            </div>

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: activeIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden", marginTop: "10px" }}
            >
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
