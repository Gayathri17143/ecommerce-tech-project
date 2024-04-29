import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner1 from '../assets/earbuds.png';
import Banner2 from '../assets/headset.png';
import Banner3 from '../assets/smart.png';
import Banner4 from '../assets/powerbank.png';
import Banner5 from '../assets/webcam.png';
import { Container } from 'react-bootstrap';
const SimpleCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,

        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
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
        <Container>
            <h3 style={{paddingLeft:'7%' ,fontWeight:'600',color:"#000"}}>Trending Gadgets</h3>
            <Slider {...settings} style={{padding:'20px'}} >
                <div >
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50 " style={{ margin: '0 auto' }}
                            src={Banner1}
                            alt="First slide"
                        />
                    </a>
                    <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                        <h5>True Wireless</h5>
                        <p>₹ 1999</p>
                    </div>
                </div>
                <div>
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50" style={{ margin: '0 auto' }}
                            src={Banner2}
                            alt="First slide"
                        />
                    </a>
                    <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                        <h5>Neckband</h5>
                        <p>₹ 2,156</p>
                    </div>
                </div>
                <div>
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50" style={{ margin: '0 auto' }}
                            src={Banner3}
                            alt="First slide"
                        />
                    </a>
                    <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                        <h5>Smart Watches</h5>
                        <p>₹ 2,990</p>
                    </div>
                </div>
                <div>
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50" style={{ margin: '0 auto' }}
                            src={Banner4}
                            alt="First slide"
                        />
                    </a>
                    <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                        <h5>PowerBanks</h5>
                        <p>₹ 1990</p>
                    </div>
                </div>
                <div>
                    <a href="https://example.com/page1">
                        <img
                            className="d-block w-50" style={{ margin: '0 auto' }}
                            src={Banner5}
                            alt="First slide"
                        />
                    </a>
                    <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                        <h5>Surveillance Devices</h5>
                        <p>₹ 1,799</p>
                    </div>
                </div>
                {/* Add more slides as needed */}
            </Slider>

        </Container>


    );
};

export default SimpleCarousel;
