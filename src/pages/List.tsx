import React from 'react';
import { Link } from 'react-router-dom';
import HeadTitle from '../components/HeadTitle';

const List = () => {
  return (
    <>
      <HeadTitle>List of repostories.</HeadTitle>
      <ul className='list-none listBullet gap-[10px] grid'>
        <li>
         <Link className='linkHref' to="/accordion">Accordion</Link>
        </li>
        <li>
         <Link className='linkHref' to="/alert">Alert button</Link>
        </li>
        <li>
         <Link className='linkHref' to="/animationicon">Animation Icons</Link>
        </li>
        <li>
         <Link className='linkHref' to="/animationbtn">Animated buttons</Link>
        </li>
        <li>
         <Link className='linkHref' to="/animationsearch">Animated Search</Link>
        </li>
        <li>
         <Link className='linkHref' to="/arrow">Arrow</Link>
        </li>
        <li>
         <Link className='linkHref' to="/autocomplete">Autocomplete</Link>
        </li>
        <li>
         <Link className='linkHref' to="/avatar">AvatarImages</Link>
        </li>
        <li>
         <Link className='linkHref' to="/bigheader">Big Header</Link>
        </li>
        <li>
         <Link className='linkHref' to="/blackwhiteimage">Black and White Image</Link>
        </li>
        <li>
         <Link className='linkHref' to="/changebgcolor">Change Background Color</Link>
        </li>
        <li>
         <Link className='linkHref' to="/changebgscroll">Change Background Scroll Color</Link>
        </li>
        <li>
         <Link className='linkHref' to="/preloader">Preloader</Link>
        </li>
        <li>
         <Link className='linkHref' to="/character-counter">Character Counter</Link>
        </li>
        <li>
         <Link className='linkHref' to="/chat-msg">Chat Message</Link>
        </li>
        <li>
         <Link className='linkHref' to="/checkbox">Check Checkbox</Link>
        </li>
        <li>
         <Link className='linkHref' to="/checkboxnumeric">Check Value Numeric</Link>
        </li>
        <li>
         <Link className='linkHref' to="/checkoutform">Checkout Form</Link>
        </li>
        <li>
         <Link className='linkHref' to="/circlemenu">Circle Menu</Link>
        </li>
        <li>
         <Link className='linkHref' to="/glowingstars">Glowing Stars</Link>
        </li>
        <li>
         <Link className='linkHref' to="/3dcard">3D Card Effect</Link>
        </li>
        <li>
         <Link className='linkHref' to="/3dpin">3D Pin</Link>
        </li>
        <li>
         <Link className='linkHref' to="/beams">Background Beams With Collision</Link>
        </li>
        <li>
         <Link className='linkHref' to="/griditem">GridItem</Link>
        </li>
        <li>
         <Link className='linkHref' to="/canvas-reveal">Canvas Reveal</Link>
        </li>
        <li>
         <Link className='linkHref' to="/car-running">Car Running</Link>
        </li>
        <li>
         <Link className='linkHref' to="/color-picker">Color Picker</Link>
        </li>
      </ul>
    </>
  );
}

export default List;
