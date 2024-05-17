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

const Gallery = () => {
  return (
     
    <div className="container" style={{padding: "30px" }}>
      <Carousel cols={4} rows={1} gap={2} loop>
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
        
       


        {/* ... */}
      </Carousel>
    </div>
     
  )
}
export default Gallery;

