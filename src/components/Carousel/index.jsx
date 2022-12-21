import React, { useEffect } from 'react';
import './style.scss';

import { BASE_URL } from "../../config/constant";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Lazy, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = ({cottage, carousel}) => {

    return (
        <Swiper
        lazy={true}
        navigation={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        initialSlide={1}
        loop={false}
        spaceBetween={16}
        modules={[Lazy, Pagination, Navigation]}
        style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            }}
        >
        {carousel && carousel.map((image, key) => {
            return (
                <>
                {key === 3 ?
                    <SwiperSlide key={key} slot="wrapper-start">
                        <img key={image.id + key} src={BASE_URL + image?.attributes.url} alt={image?.attributes.name} className="swiper-lazy"/>
                    </SwiperSlide>
                :
                    <SwiperSlide key={key}>
                        <img key={image.id + key} src={BASE_URL + image?.attributes.url} alt={image?.attributes.name} className="swiper-lazy"/>
                    </SwiperSlide>
                }
                </>
            )
        })}
        </Swiper>
    )
}

export default Carousel;
