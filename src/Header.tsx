import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import ReorderIcon from '@material-ui/icons/Reorder';
import { Avatar } from '@material-ui/core';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <img
        src='http://www.freelogovectors.net/wp-content/uploads/2016/12/airbnb_logo.png'
        alt=''
      />
      <div className='header__right'>
        <p>Become a host</p>
        <LanguageIcon />
        <div className='header__user'>
          <ReorderIcon />
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
