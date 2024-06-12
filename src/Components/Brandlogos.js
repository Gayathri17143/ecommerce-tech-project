import React from 'react'
import Carousel from 'react-grid-carousel'
import Image1 from '../assets/brand-01.png'
import Image2 from '../assets/brand-02.png'
import Image3 from '../assets/brand-03.png'
import Image4 from '../assets/brand-04.png'
import Image5 from '../assets/brand-05.png'
import Image6 from '../assets/brand-06.png'
import Image7 from '../assets/brand-07.png'
import Image8 from '../assets/brand-08.png' 
import Marquee from "react-fast-marquee";
const Gallery = () => {
  return (
     
    <div className="container"  >
      {/* <Carousel cols={4} rows={1} gap={2} loop>
        <Carousel.Item>
          <a href="/" target='_blank'>
          <img style={{ width: "50%", display: "block", marginRight: "auto", marginLeft: "auto" }} src={Image1} alt="text" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
        <a href="/" target='_blank'>
          <img style={{ width: "50%", display: "block", marginRight: "auto", marginLeft: "auto" }} src={Image2} alt="text" />
          </a> </Carousel.Item>
        <Carousel.Item>
        <a href="/" target='_blank'>
          <img style={{ width: "50%", display: "block", marginRight: "auto", marginLeft: "auto" }} src={Image3} alt="text" />
          </a> </Carousel.Item>
        <Carousel.Item>
        <a href="/" target='_blank'>
          <img style={{ width: "50%", display: "block", marginRight: "auto", marginLeft: "auto" }} src={Image4} alt="text" />
          </a>  </Carousel.Item>
        <Carousel.Item>
        <a href="/" target='_blank'>
          <img style={{ width: "50%", display: "block", marginRight: "auto", marginLeft: "auto" }} src={Image5} alt="text" />
          </a> </Carousel.Item>
        <Carousel.Item>
        <a href="/" target='_blank'>
          <img style={{ width: "50%", display: "block", marginRight: "auto", marginLeft: "auto" }} src={Image6} alt="text" />
          </a> </Carousel.Item>
        <Carousel.Item>
        <a href="/" target='_blank'>
          <img style={{ width: "50%", display: "block", marginRight: "auto", marginLeft: "auto" }} src={Image7} alt="text" />
          </a> </Carousel.Item>
        <Carousel.Item>
        <a href="/" target='_blank'>
          <img style={{ width: "50%", display: "block", marginRight: "auto", marginLeft: "auto" }} src={Image8} alt="text" />
          </a></Carousel.Item>
         
      </Carousel> */}
       <section className='marquee-wrapper'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex' style={{background:"#0000001c"}}>
                <div className='mx-4 w-25'>
                <a href="/" target='_blank'>
                  <img src={Image1} alt='brand' /></a>
                </div>
                <div className='mx-4 w-25'>
                <a href="/" target='_blank'>
                  <img src={Image2} alt='brand' /></a>
                </div>
                <div className='mx-4 w-25'>
                <a href="/" target='_blank'>
                  <img src={Image3} alt='brand' /></a>
                </div>
                <div className='mx-4 w-25'>
                <a href="/" target='_blank'>
                  <img src={Image4} alt='brand' /></a>
                </div>
                <div className='mx-4 w-25'>
                <a href="/" target='_blank'>
                  <img src={Image5} alt='brand' /></a>
                </div>
                <div className='mx-4 w-25'>
                <a href="/" target='_blank'>
                  <img src={Image6} alt='brand' /></a>
                </div>
                <div className='mx-4 w-25'>
                <a href="/" target='_blank'>
                  <img src={Image7} alt='brand' /></a>
                </div>
                <div className='mx-4 w-25'>
                <a href="/" target='_blank'>
                  <img src={Image8} alt='brand' /></a>
                </div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
     
  )
}
export default Gallery;

