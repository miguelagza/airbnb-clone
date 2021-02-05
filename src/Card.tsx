import React from 'react';
import './Card.css';

interface Props {
  place: string;
  driveTime: string;
  src: string;
}

const Card: React.FC<Props> = ({ place, driveTime, src }) => {
  return (
    <div className='card'>
      <img src={src} alt={place} />
      <div className='card__info'>
        <h4>{place}</h4>
        <p>{driveTime}</p>
      </div>
    </div>
  );
};

export default Card;
