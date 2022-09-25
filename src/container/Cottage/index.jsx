import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEntity } from "../../helpers/entity";
import { BASE_URL } from "../../config/constant";
import './Style.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Cottage = () => {
    const [cottage, setCottage] = useState({});
    const [carousel, setCarousel] = useState([]);
    const [infoCategory, setInfoCategory] = useState(0);
    let params = useParams();

    useEffect(() => {
        getEntity('chalets', params.cottageId, '?populate=*').then((res) => {
            setCottage(res.data.attributes);
            setCarousel(res.data.attributes.carousel.data);
        });
    }, [])
    
    // console.log(cottage);
    return (
        <>
            <div className="cover-image">
                <button className="back-button">
                    <p>Retour</p>
                </button>
                <Swiper
                    lazy={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide
                        slot="container-start"
                    >
                        <img src={BASE_URL + cottage.cover?.data?.attributes?.url} alt={cottage?.title}/>
                    </SwiperSlide>
                    {carousel && carousel.map((image, key) => {
                        console.log(image);
                        return (
                            <SwiperSlide>

                                <img key={image.id + key} src={BASE_URL + image?.attributes.url} alt={image?.attributes.name}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h1>{cottage.title}</h1>
                        <span>{cottage?.localisation}</span>
                    </div>
                    <div className="description">
                        <p>
                            {cottage?.description}
                        </p>
                    </div>
                </div>

                <div className="categories-info">
                    <div className="buttons">
                        <button 
                            className={infoCategory === 0 ? "selected" : ""}
                            onClick={() => {setInfoCategory(0)}}
                        >
                            Informations
                        </button>
                        <button 
                            className={infoCategory === 1 ? "selected" : ""}
                            onClick={() => {setInfoCategory(1)}}
                        >
                            Services
                        </button>
                        <button 
                            className={infoCategory === 2 ? "selected" : ""}
                            onClick={() => {setInfoCategory(2)}}
                        >
                            Proche
                        </button>
                    </div>
                    <div className="categories">
                        {infoCategory === 0 && (
                            <div className="info">
                                test info
                            </div>
                        )}

                        {infoCategory === 1 && (
                            <div className="services">
                                test services
                            </div>
                        )}

                        {infoCategory === 2 && (
                            <div className="nearby">
                                test nearby
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cottage;