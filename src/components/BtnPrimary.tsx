import React from 'react';
import './BtnPrimary.css';
import { BtnPrimaryProps } from '../interface';

const BtnPrimary:React.FC<BtnPrimaryProps> = ({onClick,btnStyle,children}) => {
  return (
    <>
      <button onClick={onClick} className={`${btnStyle} btnPrimary `}>{children}</button>
    </>
  );
}

export default BtnPrimary;
