
import Bannercarousel from "./Bannercarousel";
import FeaturedProducts from "./FeaturedProducts";
import Newsletter from "./Newsletter";
import TrendingProducts from "./TrendingProducts"; 
import Brandlogos from "./Brandlogos";
import React from 'react';
import ImageGrid from "./ImageGrid";
 import Services from "./Services"; 
 import Productpage from "../Components/Productpage"; 
export default function App() {

      
      return (
            <>
                  <Bannercarousel />
                  <ImageGrid />
                
                  <Services/>
                   <Productpage/>
                   <Brandlogos/>
                   <FeaturedProducts/>
                   <TrendingProducts />
                   <Newsletter />
            </>
      );
}
