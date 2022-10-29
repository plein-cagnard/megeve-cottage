import React, { useEffect, useState, useRef } from 'react';
import { getEntities } from '../../../helpers/entity';
import { BASE_URL } from "../../../config/constant";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from '../../Navbar/Navbar';
import Hero from '../../Hero/Hero';
import CottageCard from '../../CottageCard';

import './style.scss';

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
    const localisation = searchParams.get('lang') === 'fr' ? 'fr' : 'en';
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
        {/* <div className='cottage-section-title'>
          <h2> Nos Chalets Disponible </h2>
        </div> */}

        {cottages.length > 0 && cottages.map((cottage, key) => {
        const id = cottage.id
        cottage = cottage.attributes;
        
          return (
            <div key={key + id} className='cottage-overview'>
              <CottageCard cottage={cottage} id={id} />
            </div>
          )
        })}


        {/* {cottages.length > 0 && cottages.map((cottage, key) => {
          const id = cottage.id
          cottage = cottage.attributes;

          return (
            <div key={id + key} className="cottage-overview">
              <Link to={`/chalet/${id}?lang=${localisation}`} className={key % 2 === 0 ? 'link-container' : 'link-container reverse'}>
                <div className='cover'>
                  <img className='cover-img' src={BASE_URL + cottage.cover.data.attributes.url} alt={cottage.cover.data.attributes.name }/>
                </div>
                <div className={key % 2 === 0 ? 'info right' : 'info'}>
                  <h3 className='title'>{ cottage.title}</h3>
                  <div className='description'>
                    {cottage.short_description}
                  </div>
                </div>
              </Link>
            </div>
          )
        })} */}
      </div>
    </>
  )
}

export default Home;