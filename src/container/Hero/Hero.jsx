import React, { useEffect, useState } from 'react';
import { getEntities } from '../../helpers/entity';

import { BASE_URL } from "../../config/constant";

import './Style.scss';

const Hero = ({scrollDown}) => {
  const [cottages, setCottages] = useState([]);

  useEffect(() => {
    getEntities('chalets?populate=*').then((res) => {
      setCottages(res.data)
    });
  }, []);

  return (
    <header className="Hero">
        <img className='background-image' src={BASE_URL + '/uploads/Chalet_OA_3_908c02ac86.jpg'} alt="Mountain cottage" />
        <div className="logo">
            <h2>Megève Cottage</h2>
        </div>
        <div className='content'>
            <h1 className='title'>Test Title Cottages</h1>
            <span className='subtitle'>Test SubTitle Cottages</span>

        </div>
        <div className='scroll-down'>
            <button className='button' onClick={scrollDown}>
                <span className="icon material-icons">expand_more</span>
            </button>
        </div>
    </header>
  )
}

export default Hero;