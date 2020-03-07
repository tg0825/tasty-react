import React from 'react';
import Slider from 'react-slick';
import Styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StSlider = Styled.div`
    .img {
        background: #eee;
    }
    
    .slick-arrow {
        border: 1px solid #ddd;
    }
`;

const Main = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <StSlider as={Slider} {...settings}>
            <div className="img">
                <h3>1</h3>
            </div>
            <div className="img">
                <h3>2</h3>
            </div>
            <div className="img">
                <h3>3</h3>
            </div>
            <div className="img">
                <h3>4</h3>
            </div>
            <div className="img">
                <h3>5</h3>
            </div>
            <div className="img">
                <h3>6</h3>
            </div>
        </StSlider>
    );
};

export default Main;
