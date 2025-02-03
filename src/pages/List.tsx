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
         <Link className='linkHref' to=""></Link>
        </li>
        <li>
         <Link className='linkHref' to=""></Link>
        </li>
      </ul>
    </>
  );
}

export default List;
