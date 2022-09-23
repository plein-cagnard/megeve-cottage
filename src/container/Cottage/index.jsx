import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEntity } from "../../helpers/entity";
import { BASE_URL } from "../../config/constant";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Style.scss';

const Cottage = () => {
    const [cottage, setCottage] = useState({});
    const [carousel, setCarousel] = useState([]);
    let params = useParams();

    useEffect(() => {
        getEntity('chalets', params.cottageId, '?populate=*').then((res) => {
            setCottage(res.data.attributes);
            setCarousel(res.data.attributes.carousel.data);
        });
    }, [])
    
    console.log(cottage)
    return (
        <div className="container">
            <div className="header">
                <h1>{cottage.title}</h1>
                <div className="cover-image">
                    <img src={BASE_URL + cottage.cover?.data.attributes.url} alt={cottage?.title} width="100%"/>
                </div>
                <div className="description">
                    <p>
                        {cottage.description}
                    </p>
                </div>

                <Carousel
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                    swipeable
                    emulateTouch
                >
                    {carousel && carousel.map((image, key) => {
                        console.log(image);
                        return (
                            <div key={image.id + key}>
                                <img src={BASE_URL + image?.attributes.url} alt={image?.attributes.name} width="100%"/>
                            </div>
                        )
                    })}
                </Carousel>
            </div>

        </div>
    )
}

export default Cottage;