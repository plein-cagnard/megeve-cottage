import React, { useEffect, useState } from 'react';
import { getSingle } from '../../helpers/entity';

import { BASE_URL } from "../../config/constant";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './Style.scss';

const Hero = ({scrollDown, localisation}) => {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    getSingle('hero', '&populate=*', localisation).then((res) => {
      setHero(res.data.attributes)
    });
  }, [localisation]);

  return (
    <header className="Hero">
      <img className='background-image' src={BASE_URL + hero.background_image?.data?.attributes?.url} alt="Mountain cottage" />

      <div className='content'>
          <h1 className='title'>{hero.title || <Skeleton />}</h1>
          <h3 className='subtitle'>{hero.subtitle || <Skeleton />}</h3>
      </div>

      <div className='scroll-down'>
          <button className='button' onClick={scrollDown}>
              <span className="icon material-icons">expand_more</span>
          </button>
      </div>
      <div className='scroll-down'>
        {hero.scroll_down && (
          <span>{hero.scroll_down}</span>
        )}
      </div>
    </header>
  )
}

export default Hero;