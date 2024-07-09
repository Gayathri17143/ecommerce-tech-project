import React from 'react';
import './ImageGrid.css';
import Image1 from '../assets/audio-speaker.png';
import Image2 from '../assets/smart-watch.png';
import Image3 from '../assets/mob-discount.png';
import { Container } from '@mui/material';
const ImageGrid = () => {
  return (
    <Container>

    <div className="grid-container" >
      <div className="grid-item">
        <img src={Image1} alt="text" />
        <div className="image-text">Audio speaker</div>
        <a href='/bluetoothspeakers' className="image-text1">Shop Now</a>
         
      </div>
      <div className="grid-item">
        <img src={Image2} alt="text" />
        <div className="image-text">Smart Watches </div>
        <a href='/FitnessTracker' className="image-text1">Shop Now</a>
      </div>
      <div className="grid-item">
        <img src={Image3} alt="text" />
        <div className="image-text">Biggest Discount </div>
        <a href='/smartphones' className="image-text1">Shop Now</a>
      </div>
    </div>
    
    </Container>
  );
};

export default ImageGrid;
