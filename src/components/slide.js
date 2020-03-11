import React from 'react';
import Slider from 'react-slick';
import Styled from 'styled-components';

import { foodCategory } from 'Src/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StSlider = Styled.div`
    .img {
        background: #eee;
        text-align: center;
        padding: 50px 0;
    }
    
    .slick-arrow {
        border: 1px solid #ddd;
    }
    
    .slick-dots {
        bottom: 0;
    }
`;

const popularList = foodCategory.slice(0, 3);

const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <StSlider as={Slider} {...settings}>
            {popularList.map(item => (
                <div key={item.label} className="img">
                    <FontAwesomeIcon icon={`${item.icon}`} size="3x" />
                </div>
            ))}
        </StSlider>
    );
};

export default Slide;
