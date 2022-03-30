import React, {Fragment, useState} from 'react';

import {AdvisorCard, CompCard, ManagerCard} from '../../components';

import './Home.scss';

import CoinsImg from '../../assets/img/icons/coins.png';
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
import MImg10 from '../../assets/img/managers/10.jpg';
import MImg11 from '../../assets/img/managers/11.jpg';
import Line from '../../assets/img/advisory/line.png';
import Adv1 from '../../assets/img/advisory/advisor-1.png';
import Adv2 from '../../assets/img/advisory/advisor-2.png';
import Adv3 from '../../assets/img/advisory/advisor-3.png';
import Adv4 from '../../assets/img/advisory/advisor-4.png';
import Adv5 from '../../assets/img/advisory/advisor-5.png';
import Adv6 from '../../assets/img/advisory/advisor-6.png';
import Adv7 from '../../assets/img/advisory/advisor-7.png';
import Adv8 from '../../assets/img/advisory/advisor-8.png';

const HomePage: React.FC = () => {
  const cards = [
    {
      bg: 'assets/img/card-1.jpg',
      logo: Card1Img,
      title: 'Enabling a World of Opportunities',
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
        'Franchising',
        'Property',
        'E-Commerce',
        'Travel',
        'Merchant Partnerships',
      ],
      btnText: 'Find out more ',
      link: 'https://www.ducatus.com/',
    },
    {
      bg: 'assets/img/card-3.jpg',
      logo: Card3Img,
      title: 'Embracing the future of finance',
      list: ['Crypto Exchange', 'Asset Management', 'Digital Banking Services'],
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
      name: 'Babar Chaudhry',
      position: 'Group CFO',
    },
    {
      img: MImg3,
      name: 'Mario Hintermayer',
      position: 'Head of Centurion Product Marketing & Ducatus Charity',
    },
    {
      img: MImg4,
      name: 'Silke Leistner',
      position: (
        <Fragment>
          Head of&nbsp;International Relations &amp;&nbsp;Sales
        </Fragment>
      ),
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
      img: MImg10,
      name: 'Sheilah Manalo',
      position: 'Head of Communications',
    },
    {
      img: MImg11,
      name: 'Sanjay Bhoola',
      position: 'Head of Ducatus Property & Travel',
    },
  ];
  const advisory = [
    {
      name: 'Dr. Hatem Al Shanfari ',
      position: 'Entrepreneur, Educator and Member of the Board of Governors of the Central Bank of Oman',
      img: Adv2,
      bio:
        <Fragment>
          One of Oman's leading economists, Dr. Hatem Al-Shanfari is Assistant Professor in the Department of Economics
          and Finance at the College of Commerce and Economics at Sultan Qaboos University. His research interest is
          focused on asset pricing models, risk management, financial markets, management of financial institutions and
          Trade in Services (GATS). He has published a number of articles in referred international journals and
          participated in a number of professional international conferences.
          <br/>
          <br/>
          Dr. Al Shanfari is the current chairman of the Board of Directors of Gulf Investment Services Company and the
          Chairman of the Audit Committee of the Board of Al Omaniya Financial Services company; Vice Chairman of the
          Board of Omani Economic Association; a member of the Economics committee of the Oman Chamber of Commerce and
          Industry; and research associate of the Economic Research Forum for the Arab Countries, Iran and Turkey.
          <br/>
          <br/>
          Dr. Al Shanfari holds a doctorate degree in Economics from the University of Strathclyde in Glasgow, Scotland.
          He also earned an MA degree in Economic Planning from the Institute of Social Studies in The Hague, the
          Netherlands and B.Sc in Engineering from Washington University in St. Louis, Missouri, USA.
        </Fragment>
    },
    {
      name: 'His Excellency Tan Sri Dato Professor Joseph Adaikalam',
      position: 'Educationist, Philanthropist and Economic Advisor to the Government of Malaysia',
      img: Adv6,
      bio:
        <Fragment>
          His Excellency Tan Sri Dato Professor Joseph Adaikalam is an educationist, social entrepreneur and
          philanthropist par excellance. He is an advisor to the present Government of Malaysia in the area of
          entrepreneurship education and was advisor to the 2 previous Prime Ministers of Malaysia under the National
          Economic Advisory Council, Prime Minister's Department.
          <br/>
          <br/>
          As an educationist, His Excellency Tan Sri is a pioneer in the private higher education sector and has over 35
          years experience in international education. He was also the First Indian Vice Chancellor to be appointed by
          the Government of Malaysia. As a social entrepreneur and philanthropist. His Excellency has assisted thousands
          of students from Asia, Africa and Central Asia through the Binary Global Scholarship that he established in
          1994.
          <br/>
          <br/>
          He has been conferred numerous awards at international and national levels. Among these includes Asia Leading
          Educator for Entrepreneurship award, SME Platinum Award for Entrepreneurship Excellence, NRI Business
          Leadership Execellence Award (india) and many more.
          <br/>
          <br/>
          For his tremendous contribution to the Nation, His Excellency was knighted as a Dato (Sir) in 2007 and Dato
          Paduka in 2015. In 2017, His Majesty The King of Malaysia bestowed the highest title of Tan Sri (Lordship)
          upon His Excellency for his outstanding contribution internationally as an educator, social entrepreneur and
          philanthropist.
        </Fragment>
    },
    {
      name: 'Prof. Paolo Cianchi',
      position: 'Technology Entrepreneur and Digital Transformation Expert',
      img: Adv3,
      bio: <Fragment>
        Prof. Cianchi is a passionate entrepreneur that has strongly contributed to bring Intelligent Systems and Low
        Code thinking into mainstream Real-Time Enterprise and business integration through Digital Transformation. He
        promotes the vision among customers, partners and investors by inventing strategic Distributed Intelligent
        Systems products and application scenarios based on cutting edge technologies including Payments and Blockchain,
        IoT, AlgorithMIX (AI-ML and mechanistic math models) and Collaborative UX, all orchestrated through the NEGENTIS
        process-centric middleware software platform.
        <br/>
        <br/>
        Prof. Cianchi graduated Summa Cum Laude in Electronic Engineering at the University of Florence and holds a PhD
        in Systems Engineering. He currently serves as CEO and CTO of some startups he has co-founded in the software,
        digital health, fintech and renewable industries. He is also a CTO of Scrypta Foundation to evolve its
        blockchain into the next-generation DApp fully fledged operating system.
        <br/>
        <br/>
        Recently, he was appointed as Head of the Engineering Department and executive member of the Academic Board of a
        private university based in Rome aiming to offer highly qualified education programs to students from abroad
        (mainly Asia, Africa and MiddleEast).
      </Fragment>
    },
    {
      name: 'Rashid Al Habtoor',
      position: 'CEO and President of RKHBC, Al Habtoor Trading Enterprises (HTE) LLC and RKH Investments',
      img: Adv1,
      bio:
        <Fragment>
          Born into one of the largest business families and raised in Dubai, United Arab Emirates, Mr. Al Habtoor's
          ability to recognise opportunities and capitalise on them has made him a much sought after Strategic Business
          Partner. His experience spans a broad range of business portfolios which include Oil & Gas, Construction &
          Engineering, Automotive, Real Estate, Information Technology, Software Systems, Facilities Management,
          Communications and Food & Beverage, along with over one hundred Partnerships and Joint Ventures with companies
          both local and international.
          <br/>
          <br/>
          Mr. Al Habtoor graduated from George Washington University with a Bachelor of Science degree in Operations
          Research and Computer Science. In the early 80s, he started his first business with a vision to contribute to
          the developing economy of the United Arab Emirates. Mr. Al Habtoor has received a Leadership Award from the
          Dubai Chamber of Commerce and Industry and also been honoured by the Dubai Business Council four times, with
          his last award being for "Strategic Partnership in UAE's developing Economy".
          <br/>
          <br/>
          Mr. Al Habtoor’s vision is to continue the growth of UAE’s Economy by maintaining the focus on Strategic
          Partnership through various business channels including Business Development of New Projects, Establishing
          Robust Government Relations & Business Consultation via his company, RKH-BC.com. An advocate of supporting the
          local community, Mr Al Habtoor's philanthropic endeavors are focused on simultaneously nurturing both local
          and international charity organisations.
        </Fragment>
    },
    {
      name: 'Jürgen Kob',
      position: 'Fintech and Asset Management Consultant',
      img: Adv7,
      bio:
        <Fragment>
          Jürgen is a consultant with 30 years of experience in the traditional financial industry and asset management.
          He has worked for a variety of banks in Germany, Luxembourg and Switzerland.
          <br/>
          <br/>
          Educated in Business and Economics in Germany, Jürgen went on to build a prolific career in banking and
          finance. He has held various positions in European finance institutions, such as M.M.Warburg Bank, Deutsche
          Bank Schweiz AG (DBS), MediBank AG, Theta AG Wealth Management, among others. Over the past few years, he has
          added a relevance to his wealth of banking expertise through working directly with companies in the field of
          Fintech and blockchain/cryptocurrencies.
          <br/>
          <br/>
          Today, he serves companies like Denarius in Crypto Valley Zug as a board member in strategic issues. Jürgen is
          a member of DFJV - Deutscher Fachjournalisten Verband (German Assocation for Specialized Journalists), FINTECH
          Circle Institute, London, Bitcoin Association Switzerland, Crypto Valley Association, Crypto Valley Labs Zug
          and is an advocate of Disruption Disciples. He continues to share his wealth of experience as an adviser and
          consultant on subjects such as Digital Finance & Digital Leadership, Blockchain & Cryptocurrencies and Wealth
          Management.
        </Fragment>
    },
    {
      name: 'Joseph Koren',
      position: 'Business Leader and Cyber Security Expert',
      img: Adv8,
      bio: <Fragment>
        After 35 years in the jewelry industry as CEO of Nissko Jewelry and Daniel K, Mr. Koren cultivated relationships
        all over the world, ranging from big chain department store executives to VIP clients to Royal Family Members.
        He specializes in networking, with a focus on connecting businesses with investors, buyers, and strategic
        partners. Mr. Koren serves as Board Member in various organizations and charities, namely New York Center for
        Child Development, Soroka Medical Center, and Foundation for Ethnic Understanding.
        <br/>
        <br/>
        Currently, he's a USA Business Development Representative for Israel-based cyber security company Gyptol. It's
        the only software in the world that detects and remediates misconfigurations (human errors and default settings)
        among the organizations assets, which are responsible for approximately 40% of all successful cyber attacks. Mr.
        Koren is very passionate about the Hi-Tech industry and is excited about the endless possibilities it presents.
      </Fragment>
    }
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
              connect you to opportunities anchored in innovation and powered by
              the spirit of community.
            </p>
            <p>We are The Emperor Group.</p>
          </div>
          <img src={CoinsImg} alt="img" className="home__preview-coins"/>
        </div>
      </div>
      <div className="home__descr lines">
        <div className="home__descr-box">
          <img src={DescrImg} alt="img"/>
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
      <div className="home__cards">
        <div className="home__empty" id="business"></div>
        {cards.map((card, index) => (
          <CompCard key={index} {...card} />
        ))}
      </div>
      <div className="home__about">
        <div className="home__empty" id="about"></div>
        <div className="row row-md">
          <div className="home__about-title h1">About Emperor</div>
          <div className="home__about-text text-sm">
            <p>
              Founded in 2017, Emperor Holdings owns and operates a diversified
              group of businesses with a common goal – to empower people to
              reimagine their financial future with future-proof business
              models, solutions and products that create opportunities in
              boundless ways.
            </p>
            <p>
              To us, having varied business interests is less about variety but
              more about bringing tradition and innovation together. This
              principle is realised in our framework for a truly cashless
              economy. Blockchain and gold trading, crowdfunding and network
              marketing, real estate and digital money, cashless shopping and
              crypto trading – these are just some of the ways in which we
              create possibilities.
            </p>
            <p>
              We have offices in the world’s most progressive financial centres
              - Singapore and Dubai, business presence in Europe, Africa and the
              Middle East, and the support of a forward-thinking global
              community spread across 180 countries.{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="home__managers lines lines-bg">
        <div className="home__managers-bg">
          <div className="home__managers-title h1">Management Team</div>
        </div>
        <div className="home__managers-box">
          {managers.map((manager, index) => (
            <ManagerCard key={index} {...manager} />
          ))}
        </div>
        <div className="home__advisory-board">
          <img className="home__advisory-board__line" src={Line} alt="line between sections"/>
          <div className="home__advisory-board__header">Advisory Board</div>
          <div className="home__advisory-board__content">
            {advisory.map((advisor, index) => (
              <AdvisorCard
                img={advisor.img}
                name={advisor.name}
                position={advisor.position}
                bio={advisor.bio}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
