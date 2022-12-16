import React, { useState, useEffect } from "react";
import Carousel from "../../../components/Carousel";
import { getEntity } from '../../../helpers/entity';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import './style.scss';


const StarredCottage = () => {
    const [cottage, setCottage] = useState({});
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {    
        getEntity('chalets', 18, '?populate=*').then((res) => {
          setCottage(res.data.attributes);
          setCarousel(res.data.attributes.carousel.data);
      });
    
      }, []);

    return (
        <div className="starred-cottage">
            <h1 className="title">
                NOTRE SÉLÉCTION
            </h1>
            <div className="carousel">
                {cottage && carousel ? <Carousel cottage={cottage} carousel={carousel}/> : <Skeleton />}
            </div>
            <div className="cottage-info">
                <p>{`Chalet ${cottage.title}` || <Skeleton />}</p>
            </div>
        </div>
    )
}

export default StarredCottage;