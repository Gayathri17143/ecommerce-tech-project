import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import { Row,Col } from "antd";
import RightSide from "../RigtSide/RightSide";
const MainDash = () => {
  return (
    <div className="" style={{width:"1200px" }}  >
      <h3>Dashboard</h3>
      <Row  >
        <Col>
        <div className="mar"><Cards /></div> 
        <div className="mar"><Table /></div>
        </Col>

      </Row>
      
    </div>
  );
};

export default MainDash;
