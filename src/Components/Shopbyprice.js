import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '../assets/1-MBL-WEB.png';
import Banner2 from '../assets/2-MBL-WEB.png';
import Banner3 from '../assets/3-MBL-WEB.png';
import Banner4 from '../assets/4-MBL-WEB.png';
import Banner5 from '../assets/5-MBL-WEB.png';
import Banner6 from '../assets/6-MBL-WEB.png';
import Banner7 from '../assets/7-MBL-WEB.webp';
import Banner8 from '../assets/8-MBL-WEB.webp';
import Banner9 from '../assets/9-MBL-WEB.webp';
const SimpleCarousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 500,
        autoplay :true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };


    return (
        
        <div style={{margin:'30px'}}>
            <h4 style={{paddingLeft:'7%',color:'#000',fontWeight:'700' }}>Shop By Price</h4>
            <Slider {...settings} style={{padding:'20px'}} >
                <div >
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50 " style={{ margin: '0 auto' }}
                            src={Banner1}
                            alt="First slide"
                        />
                    </a>
                    
                </div>
                <div>
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50" style={{ margin: '0 auto' }}
                            src={Banner2}
                            alt="First slide"
                        />
                    </a>
                    
                </div>
                <div>
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50" style={{ margin: '0 auto' }}
                            src={Banner3}
                            alt="First slide"
                        />
                    </a>
                    
                </div>
                <div>
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50" style={{ margin: '0 auto' }}
                            src={Banner4}
                            alt="First slide"
                        />
                    </a>
                    
                </div>
                <div>
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50" style={{ margin: '0 auto' }}
                            src={Banner5}
                            alt="First slide"
                        />
                    </a>
                    
                </div>
                <div>
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50" style={{ margin: '0 auto' }}
                            src={Banner6}
                            alt="First slide"
                        />
                    </a>
                    
                </div>
                <div>
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50" style={{ margin: '0 auto' }}
                            src={Banner7}
                            alt="First slide"
                        />
                    </a>
                    
                </div>
                <div>
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50" style={{ margin: '0 auto' }}
                            src={Banner8}
                            alt="First slide"
                        />
                    </a>
                    
                </div>
                <div>
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50" style={{ margin: '0 auto' }}
                            src={Banner9}
                            alt="First slide"
                        />
                    </a>
                    
                </div>
                {/* Add more slides as needed */}
            </Slider>

        </div>


    );
};

export default SimpleCarousel;
