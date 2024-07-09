import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./Components/Navigationbar";
import { Provider } from "react-redux";

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
import Smarttv from "./Components/Smarttv";
import Filter from "./Components/Filter";
import Details from "./Components/Details";
import ProductColors from "./Components/ProductColors";
import NotFound from "./Components/NotFound";
import Video from "./Components/Video";
import Check from "./Components/Check";
import Shopcart from "./Components/Shopcart";
import Earbuds from "./Components/Earbuds";
import Wishlist from "./Components/Wishlist";
import OrderHistory from "./Components/OrderHistory";
import { Forgot } from "./Components/ForgotPassword";
import { Reset } from "./Components/ResetPassword";
import Iphones from "./Components/Iphones";
import Basicphones from "./Components/Basicphones";
import Laptop from "./Components/2in1laptops";
import Hdtvs from "./Components/HDtv";
import FullHdtv from "./Components/FullHdtv";
import Androidtv from "./Components/Androidtv";
import Fitnesswatch from "./Components/Fitnesswatch";
import Soundbars from "./Components/Soundbars";
import Gaminglaptop from "./Components/Gaminglaptop";
import Bluetoothspeaker from "./Components/Bluetoothspeaker";
import Qledtv from "./Components/Qledtv";
import Oledtv from "./Components/Oledtv";
import Powerbanks from "./Components/Powerbanks";
import Windowslaptop from "./Components/Windowslaptop";
import Partyspeaker from "./Components/Partyspeaker";
import Portable from "./Components/Portable";
import Smartspeaker from "./Components/Smartspeaker";
import Wired from "./Components/Wired";
import Chargers from "./Components/Chargers";
import Adaptor from "./Components/Adaptor";
import Cables from "./Components/Cables";
import Wireless from "./Components/Wireless";
import Straps from "./Components/Straps";
import Ipads from "./Components/Ipads";
import Tabs from "./Components/Tabs";
import Macbookpro from "./Components/Macbookpro";
import Macbookair from "./Components/Macbookair";

import AdminLayout from "./layouts/AdminLayout";
import EcommerceLayout from "./layouts/EcomLayout";
 
// admin layout

import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashbaord";
import Inventory from "./pages/Inventory";
import Transaction from "./pages/Transaction";
import Invoice from "./pages/Invoice";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";
import UserCreate from "./pages/Users/UserCreate";
import Userlist from "./pages/Users/Userlist";
import UserView from "./pages/Users/UserView";
import UserEdit from "./pages/Users/UserEdit";
import ProductCreate from "./pages/Products/ProductCreate";
import Productlist from "./pages/Products/Productlist";
import ProductView from "./pages/Products/ProductView";
import ProductEdit from "./pages/Products/ProductEdit";
import CategoryCreate from "./pages/Category/CategoryCreate";
import Categorylist from "./pages/Category/Categorylist";
import CategoryView from "./pages/Category/CategoryView";
import CategoryEdit from "./pages/Category/CategoryEdit";

