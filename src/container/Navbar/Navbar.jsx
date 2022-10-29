import React from "react";

import './Navbar.scss';

const Navbar = ({localisation, switchLang, returnTop}) => {

  return (
    <>
      <nav>
        <div className="left wrapper">
        </div>
        <div className="middle wrapper" onClick={returnTop}>
          <h3 className="title">Megève Cottage</h3>
        </div>
        <div className="right wrapper">
          <button className='button' onClick={switchLang}>
            <h2>{localisation === 'fr' ? '🇫🇷' : '🇬🇧'}</h2>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
