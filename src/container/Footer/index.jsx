import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../config/constant";
import { getSingle } from "../../helpers/entity";

import './Style.scss';

const Footer = ({ localisation }) => {
    const [footer, setFooter] = useState(null);

    useEffect(() => {
        getSingle('footer', '&populate=*', localisation).then((res) => {
          setFooter(res.data.attributes)
        });
      }, [localisation]);

      useEffect(() => {
        console.log(footer);
      }, [footer]);

    return (
        <footer className="footer">
            {footer?.email && (
                <a href={`mailto:${footer?.email}`} className='section email'>
                    <span className="icon material-icons">mail</span>
                    <span className="phone">{footer?.email}</span>
                </a>
            )}
            {footer?.legal && (
                <div className="section legal">{footer?.legal}</div>
            )}
            {footer?.phone && (
                <a href={`tel:${footer?.phone}`} className='section phone'>
                    <span className="icon material-icons">phone</span>
                    <span className="phone">{footer?.phone}</span>
                </a>
            )}
        </footer>
    )
}

export default Footer;