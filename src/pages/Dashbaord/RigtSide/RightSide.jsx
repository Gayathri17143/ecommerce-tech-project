import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="">
      <div className="mar">
        <h3 style={{color:"#e0e0e0"}}>Updates</h3>
        <Updates />
      </div>
      <div className="mar">
        <h3  style={{color:"#e0e0e0"}}>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
