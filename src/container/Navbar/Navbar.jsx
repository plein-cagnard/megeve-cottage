import React, {useEffect, useState} from "react";
import {getSingle} from "../../helpers/entity";
import './Navbar.scss';

const Navbar = () => {
  const [navbarData, setNavbarData] = useState({});

  useEffect(() => {
    getSingle('navbar?populate=*').then(({ data }) => {
      setNavbarData(data)
    })
  }, [])

  return (
    <ul>
      { navbarData.attributes && navbarData.attributes.fields.map((field) => {
        return (
          <li key={field.id}>
            <a href={field.link}>{field.text}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default Navbar;
