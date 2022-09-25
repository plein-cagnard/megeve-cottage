import React from 'react';
import { useTranslation } from "react-i18next";
import './style.scss';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <header className="App-header">
        <div className='Hero'>
          <h1>Trouvez votre prochaine maison de vacances</h1>
        </div>          
      </header>
    </>
  )
}

export default Home;