import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col, Card } from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap';
 import realme from "../assets/realme-12-plus.jpg";
 import oppo from "../assets/oppo-f25-pro.jpg";
 import vivo from "../assets/vivo-v30-pro.jpg";
 import samsung from "../assets/samsung-galaxy-m15.jpg";
 import oneplus from "../assets/oneplus-ace-3v.png";
 import tecno from "../assets/pova.webp";
const NewsComponent = () => {
  const [product, setProduct] = useState([]);
  const data = [
    {
      img: realme,
      title: "Realme 12 Plus 5G",
      star: "⭐",
      prevPrice: "₹25999.00",
      reviews: "100 reviews",
      Price: "₹21999.00"
    },
    {
      img: oppo,
      title: "Oppo F25 Pro 5G",
      star: "⭐⭐",
      prevPrice: "₹29999.00",
      reviews: "150 reviews",
      Price: "₹25999.00"
    },
    {
      img: vivo,
      title: "Vivo V30 Pro 5G",
      star: "⭐",
      prevPrice: "₹51999.00",
      reviews: "200 reviews",
      Price: "₹46999.00"
    },
    {
      img: samsung,
      title: "Samsung Galaxy M15",
      star: "⭐",
      prevPrice: "₹17999.00",
      reviews: "250 reviews",
      Price: "₹13499.00"
    },
    {
      img: oneplus,
      title: "OnePlus Ace 3V",
      star: "⭐",
      prevPrice: "₹25999.00",
      reviews: "250 reviews",
      Price: "₹23490.00"
    },
    {
      img: tecno,
      title: "Tecno Pova 6 Pro",
      star: "⭐",
      prevPrice: "₹21999.00",
      reviews: "250 reviews",
      Price: "₹19999.00"
    }

  ];
  useEffect(() => {
    // Fetch news data from API
    fetch('')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProduct(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Autoplay speed in milliseconds
    pauseOnHover: true,
  };

  return (
    <Container >
      <h2>Latest Products</h2>
      {/* <Slider {...settings}> */}
      <Row>
        {data.map((item, index) => (
          <Col md={4} sm={6} xs={12} style={{padding:"20px"}}>
          <div className="item" key={index}>
            <Card  >
              <img src={item.img} alt={item.title}  style={{width:"50%",margin:"0 auto",paddingTop:"20px"}}/>
              <Card.Title style={{textAlign:"center",paddingTop:"10px"}}>{item.title}</Card.Title>
              <Card.Body>
              <Row>
              <Col md={6} sm={6} xs={12} style={{padding:"20px"}}>
              <Card.Text> {item.star}{item.star}{item.star}</Card.Text>
              <Card.Text><del>{item.prevPrice}</del> </Card.Text>
              </Col>
              <Col md={6} sm={6} xs={12} style={{padding:"20px"}}>
              <Card.Text> {item.reviews}</Card.Text>
            
              <Card.Text> {item.Price}</Card.Text>
              </Col>
              </Row>
                
                <LinkContainer to={'/'}><button >View More</button></LinkContainer>
              </Card.Body>
            </Card>
          </div>
          </Col>
          
        ))}
         
        </Row>
      {/* </Slider> */}
    </Container>
  );
};

export default NewsComponent;
