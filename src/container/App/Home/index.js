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
          <video>
            <source src="montain.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </header>
      <div>
        {cottages.length > 0 && cottages.map((cottage, key) => {
          const id = cottage.id
          cottage = cottage.attributes;
          return (
            <div key={cottage.id + key} className="cottage-overview">
              <Link to={`/chalet/${id}`} className={!key % 2 ? 'flex' : 'flex reverse'}>
                <div className='cover'>
                  <img className='cover-img' src={BASE_URL + cottage.cover.data.attributes.url} alt={cottage.title }/>
                  <span className='cover-title'>
                    {cottage.title}
                  </span>
                </div>
                <div className={!key % 2 ? 'info right' : 'info'}>
                  Test { cottage.informations}
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