export default function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Navigationbar /> */}

        <Routes>
          <Route
            exact
            path="/"
            element={
              <EcommerceLayout>
                <Home />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/Details/:id"
            element={
              <EcommerceLayout>
                <Details />
              </EcommerceLayout>
            }
          >
            {" "}
          </Route>
          <Route
            path="/ProductColors"
            element={
              <EcommerceLayout>
                <ProductColors />
              </EcommerceLayout>
            }
          >
            {" "}
          </Route>
          <Route
            path="/checkout"
            element={
              <EcommerceLayout>
                <Check />
              </EcommerceLayout>
            }
          >
            {" "}
          </Route>
          <Route
            path="/iphones"
            element={
              <EcommerceLayout>
                <Iphones />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/smartphones"
            element={
              <EcommerceLayout>
                <Filter />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/basicphones"
            element={
              <EcommerceLayout>
                <Basicphones />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/powerbanks"
            element={
              <EcommerceLayout>
                <Powerbanks />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/Accessories/chargers"
            element={
              <EcommerceLayout>
                <Chargers />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/Accessories/adapters"
            element={
              <EcommerceLayout>
                <Adaptor />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/macbooklaptop/mackbookpro"
            element={
              <EcommerceLayout>
                <Macbookpro />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/macbooklaptop/mackbookair"
            element={
              <EcommerceLayout>
                <Macbookair />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/2in1laptop"
            element={
              <EcommerceLayout>
                <Laptop />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/gaminglaptop"
            element={
              <EcommerceLayout>
                <Gaminglaptop />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/windowslaptop"
            element={
              <EcommerceLayout>
                <Windowslaptop />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/hdtvs"
            element={
              <EcommerceLayout>
                <Hdtvs />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/fullhdtvs"
            element={
              <EcommerceLayout>
                <FullHdtv />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/qledtvs"
            element={
              <EcommerceLayout>
                <Qledtv />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/oledtvs"
            element={
              <EcommerceLayout>
                <Oledtv />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/AndroidTvs"
            element={
              <EcommerceLayout>
                <Androidtv />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/FitnessTracker"
            element={
              <EcommerceLayout>
                <Fitnesswatch />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/SoundBars"
            element={
              <EcommerceLayout>
                <Soundbars />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/Wireless"
            element={
              <EcommerceLayout>
                <Wireless />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/straps"
            element={
              <EcommerceLayout>
                <Straps />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/tab&ipad/IPad"
            element={
              <EcommerceLayout>
                <Ipads />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/tab&ipad/Tab"
            element={
              <EcommerceLayout>
                <Tabs />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/TrueWireless/Earbuds"
            element={
              <EcommerceLayout>
                <Earbuds />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/bluetoothspeakers"
            element={
              <EcommerceLayout>
                <Bluetoothspeaker />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/partyspeakers"
            element={
              <EcommerceLayout>
                <Partyspeaker />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/portablespeakers"
            element={
              <EcommerceLayout>
                <Portable />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/smartspeakers"
            element={
              <EcommerceLayout>
                <Smartspeaker />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/wired"
            element={
              <EcommerceLayout>
                <Wired />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/Accessories/Cables&Connectors"
            element={
              <EcommerceLayout>
                <Cables />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/forgot"
            element={
              <EcommerceLayout>
                <Forgot />
              </EcommerceLayout>
            }
          >
            {" "}
          </Route>
          <Route
            path="/reset/:id"
            element={
              <EcommerceLayout>
                <Reset />
              </EcommerceLayout>
            }
          >
            {" "}
          </Route>
          <Route
            path="/shopcart"
            element={
              <EcommerceLayout>
                <Shopcart />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/news"
            element={
              <EcommerceLayout>
                <News />
              </EcommerceLayout>
            }
          >
            {" "}
          </Route>
          <Route
            path="/NewsProductPage"
            element={
              <EcommerceLayout>
                <NewsProductPage />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/video"
            element={
              <EcommerceLayout>
                <Video />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            exact
            path="/profile"
            element={
              <EcommerceLayout>
                <UserProfile />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/smarttvs"
            element={
              <EcommerceLayout>
                <Smarttv />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            exact
            path="/about"
            element={
              <EcommerceLayout>
                <About />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            exact
            path="/contact"
            element={
              <EcommerceLayout>
                <Contact />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            exact
            path="/privacypolicy"
            element={
              <EcommerceLayout>
                <PrivacyPolicy />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            exact
            path="/termsandconditions"
            element={
              <EcommerceLayout>
                <Termsandconditions />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            exact
            path="/faq"
            element={
              <EcommerceLayout>
                <FAQ />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            exact
            path="*"
            element={
              <EcommerceLayout>
                <NotFound />
              </EcommerceLayout>
            }
          ></Route>
          <Route
            path="/wishlist"
            element={
              <EcommerceLayout>
                <Wishlist />
              </EcommerceLayout>
            }
          >
            {" "}
          </Route>
          <Route
            path="/yourorders"
            element={
              <EcommerceLayout>
                <OrderHistory />
              </EcommerceLayout>
            }
          >
            {" "}
          </Route>

          {/* admin layout */}

          <Route path="/dashboard" element={  <AdminLayout><Dashboard /></AdminLayout>}></Route>
          <Route
            path="/inventory"
            element={
              <AdminLayout>
                <Inventory />
              </AdminLayout>
            }
          ></Route>
            <Route
            path="/invoice"
            element={
              <AdminLayout>
                <Invoice />
              </AdminLayout>
            }
          ></Route>
            <Route
            path="/transactions"
            element={
              <AdminLayout>
                <Transaction />
              </AdminLayout>
            }
          ></Route>
          <Route
            path="/orders"
            element={
              <AdminLayout>
                <Orders />
              </AdminLayout>
            }
          ></Route>
          <Route
            path="/settings"
            element={
              <AdminLayout>
                <Settings />
              </AdminLayout>
            }
          ></Route>
          <Route
            path="/customers"
            element={
              <AdminLayout>
                <Customers />
              </AdminLayout>
            }
          ></Route>
          <Route
            path="/user-list"
            element={
              <AdminLayout>
                <Userlist />
              </AdminLayout>
            }
          />
          <Route
            path="/create-user"
            element={
              <AdminLayout>
                <UserCreate />
              </AdminLayout>
            }
          />
          <Route
            path="/user-view/:id"
            element={
              <AdminLayout>
                <UserView />
              </AdminLayout>
            }
          />
          <Route
            path="/user-edit/:id"
            element={
              <AdminLayout>
                <UserEdit />
              </AdminLayout>
            }
          />
          <Route
            path="/product-list"
            element={
              <AdminLayout>
                <Productlist />
              </AdminLayout>
            }
          />
          <Route
            path="/create-product"
            element={
              <AdminLayout>
                <ProductCreate />
              </AdminLayout>
            }
          />
          <Route
            path="/product-view/:id"
            element={
              <AdminLayout>
                <ProductView />
              </AdminLayout>
            }
          />
          <Route
            path="/product-edit/:id"
            element={
              <AdminLayout>
                <ProductEdit />
              </AdminLayout>
            }
          />
             <Route
            path="/category-list"
            element={
              <AdminLayout>
                <Categorylist />
              </AdminLayout>
            }
          />
          <Route
            path="/create-category"
            element={
              <AdminLayout>
                <CategoryCreate />
              </AdminLayout>
            }
          />
          <Route
            path="/category-view/:id"
            element={
              <AdminLayout>
                <CategoryView />
              </AdminLayout>
            }
          />
          <Route
            path="/category-edit/:id"
            element={
              <AdminLayout>
                <CategoryEdit />
              </AdminLayout>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}
