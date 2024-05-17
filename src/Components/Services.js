import React from "react"
import "./Services.css"
import { Container, Row, Col, Card } from "react-bootstrap"

const Wrapper = () => {
  
  return (
    <Container>
      <section className='wrapper '>
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
      </section>
    </Container>
  )
}

export default Wrapper
