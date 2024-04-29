

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Bannercarousel from "./Bannercarousel";
import FeaturedProducts from "./FeaturedProducts";

// import ResetPassword from "./Components/ResetPassword";
import Shopbyprice from "./Shopbyprice"
import TrendingProducts from "./TrendingProducts";
import Reviews from "./Reviews";
import Brandlogos from "./Brandlogos";
import React from 'react';
import ImageGrid from "./ImageGrid";
 import Services from "./Services";
 import Product from "../Components/Product";
 import Newsletter from "../Components/Newsletter";
 import Productpage from "../Components/Productpage";

export default function App() {

      
      return (
            <>
 
                  <Bannercarousel />
                  <ImageGrid />
                  {/* <Product/> */}
                   <Productpage/>
                  <FeaturedProducts/>
                  <Brandlogos/>
                  <Services/>
                  <TrendingProducts />
                  <Newsletter/>
            </>
      );
}
