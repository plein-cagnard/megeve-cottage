import React, { useEffect, useState, useRef } from 'react';
import { getEntities } from '../../../helpers/entity';
import { useSearchParams } from "react-router-dom";
import Navbar from '../../Navbar/Navbar';
import Hero from '../../Hero/Hero';
import CottageCard from '../../CottageCard';

import './style.scss';
import Footer from '../../Footer';

const Home = () => {
  const [cottages, setCottages] = useState([]);
  const [localisation, setLocalisation] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const cottagesRef = useRef(null);

  const handleReturnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSCrollDown = () => {
    cottagesRef.current?.scrollIntoView({behavior: 'smooth'});
  };


  const handleSetLangage = () => {
    const localisation = searchParams.get('lang') === 'en' ? 'en' : 'fr';
    setLocalisation(localisation);
    setSearchParams({lang: localisation});
  };

  const handleSwitchLangage = () => {
    const localisation = searchParams.get('lang') === 'fr' ? 'en' : 'fr';
    setLocalisation(localisation);
    setSearchParams({lang: localisation});
  };

  useEffect(() => {
    getEntities('chalets', '&populate=*', searchParams.get('lang') ).then((res) => {
      setCottages(res.data)
    });

  }, [localisation]);

  useEffect(() => {
    handleSetLangage();
  }, []);

  return (
    <>
      <Navbar localisation={searchParams.get('lang')} switchLang={handleSwitchLangage} returnTop={handleReturnTop} />
      <Hero scrollDown={handleSCrollDown} localisation={searchParams.get('lang')}/>
      <div className='card-cottages' ref={cottagesRef}>
        {cottages.length > 0 && cottages.map((cottage, key) => {
        const id = cottage.id
        cottage = cottage.attributes;

          return (
            <div key={key + id} className='cottage-overview'>
              <CottageCard cottage={cottage} id={id} />
            </div>
          )
        })}
      </div>
      <Footer localisation={localisation}/>
    </>
  )
}

export default Home;
