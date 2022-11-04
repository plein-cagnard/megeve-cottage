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
            {footer?.phone && (
                <button className='button'>
                    <span className="icon material-icons">phone</span>
                    <span className="phone">{footer?.phone}</span>
                </button>
            )}
            {footer?.legal && (
                <div className="legal">{footer?.legal}</div>
            )}
            {footer?.email && (
                <div className="email">{footer?.email}</div>
            )}
        </footer>
    )
}

export default Footer;