import React, {useEffect, useState} from 'react';
import './style.scss';
import {getEntities} from "../../helpers/entity";
import {useSearchParams} from "react-router-dom";

const AboutUs = () => {
    const [paragraph, setParagraph] = useState([]);
    const [lang, setLang] = useState('');
    const [searchParams] = useSearchParams();

    useEffect(() => {
        setLang(searchParams.get('lang'))
    }, [])

    useEffect(() => {
        getEntities('about-us', '&populate=*', searchParams.get('lang') ).then((res) => {
            setParagraph(res.data)
        });
    }, [lang]);

    return (
        <>
            <div className='about-us'>
                <h1 className='title'>{paragraph?.attributes?.title}</h1>
                <div className="content">
                    {paragraph?.attributes?.description}
                </div>

            </div>
        </>
    )
}

export default AboutUs;
