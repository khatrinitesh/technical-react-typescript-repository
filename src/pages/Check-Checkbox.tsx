import React from "react";
import { useCheckboxStore } from "../store/useCheckbox";
import BtnPrimary from "../components/BtnPrimary";
import { useNavigate } from "react-router-dom";
import { CHECKBOX_LABEL } from "../constants/checkboxdata";

const CheckboxComp: React.FC = () => {
  const { isChecked, toggleCheckbox } = useCheckboxStore();

  const navigate  = useNavigate();

  const handleClick = () => {
    navigate("/")
  }
  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={isChecked} // Bind checkbox state to Zustand store
          onChange={toggleCheckbox} // Toggle checkbox state on change
        />
        <label>{CHECKBOX_LABEL}</label>
        <div>
          {isChecked ? (
            <span>Checkbox is checked</span>
          ) : (
            <span>Checkbox is unchecked</span>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckboxComp;
