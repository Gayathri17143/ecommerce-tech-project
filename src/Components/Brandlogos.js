import React from 'react'
import Carousel from 'react-grid-carousel'
import Image1 from '../assets/Apple.png'
import Image2 from '../assets/oneplus.png'
import Image3 from '../assets/mi.png'
import Image4 from '../assets/vivo.png'
import Image5 from '../assets/oppo.png'
import Image6 from '../assets/Samsung.png'
import Image7 from '../assets/Tecno.png'
import Image8 from '../assets/realme.png'
import Image9 from '../assets/nokia.png'

const Gallery = () => {
  return (
     
    <div className="container" style={{padding: "30px",background:"#00274b3d",    border: "1px solid #220a0a" }}>
      <Carousel cols={5} rows={1} gap={2} loop>
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
        <Carousel.Item>
        <a href="/" target='_blank'>
          <img style={{ width: "50%", display: "block", marginRight: "auto", marginLeft: "auto" }} src={Image9} alt="text" />
          </a> </Carousel.Item>
       


        {/* ... */}
      </Carousel>
    </div>
     
  )
}
export default Gallery;

