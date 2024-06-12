import React from "react"
import "./Services.css"
import { Container, Row, Col, Card } from "react-bootstrap"
import ServiceImg from '../assets/service.png';
import ServiceImg2 from '../assets/service-02.png';
import ServiceImg3 from '../assets/service-03.png';
import ServiceImg4 from '../assets/service-04.png';
import ServiceImg5 from '../assets/service-05.png';
const Wrapper = () => {
  
  return (
    <>
      {/* <section className='wrapper '>
        <div className=' d-flex'>
          <Row className="d-flex">
            <Col md={2} sm={6} xs={12}>
              <i class='fa-solid fa-truck-fast'></i>
            </Col>
            <Col md={10} sm={6} xs={12}>
              <Card.Title>Worldwide Delivery</Card.Title>
            </Col>
          </Row>
          <Row className="d-flex">
            <Col md={3} sm={6} xs={12}>
              <i class='fa-solid fa-id-card'></i>
            </Col>
            <Col md={9} sm={6} xs={12}>
              <Card.Title>Safe Payment</Card.Title>
            </Col>
          </Row>
          <Row className="d-flex">
            <Col md={3} sm={6} xs={12}>
              <i class='fa-solid fa-headset'></i>
            </Col>
            <Col md={9} sm={6} xs={12}>
              <Card.Title>24/7 Support</Card.Title>
            </Col>
          </Row>

        </div>
      </section> */}
       <section className='home-wrapper-2' style={{background: '#92b0a3'}}>
        <div className='container-xxl'>
          <div className='row'>
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
                {/* <div className='d-flex align-items-center row'>
                  <Col>
                <img src={ServiceImg4} alt='services'/></Col>
                  <Col>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </Col>
                </div> */}
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
    </>
  )
}

export default Wrapper
