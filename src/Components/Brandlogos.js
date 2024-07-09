import React from 'react'
import Carousel from 'react-grid-carousel'
import { Container } from '@mui/material'
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
     
    < Container >
      
       <section className='marquee-wrapper'>
        {/* <div className='container-xxl'> */}
          
          <div className='row' style={{margin:"3%"}}>
          <h3 className="title" style={{marginBottom:"1.0rem"}}>Shop By Brand</h3>
            <div className='col-12'>
              
              <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex' style={{background:" #bae6ff"  }}>
                <div className='  w-75'>
                <a href="/" target='_blank'>
                  <img src={Image1} alt='brand'  /></a>
                </div>
                <div className='  w-75'>
                <a href="/" target='_blank'>
                  <img src={Image2} alt='brand' /></a>
                </div>
                <div className='  w-75'>
                <a href="/" target='_blank'>
                  <img src={Image3} alt='brand' /></a>
                </div>
                <div className='  w-75'>
                <a href="/" target='_blank'>
                  <img src={Image4} alt='brand' /></a>
                </div>
                <div className='  w-75'>
                <a href="/" target='_blank'>
                  <img src={Image5} alt='brand' /></a>
                </div>
                <div className='  w-75'>
                <a href="/" target='_blank'>
                  <img src={Image6} alt='brand' /></a>
                </div>
                <div className='  w-75'>
                <a href="/" target='_blank'>
                  <img src={Image7} alt='brand' /></a>
                </div>
                <div className='  w-75'>
                <a href="/" target='_blank'>
                  <img src={Image8} alt='brand' /></a>
                </div>
              </Marquee>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>
    </Container>
     
  )
}
export default Gallery;

