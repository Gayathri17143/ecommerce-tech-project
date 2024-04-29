import React from "react";
import "./FeaturedProducts.css";
import Realme from "../assets/realme-12-plus.jpg"; 
import Oppo from "../assets/oppo-f25-pro.jpg"; 
import Watch from "../assets/oppo-watch-x.jpg"; 
import Vivo from "../assets/vivo-v30-pro.jpg"; 
import Oneplus from "../assets/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg"; 
import Samsung from "../assets/samsung-galaxy-m15.jpg"; 

import { Container } from 'react-bootstrap';
const ImageGrid = () => {
  return (
    <Container>
 <div  >
    <h1 className="head">Feature Products</h1>
    <div className="grid-container-0">
     
      <div className="grid-item-0">
       <a href="/"> <img src={Realme} alt="Realme" />
        <div className="image-text-0">Realme 12+</div>
        <p className="small">From ₹11,200</p></a>
      </div>
      <div className="grid-item-0">
        <img src={Oppo} alt="Oppo" />
        <div className="image-text-0">Oppo F25 Pro</div>
        <p className="small">From ₹23,200</p>
      </div>
      <div className="grid-item-0">
        <img src={Watch} alt="Watch" />
        <div className="image-text-0">
        Oppo Watch X
        </div>
        <p className="small">From ₹5,200</p>
      </div>
      <div className="grid-item-0">
        <img src={Vivo} alt="Vivo" />
        <div className="image-text-0">
        Vivo V30 Pro
        </div>
        <p className="small">From ₹20,200</p>
      </div>
      <div className="grid-item-0">
        <img src={Oneplus} alt="Oneplus" />
        <div className="image-text-0">
        Samsung Galaxy S24 ultra 5G
        </div>
        <p className="small">From ₹11,200</p>
      </div>
      <div className="grid-item-0">
        <img src={Samsung} alt="Samsung" />
        <div className="image-text-0">
        Samsung Galaxy M15
        </div>
        <p className="small">From ₹25,200</p>
      </div>
    </div>
    </div>
    </Container>
 
  );
};

export default ImageGrid;
