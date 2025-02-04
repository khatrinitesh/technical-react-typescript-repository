import React from 'react';
import { Link } from 'react-router-dom';
import HeadTitle from '../components/HeadTitle';

const List = () => {
  return (
    <>
      <HeadTitle>List of repostories.</HeadTitle>
      <ul className='list-none listBullet gap-[10px] grid'>
        <li>
         <Link className='linkHref' to="accordion">Accordion</Link>
        </li>
        <li>
         <Link className='linkHref' to="alert">Alert button</Link>
        </li>
        <li>
         <Link className='linkHref' to="animationicon">Animation Icons</Link>
        </li>
        <li>
         <Link className='linkHref' to="animationbtn">Animated buttons</Link>
        </li>
        <li>
         <Link className='linkHref' to="animationsearch">Animated Search</Link>
        </li>
        <li>
         <Link className='linkHref' to="arrow">Arrow</Link>
        </li>
        <li>
         <Link className='linkHref' to="autocomplete">Autocomplete</Link>
        </li>
        <li>
         <Link className='linkHref' to="avatar">AvatarImages</Link>
        </li>
        <li>
         <Link className='linkHref' to="bigheader">Big Header</Link>
        </li>
        <li>
         <Link className='linkHref' to="blackwhiteimage">Black and White Image</Link>
        </li>
        <li>
         <Link className='linkHref' to="changebgcolor">Change Background Color</Link>
        </li>
        <li>
         <Link className='linkHref' to="changebgscroll">Change Background Scroll Color</Link>
        </li>
      </ul>
    </>
  );
}

export default List;
