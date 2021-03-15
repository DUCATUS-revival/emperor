import React from 'react';

import './ManagerCard.scss';

interface IManagerCard {
  img: string;
  name: string;
  position: string;
}

const ManagerCard: React.FC<IManagerCard> = ({ img, name, position }) => {
  return (
    <div className="m-card">
      <img src={img} alt={name} />
      <div className="m-card__content">
        <div className="m-card__name">{name}</div>
        <div className="m-card__position">{position}</div>
      </div>
    </div>
  );
};

export default ManagerCard;
