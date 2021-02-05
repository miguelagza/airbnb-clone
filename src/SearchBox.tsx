import React from 'react';
import './SearchBox.css';
import SearchIcon from '@material-ui/icons/Search';

const SearchBox: React.FC = () => {
  return (
    <div className='searchBox'>
      <div className='searchBox__sections'>
        <div className='searchBox__section'>
          <h4>Location</h4>
          <p>Where are you going?</p>
        </div>
        <div className='searchBox__section'>
          <h4>Check In</h4>
          <p>Add dates</p>
        </div>
        <div className='searchBox__section'>
          <h4>Check out</h4>
          <p>Add dates</p>
        </div>
        <div className='searchBox__section'>
          <h4>Guests</h4>
          <p>Add guests</p>
        </div>
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBox;
