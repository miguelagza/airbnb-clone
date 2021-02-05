import React from 'react';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <div className='menu'>
      <div className='menu__title menu__title--active'>
        <p>Places to stay</p>
      </div>
      <div className='menu__title'>
        <p>Experiences</p>
      </div>
      <div className='menu__title'>
        <p>Online Experiences</p>
      </div>
    </div>
  );
};

export default Menu;
