import React, { useEffect, useState } from 'react';
import { getEntities } from '../../../helpers/entity';
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
          return (
            <div key={cottage.id + key}>{cottage.attributes.title}</div>
          )
        })}
      </div>
    </>
  )
}

export default Home;