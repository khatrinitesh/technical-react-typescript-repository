import React from 'react';
import { useCircleStore } from '../store/useCircleStore';
import { MENU_ITEMS } from '../constants/circledata';
import './CircleMenuMob.css';
import BtnPrimary from './BtnPrimary';
import { useNavigate } from 'react-router-dom';

const CircleMenuMob:React.FC = () => {
    const {isMenuOpen,toggleMenu} = useCircleStore();

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/')
    }
  return (
    <>
    <BtnPrimary onClick={handleClick}>Back</BtnPrimary>
       <div className="circle-menu-container">
      <button onClick={toggleMenu} className="circle-menu-toggle">
        {isMenuOpen ? '❌' : '🔵'}
      </button>

      <div className={`circle-menu ${isMenuOpen ? 'open' : ''}`}>
        {MENU_ITEMS.map((item) => (
          <div key={item.id} className="circle-menu-item">
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default CircleMenuMob;
