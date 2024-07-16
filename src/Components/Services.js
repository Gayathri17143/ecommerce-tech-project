import React from "react"
import "./Services.css"
import { Container } from "@mui/material";
import {   Row, Col, Card } from "react-bootstrap"
import ServiceImg from '../assets/service.png';
import ServiceImg2 from '../assets/service-02.png';
import ServiceImg3 from '../assets/service-03.png';
import ServiceImg4 from '../assets/service-04.png';
import ServiceImg5 from '../assets/service-05.png';
const Wrapper = () => {
  
  return (
    <Container>
      
       <section className='home-wrapper-2'  >
        <div className='container-xxl'>
          <div className='row' style={{marginTop:"15px"}}>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center row'>
                  <Col lg={3}>
                  <img src={ServiceImg} alt='services'/></Col>
                  <Col lg={9}>
                    <h6 >Free Shipping</h6>
                    <p className='mb-0'>From all orders over $100</p>
                  </Col>
                </div>
                <div className='d-flex align-items-center row'>
                  <Col lg={3}>
                <img src={ServiceImg2} alt='services'/></Col>
                  <Col lg={9}>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25% Off</p>
                  </Col>
                </div>
                <div className='d-flex align-items-center row'>
                  <Col lg={3}>
                <img src={ServiceImg3} alt='services'/></Col>
                  <Col lg={9}>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an Expert</p>
                  </Col>
                </div>
                <div className='d-flex align-items-center row'>
                  <Col lg={3}>
                <img src={ServiceImg5} alt='services'/></Col>
                  <Col lg={9}>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payment</p>
                  </Col>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Wrapper
