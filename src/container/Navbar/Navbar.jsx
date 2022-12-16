import React from "react";

import './Navbar.scss';

const Navbar = ({localisation, switchLang, returnTop}) => {

  return (
    <>
      <nav>
        <div className="left wrapper" onClick={returnTop}>
          <h3 className="title asH3">Megève Cottage</h3>
        </div>
        <div className="right wrapper">
          <button className='button' onClick={switchLang}>
            <h2><span className={localisation === 'fr' ? null : 'bold'}>EN</span> / <span className={localisation === 'fr' ? 'bold' : null}>FR</span></h2>
          </button>
        </div>
      </nav>
    </>
  )
}
// {localisation === 'fr' ? 'FR' : 'EN'}
export default Navbar;
