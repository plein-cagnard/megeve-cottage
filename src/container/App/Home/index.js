import React, { useEffect, useState } from 'react';
import { getEntities } from '../../../helpers/entity';
import { BASE_URL } from "../../../config/constant";
import { Link } from "react-router-dom";

import './style.scss';

const Home = () => {
  const [cottages, setCottages] = useState([]);

  useEffect(() => {
    getEntities('chalets?populate=*').then((res) => {
      setCottages(res.data)
    });
  }, []);

  console.log(cottages);

  return (
    <>
      <header className="App-header">
        <div className='Hero'>
          <h1>Trouvez votre prochaine maison de vacances</h1>
        </div>
      </header>
      <div>
        {cottages.length > 0 && cottages.map((cottage, key) => {
          const id = cottage.id
          cottage = cottage.attributes;
          return (
            <div key={cottage.id + key} className="cottage-overview">
              <Link to={`/chalet/${id}`}>
                <div className='cover'>
                  <img className='cover-img' src={BASE_URL + cottage.cover.data.attributes.url} alt={cottage.title }/>
                  <span className='cover-title'>
                    {cottage.title}
                  </span>
                </div>
                <div className='info'>
                  
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