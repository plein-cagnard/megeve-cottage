import React, {useEffect, useState} from "react";
import {getSingle} from "../../helpers/entity";
import { Link } from "react-router-dom";
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
            <Link to={field.link}>{field.text}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Navbar;
