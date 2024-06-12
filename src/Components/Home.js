

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Bannercarousel from "./Bannercarousel";
import FeaturedProducts from "./FeaturedProducts";

// import ResetPassword from "./Components/ResetPassword";

import TrendingProducts from "./TrendingProducts";

import Brandlogos from "./Brandlogos";
import React from 'react';
import ImageGrid from "./ImageGrid";
 import Services from "./Services"; 
 import Productpage from "../Components/Productpage";
// import { Checkbox } from "@material-ui/core";

import MyOrders from "./Myorders"; 
// import OrderHistory from "./OrderHistory";
export default function App() {

      
      return (
            <>
                  <Bannercarousel />
                  <ImageGrid />
                 {/* <OrderHistory/> */}
                  <Services/>
                   <Productpage/>
                   <Brandlogos/>
                   <FeaturedProducts/>
                   <TrendingProducts />
            </>
      );
}
