import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import realme from "../assets/realme-12-plus.jpg";
import oppo from "../assets/oppo-f25-pro.jpg";
import vivo from "../assets/vivo-v30-pro.jpg";
import samsung from "../assets/samsung-galaxy-m15.jpg";
import oneplus from "../assets/oneplus-ace-3v.png";
import tecno from "../assets/pova.webp";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "../Components/Ratingstar";
import ShoppingCart from "../Components/Shoppingcart";
import "./Latestproduct.css";
const products = [
  {
    id: 1,
    img: realme,
    title: "Realme 12 Plus 5G",
    star: "3.2",
    Price: "21999",
  },
  {
    id: 2,
    img: oppo,
    title: "Oppo F25 Pro 5G",
    star: "4.4",
    Price: "25999",
  },
  {
    id: 3,
    img: vivo,
    title: "Vivo V30 Pro 5G",
    star: "3.9",
    Price: "46999",
  },
  {
    id: 4,
    img: samsung,
    title: "Samsung Galaxy M15",
    star: "3.8",
    Price: "13499",
  },
  {
    id: 5,
    img: oneplus,
    title: "OnePlus Ace 3V",
    star: "4.4",
    Price: "23490",
  },
  {
    id: 6,
    img: tecno,
    title: "Tecno Pova 6 Pro",
    star: "4.6",
    Price: "19999",
  },
];
const Component = () => {
  const [cartsVisibilty, setCartVisible] = useState(false);
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
    window.location.reload();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // Autoplay speed in milliseconds
    pauseOnHover: true,
  };
  return (
    <div className="">
      <Container>
        <h3 className="title">Latest Products</h3>
        <Slider {...settings}>
         
            {products.map((product) => (
              <div className="product" key={product.id}>
                <img
                  className="product-image"
                  src={product.img}
                  alt={product.img}
                />
                 <h4 className="product-name">{product.title}</h4>
                <Row>
                  <Col> <span className="product-price">₹{product.Price}</span>
                  </Col>
                  <Col> <RatingStars rating={product.star} />
                  </Col>
                </Row>
                
                <Row>
                  <Col>
                  <button
                    style={{ border: "1px solid #c1c1c1" }}
                    className="btn"
                  >
                    Buy now
                  </button></Col>
                 <Col> <button
                    style={{ border: "1px solid #c1c1c1" }}
                    className="btn"
                    onClick={() => addProductToCart(product)}
                  >
                    Add to cart
                  </button></Col>
                 
                </Row>
              </div>
            ))}
        
        </Slider>
      </Container>
    </div>
  );
};

export default Component;
