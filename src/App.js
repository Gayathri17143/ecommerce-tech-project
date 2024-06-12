
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigationbar from "./Components/Navigationbar"; 
import { Provider } from 'react-redux'
// import ResetPassword from "./Components/ResetPassword";

import Footer from "./Components/Footer";
 import About from "./pages/Extra/About";
 import Contact from "./pages/Extra/Contact";
 import PrivacyPolicy from "./pages/Extra/PrivacyPolicy";
 import Termsandconditions from "./pages/Extra/Termsandconditions";
 import FAQ from "./pages/Extra/FAQ";
import UserProfile from "./Components/UserProfile";
import Home from "./Components/Home"; 
import News from "./Components/News";
import NewsProductPage from "./Components/NewsProductPage";
import Productpage from "./Components/Productpage";
import Filter from "./Components/Filter" 
import Details from "./Components/Details";  
import ProductColors from "./Components/ProductColors"; 
import NotFound from "./Components/NotFound";
import Video from "./Components/Video";
import Check from "./Components/Check";
import Shopcart from "./Components/Shopcart";
// import {Provider } from 'react-redux'
// import Shoppingcart from './Components/Shoppingcart'
import Wishlist from "./Components/Wishlist";
import OrderHistory from "./Components/OrderHistory";
export default function App() {
     
      return (
            <>
            {/* <Provider Shoppingcart={Shoppingcart} > */}
             <Router>
                  <Navbar />
                  <Navigationbar />
                  <Routes>
                        <Route exact path="/" element={<Home />} ></Route>
                        <Route path="/Details/:id" element={<Details/>} > </Route> 
                        <Route path="/ProductColors" element={<ProductColors/>} > </Route> 
                        <Route path="/checkout" element={<Check/>} > </Route> 
                        <Route path="/smartphones" element={<Filter/>} ></Route>
                        <Route path="/shopcart" element={<Shopcart/>} ></Route>
                        <Route path="/news" element={<News/>} > </Route>
                        <Route path="/NewsProductPage" element={<NewsProductPage/>}></Route>
                        <Route path="/video" element={<Video/>}></Route>
                        <Route exact path="/profile" element={<UserProfile />} ></Route>
                        <Route path="/Productpage" element={<Productpage/>}></Route>
                        <Route exact path="/about" element={<About />} ></Route>
                        <Route exact path="/contact" element={<Contact />} ></Route>
                        <Route exact path="/privacypolicy" element={<PrivacyPolicy/>} ></Route>
                        <Route exact path="/termsandconditions" element={<Termsandconditions/>} ></Route>
                        <Route exact path="/faq" element={<FAQ/>} ></Route>
                        <Route exact path="*" element={<NotFound/>} ></Route>
                        <Route path="/wishlist" element={<Wishlist/>} > </Route> 
                        <Route path="/yourorders" element={ <OrderHistory/>} > </Route> 
                  </Routes>
                  
                  
 
                  <Footer />

            </Router>
            {/* </Provider> */}
            </>
           
      );
}
