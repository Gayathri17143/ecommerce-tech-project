

import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigationbar from "./Components/Navigationbar";
import Bannercarousel from "./Components/Bannercarousel";
import FeaturedProducts from "./Components/FeaturedProducts";

// import ResetPassword from "./Components/ResetPassword";
import Footer from "./Components/Footer";
// import Reviews from "./Components/Reviews";
import UserProfile from "./Components/UserProfile";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import News from "./Components/News";
import NewsProductPage from "./Components/NewsProductPage";
import Productpage from "./Components/Productpage";
import Filter from "./Components/Filter" 
import Hero from "./pages/Hero";
// import {Provider } from 'react-redux'
// import store from './store/store'
export default function App() {
      return (
            <>
            {/* <Provider Hero={Hero} > */}
             <Router>
                  <Navbar />
                  <Navigationbar />
                  {/* <Router> */}
                  <Routes>

                        <Route exact path="/" element={<Home />} ></Route>
                        <Route path="/Hero/:id" element={<Hero/>} > </Route>
                        <Route path="/smartphones" element={<Filter/>} ></Route>
                        <Route path="/news" element={<News/>} > </Route>
                        <Route path="/NewsProductPage" element={<NewsProductPage/>}></Route>
                        <Route exact path="/profile" element={<UserProfile />} ></Route>
                        <Route path="/Productpage" element={<Productpage/>}></Route>
                        {/* <Route exact path="/categories" element={<Categories />} ></Route> */}
                  </Routes>
                  {/* </Router> */}


                  {/* <Bannercarousel /> */}
                  {/* <Firstmain /> */}
                  {/* <ResetPassword/> */}

                  {/* <FeaturedProducts/> */}
                  {/* <Reviews/> */}
                  <Footer />

            </Router>
            {/* </Provider> */}
            </>
           
      );
}
