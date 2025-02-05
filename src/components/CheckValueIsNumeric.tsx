import React, { useEffect } from 'react';
import BtnPrimary from './BtnPrimary';
import { useNavigate } from 'react-router-dom';
import { useCheckboxNumeric } from '../store/useCheckboxNumeric';
import { NUMERIC_MESSAGE } from '../constants/checkboxnumericdata';
import { NON_NUMERIC_MESSAGE } from './../constants/checkboxnumericdata';

const CheckValueIsNumeric:React.FC = () => {
    const { value, isNumeric, setValue, checkIfNumeric} = useCheckboxNumeric();
    useEffect(() => {
        checkIfNumeric(); // Check if the value is numeric whenever it changes
      }, [value, checkIfNumeric]);


      const navigate = useNavigate();
      const handleClick  =() => {
            navigate("/")
      }
  return (
    <>
     <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
       <div className="check-input-container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} // Update value in store
        placeholder="Enter a value"
      />
      <button onClick={checkIfNumeric}>Check if Numeric</button>
      <div>
        {isNumeric ? NUMERIC_MESSAGE : NON_NUMERIC_MESSAGE}
      </div>
    </div>
    </>
  );
}

export default CheckValueIsNumeric;
