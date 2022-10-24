import React, { useEffect, useState, useRef } from 'react';
import { getEntities } from '../../../helpers/entity';
import { BASE_URL } from "../../../config/constant";
import { Link } from "react-router-dom";
import Hero from '../../Hero/Hero';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Lazy, Autoplay } from "swiper";

import './style.scss';

const Home = () => {
  const [cottages, setCottages] = useState([]);
  const ref = useRef(null);

  const handleSCrollDown = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    getEntities('chalets?populate=*').then((res) => {
      setCottages(res.data)
    });
  }, []);

  return (
    <>
      <Hero scrollDown={handleSCrollDown} />
      <div className='cottage-card' ref={ref}>
        <div className='cottage-section-title'>
          <h2> Nos Chalets Disponible </h2>
        </div>
        {cottages.length > 0 && cottages.map((cottage, key) => {
          const id = cottage.id
          cottage = cottage.attributes;

          return (
            <div key={id + key} className="cottage-overview">
              <Link to={`/chalet/${id}`} className={key % 2 === 0 ? 'link-container' : 'link-container reverse'}>
                <div className='cover'>
                  <img className='cover-img' src={BASE_URL + cottage.cover.data.attributes.url} alt={cottage.title }/>
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
        })}
      </div>
    </>
  )
}

export default Home;