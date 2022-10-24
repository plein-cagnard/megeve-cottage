import React, { useEffect, useState } from 'react';
import { getEntities } from '../../../helpers/entity';
import { BASE_URL } from "../../../config/constant";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Lazy, Autoplay } from "swiper";

import './style.scss';

const Home = () => {
  const [cottages, setCottages] = useState([]);

  useEffect(() => {
    getEntities('chalets?populate=*').then((res) => {
      setCottages(res.data)
    });
  }, []);

  return (
    <>
      <header className="App-header">
        <div className='Hero'>
          <Swiper
            lazy={true}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Lazy, Autoplay]}
          >
            {cottages && cottages.map((cottage, key) => {
              return (
                <SwiperSlide key={cottage.id + key}>
                  <img key={cottage.id + key} src={BASE_URL + cottage?.attributes?.cover?.data?.attributes?.url} alt={cottage?.attributes?.cover?.data?.attributes?.name} className="swiper-lazy"/>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </header>
      <div className='cottage-card'>
        <div className='cottage-section-title'>
          <h2> Nos Chalets Disponible </h2>
        </div>
        {cottages.length > 0 && cottages.map((cottage, key) => {
          const id = cottage.id
          cottage = cottage.attributes;
          return (
            <div key={id + key} className="cottage-overview">
              <Link to={`/chalet/${id}`} className={!key % 2 ? 'link-container' : 'link-container reverse'}>
                <div className='cover'>
                  <img className='cover-img' src={BASE_URL + cottage.cover.data.attributes.url} alt={cottage.title }/>
                </div>
                <div className={!key % 2 ? 'info right' : 'info'}>
                  <h3 className='title'>{ cottage.title}</h3>
                  <div className='description'>
                    {cottage.description}
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