import React from 'react';
import './HeadTitle.css';

const HeadTitle:React.FC = ({headTitleStyle,children}) => {
  return (
    <>
      <h2 className={`${headTitleStyle} headTitle`}>{children}</h2>
    </>
  );
}

export default HeadTitle;
