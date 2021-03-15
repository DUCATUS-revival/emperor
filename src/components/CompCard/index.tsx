import React from 'react';
import classNames from 'classnames';

import './CompCard.scss';

interface ICompCard {
  bg: string;
  logo: string;
  title: string;
  list: string[];
  btnText: string;
  link: string;
}

const CompCard: React.FC<ICompCard> = ({
  bg,
  logo,
  title,
  list,
  btnText,
  link,
}) => {
  return (
    <div
      className="c-card"
      style={{
        backgroundImage: `url(${bg})`,
      }}>
      <div className="c-card__content">
        <div className="c-card__logo-box">
          <img src={logo} alt="logo" className="c-card__logo" />
        </div>
        <h2 className="c-card__title">{title}</h2>
        <ul
          className={classNames('c-card__list text-sm', {
            'c-card__list-grid': list.length > 3,
          })}>
          {list.map((item, index) => (
            <li key={index} className="c-card__list-item">
              • {item}
            </li>
          ))}
        </ul>
        <a href={link} target="_blank" className="c-card__link">
          <button className="btn">{btnText}</button>
        </a>
      </div>
    </div>
  );
};

export default CompCard;
