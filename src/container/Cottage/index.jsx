import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEntity } from "../../helpers/entity";
import { BASE_URL } from "../../config/constant";
import { useNavigate, useSearchParams } from 'react-router-dom';

import './Style.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Lazy, Pagination, Navigation } from "swiper";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/lazy";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const Cottage = () => {
    const [localisation, setLocalisation] = useState();
    const [cottage, setCottage] = useState({});
    const [carousel, setCarousel] = useState([]);
    const [infoCategory, setInfoCategory] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
        getEntity('chalets', params.cottageId, '?populate=*').then((res) => {
            setCottage(res.data.attributes);
            setCarousel(res.data.attributes.carousel.data);
        });

        setLocalisation(searchParams.get('lang'))
    }, [])

    return (
        <>
            <div className="cover-image">
                <button className="back-button" onClick={() => { navigate(`/?lang=${localisation}`) }}>
                    <p>Retour</p>
                </button>
                <Swiper
                    lazy={true}
                    navigation={true}
                    modules={[Lazy, Pagination, Navigation]}
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                >
                    <SwiperSlide
                        slot="container-start"
                    >
                        <img src={BASE_URL + cottage.cover?.data?.attributes?.url} alt={cottage?.title } className="swiper-lazy"/>
                    </SwiperSlide>
                    {carousel && carousel.map((image, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <img key={image.id + key} src={BASE_URL + image?.attributes.url} alt={image?.attributes.name} className="swiper-lazy"/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className="container">
                <div className="content">
                    <div className="top">
                        <div className="title">
                            <h1>Chalet {cottage?.title}</h1>
                            <span>{cottage?.localisation}</span>
                        </div>
                        {cottage.price ? (
                            <div className="titles">
                                <span>A partir de</span>
                                <h1>{cottage?.price}€</h1>
                            </div>
                        ) : (
                            <div className="titles">
                                <h1></h1>
                                <span>Prix sur demande</span>
                            </div>
                        )}
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
                                {cottage?.informations}
                            </div>
                        )}

                        {infoCategory === 1 && (
                            <div className="services">
                                {cottage?.services}
                            </div>
                        )}

                        {infoCategory === 2 && (
                            <div className="nearby">
                                {cottage?.nearby}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cottage;
