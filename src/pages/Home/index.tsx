import React from 'react';
import { Element } from 'react-scroll';

import { CompCard, ManagerCard } from '../../components';

import './Home.scss';

import CoinsImg from '../../assets/img/icons/coins.svg';
import DescrImg from '../../assets/img/sections/descr.jpg';
import Card1Img from '../../assets/img/icons/centurion.svg';
import Card2Img from '../../assets/img/icons/ducatus.svg';
import Card3Img from '../../assets/img/icons/denarius.svg';
import MImg1 from '../../assets/img/managers/1.jpg';
import MImg2 from '../../assets/img/managers/2.jpg';
import MImg3 from '../../assets/img/managers/3.jpg';
import MImg4 from '../../assets/img/managers/4.jpg';
import MImg5 from '../../assets/img/managers/5.jpg';
import MImg6 from '../../assets/img/managers/6.jpg';
import MImg7 from '../../assets/img/managers/7.jpg';
import MImg8 from '../../assets/img/managers/8.jpg';
import MImg9 from '../../assets/img/managers/9.jpg';
import MImg10 from '../../assets/img/managers/10.jpg';
import MImg11 from '../../assets/img/managers/11.jpg';

const HomePage: React.FC = () => {
  const cards = [
    {
      bg: 'assets/img/card-1.jpg',
      logo: Card1Img,
      title: 'Turning potential into possibilities',
      list: ['Crowdfunding', 'Network Marketing', 'Market Advisory'],
      btnText: 'Find out more ',
      link: 'https://centuriongm.com/',
    },
    {
      bg: 'assets/img/card-2.jpg',
      logo: Card2Img,
      title: 'Open up to boundless possibilities',
      list: [
        'Blockchain',
        'Property',
        'Travel',
        'Franchising',
        'E-Commerce',
        'Merchant Partnerships',
      ],
      btnText: 'Find out more ',
      link: 'https://www.ducatus.com/',
    },
    {
      bg: 'assets/img/card-3.jpg',
      logo: Card3Img,
      title: 'Your limitless payment platform',
      list: ['Crypto Exchange', 'Asset Management', 'Digital Baking Services'],
      btnText: 'Find out more ',
      link: 'https://denariusglobal.com/',
    },
  ];
  const managers = [
    {
      img: MImg1,
      name: 'Ronny Tome',
      position: 'Executive Chairman',
    },
    {
      img: MImg2,
      name: 'Bertie Worth',
      position: 'Chief Financial Officer',
    },
    {
      img: MImg3,
      name: 'Mario Hintermayer',
      position: 'Head of Centurion Product Marketing & Ducatus Charity',
    },
    {
      img: MImg4,
      name: 'Silke Leistner',
      position: 'Head of International Relations & Sales',
    },
    {
      img: MImg5,
      name: 'Mouhsin Senhaji',
      position: 'Head of Information Systems',
    },
    {
      img: MImg6,
      name: 'Geoff Harrison',
      position: 'Head of Global Support',
    },
    {
      img: MImg7,
      name: 'Frances Sy',
      position: 'Exec. Assistant to Exec. Chairman',
    },
    {
      img: MImg8,
      name: 'Abdulkarim Safwan',
      position: 'Head of Strategic Partnerships',
    },
    {
      img: MImg9,
      name: 'Alex Benson',
      position: 'Head of AA+ Exchange & Trading',
    },
    {
      img: MImg10,
      name: 'Sheilah Manalo',
      position: 'Head of Communications',
    },
    {
      img: MImg11,
      name: 'Sanjay Bhoolaavel',
      position: 'Head of Ducatus Property & Travel',
    },
  ];
  return (
    <main className="home">
      <div className="home__preview">
        <div className="row row-md home__preview-container">
          <h1 className=" h1 home__preview-title">
            REIMAGINE YOUR FINANCIAL FUTURE WITH US.
          </h1>
          <div className="home__preview-text text-md">
            <p>
              We made it our mission to be your partner in building the future
              you deserve.<br></br> Constantly creating and always evolving, we
              connect you to opportunities anchored ininnovation and powered by
              the spirit of community.
            </p>
            <p>We are The Emperor Group.</p>
          </div>
          <img src={CoinsImg} alt="img" className="home__preview-coins" />
        </div>
      </div>
      <div className="home__descr lines">
        <div className="home__descr-box">
          <img src={DescrImg} alt="img" />
        </div>
        <div className="home__descr-box home__descr-box-text text-md">
          <p>
            In this complicated and fast-changing world, our needs change
            incessantly with the times. The way we do things, more so in a
            digital business environment, is no longer the way we imagined it to
            be. We resolve to stay relevant by adapting and advancing through
            waves of change. And in this most exciting journey, we invite you to
            join us.
          </p>
          <p>
            Discover empowering solutions and products that offer more choices,
            more flexibility, more access and make a significant impact on how
            you can build a solid financial future for yourself and others.
          </p>
        </div>
      </div>
      <Element name="business">
        <div className="home__cards">
          {cards.map((card, index) => (
            <CompCard key={index} {...card} />
          ))}
        </div>
      </Element>
      <Element name="about">
        <div className="home__about">
          <div className="row row-md">
            <div className="home__about-title h1">About Emperor</div>
            <div className="home__about-text text-sm">
              <p>
                Founded in 2017, Emperor Holdings owns and operates a
                diversified group of businesses with a common goal – to empower
                people to reimagine their financial future with future-proof
                business models, solutions and products that create
                opportunities in boundless ways.
              </p>
              <p>
                To us, having varied business interests is less about variety
                but more about bringing tradition and innovation together. This
                principle is realised in our framework for a truly cashless
                economy. Blockchain and gold trading, crowdfunding and network
                marketing, real estate and digital money, cashless shopping and
                crypto trading – these are just some of the ways in which we
                create possibilities.
              </p>
              <p>
                We have offices in the world’s most progressive financial
                centres - Singapore and Dubai, business presence in Europe,
                Africa and the Middle East, and the support of a
                forward-thinking global community spread across 180 countries.{' '}
              </p>
            </div>
          </div>
        </div>
      </Element>
      <div className="home__managers lines lines-bg">
        <div className="home__managers-bg">
          <div className="home__managers-title h1">Management Team</div>
        </div>
        <div className="home__managers-box">
          {managers.map((manager, index) => (
            <ManagerCard key={index} {...manager} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
