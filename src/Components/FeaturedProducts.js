import { useEffect, useState } from "react";
// import "./FeaturedProducts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Realme from "../assets/realme-12-plus.jpg";
import Oppo from "../assets/oppo-f25-pro.jpg";
import Watch from "../assets/oppo-watch-x.jpg";
import Vivo from "../assets/vivo-v30-pro.jpg";
import Oneplus from "../assets/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg";
import Samsung from "../assets/samsung-galaxy-m15.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
// import { Container } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
const ImageGrid = () => {
  const [product, setProduct] = useState([]);
  const data = [
    {
      img: Realme,
      title: "Realme 12 Plus 5G",
      Price: "₹21999.00",
    },
    {
      img: Oppo,
      title: "Oppo F25 Pro 5G",
      Price: "₹25999.00",
    },
    {
      img: Vivo,
      title: "Vivo V30 Pro 5G",
      Price: "₹46999.00",
    },
    {
      img: Samsung,
      title: "Samsung Galaxy M15",
      Price: "₹13499.00",
    },
    {
      img: Oneplus,
      title: "OnePlus Ace 3V",
      Price: "₹23490.00",
    },
    {
      img: Watch,
      title: "Tecno Pova 6 Pro",
      Price: "₹19999.00",
    },
  ];
  useEffect(() => {
    // Fetch news data from API
    fetch("")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProduct(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // Autoplay speed in milliseconds
    pauseOnHover: true,
  };
  return (
    <Container>
      <h3>Featured Products</h3>
      <Slider {...settings}>
        {/* <Row> */}
        {data.map((item, index) => (
          // <Col  md={6} sm={6} xs={12} style={{padding:"20px"}}>
          <div className="item" key={index}>
            <Card style={{ margin: "10px" }}>
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "50%", margin: "0 auto", paddingTop: "20px" }}
              />

              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "left",
                    paddingTop: "10px",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </Card.Title>
                <Card.Text
                  style={{ color: "rgb(44 39 39);", fontSize: "18px" }}
                >
                  {" "}
                  {item.Price}
                </Card.Text>

                <a href="/">View More</a>
              </Card.Body>
            </Card>
          </div>
          // </Col>
        ))}

        {/* </Row> */}
      </Slider>
    </Container>
  );
};

export default ImageGrid;
