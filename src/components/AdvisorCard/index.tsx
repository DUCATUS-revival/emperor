import React, {ReactFragment, useState} from 'react';

import './AdvisorCard.scss';
import { InfoModal } from '../index';

type TypeAdvisorCardProps = {
  img: string;
  name: string;
  position: string;
  bio: ReactFragment;
};

const AdvisorCard: React.FC<TypeAdvisorCardProps> = (
  {
    img,
    name,
    position,
    bio
  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className='adv-card'>
      <img src={img} alt={name}/>
      <div className="adv-card__content">
        <div className="adv-card__name">{name}</div>
        <div className="adv-card__position">{position}</div>
        <div className='button' onClick={openModal}>Read More</div>
        <InfoModal isOpen={isOpen} close={closeModal} img={img} name={name} position={position} bio={bio} />
      </div>
    </div>
  )
};

export default AdvisorCard;
