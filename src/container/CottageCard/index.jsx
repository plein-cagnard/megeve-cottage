import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { useInViewport } from 'react-in-viewport';
import { BASE_URL } from "../../config/constant";

import './Style.scss';

const CottageCard = ({cottage, id = null}) => {
  const myRef = useRef();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [lang, setLang] = useState();
  const { inViewport } = useInViewport(myRef); 

  useEffect(() => {
    setLang(searchParams.get('lang'))
  }, [])

  const handleNavigation = () => {

    navigate(`/chalet/${id}?lang=${lang}`);
  }

  return (
    <div
      onClick={handleNavigation}
      className='Cottage'
    >
        <img 
          className='cover'
          src={ BASE_URL + cottage.cover.data.attributes.url }
          alt={ cottage.cover.data.attributes.name }
        />
        <div className="content">
          <h1 className='title'>
            CHALET
          </h1>
          <h1 className='cottage-name'>
            {cottage.title}
          </h1>
        </div>
        <div className="cta" ref={myRef}>
          {inViewport && (
            <span className='button'>
              {lang === 'fr' ? 'En savoir plus' : 'Discover more'}
            </span>
          )}
        </div>
        <div className="cta arrow" ref={myRef}>
          {inViewport && (
            <span className="icon material-icons">expand_more</span>
          )}
        </div>
    </div>
  )
}

export default CottageCard;