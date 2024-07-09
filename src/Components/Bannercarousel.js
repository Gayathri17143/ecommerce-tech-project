import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link ,Container} from '@mui/material';
import Banner from '../assets/banner.webp';
import Banner2 from '../assets/macbookbanner.jpg';
import Banner3 from '../assets/iPhonebanner.jpg';
const MyCarousel = () => {
    return (
        <Container>
 
        <Carousel>
            
            <Carousel.Item>
                <Link href="/macbooklaptop/mackbookair">
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="Second slide"
                    />
                </Link>

            </Carousel.Item>
            <Carousel.Item>
                <Link href="/iphones">
                    <img
                        className="d-block w-100"
                        src={Banner3}
                        alt="Second slide"
                    />
                </Link>

            </Carousel.Item>
        </Carousel>
        </Container>
    );
};

export default MyCarousel;
