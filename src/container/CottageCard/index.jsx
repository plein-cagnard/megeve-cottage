import React from 'react';
import { Link, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../config/constant";

import './Style.scss';

const CottageCard = ({cottage, id = null}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='Cottage'>
      <Link to={`/chalet/${id}?lang=${searchParams.get('lang')}`}>
        <img 
          className='cover'
          src={ BASE_URL + cottage.cover.data.attributes.url }
          alt={ cottage.cover.data.attributes.name }
        />
        <div className="content">
          <h3 className='title'>{ cottage.title}</h3>
        </div>
      </Link>
    </div>
  )
}

export default CottageCard;