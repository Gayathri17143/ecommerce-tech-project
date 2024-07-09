import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Navigationbar from "../Components/Navigationbar";
const EcommerceLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Navigationbar/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default EcommerceLayout;
