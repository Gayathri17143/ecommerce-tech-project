import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { Button } from "@mui/material";
import "./Latestproduct.css";

import realme from "../assets/realme-12-plus.jpg";
import oppo from "../assets/oppo-f25-pro.jpg";
import vivo from "../assets/vivo-v30-pro.jpg";
import samsung from "../assets/samsung-galaxy-s23-5g.jpg";
// import oneplus from "../assets/oneplus-ace-3v.png";
// import tecno from "../assets/pova.webp";
import ProductCard from "./ProductCard";

const Component = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: realme,
      title: "Realme 12 Plus 5G",
      Price: "21999",
      inWishlist: false,
    },
    {
      id: 2,
      img: oppo,
      title: "Oppo F25 Pro 5G",
      Price: "25999",
      inWishlist: false,
    },
    {
      id: 3,
      img: vivo,
      title: "Vivo V30 Pro 5G",
      Price: "46999",
      inWishlist: false,
    },
    {
      id: 4,
      img: samsung,
      title: "Samsung Galaxy M15",
      Price: "13499",
      inWishlist: false,
    },
    // {
    //   id: 5,
    //   img: oneplus,
    //   title: "OnePlus Ace 3V",
    //   Price: "23490",
    //   inWishlist: false,
    // },
    // {
    //   id: 6,
    //   img: tecno,
    //   title: "Tecno Pova 6 Pro",
    //   Price: "19999",
    //   inWishlist: false,
    // },
  ]);

  const toggleWishlist = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, inWishlist: !product.inWishlist }
        : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };
  useEffect(() => {
    const fetchDataFromLocalStorage = () => {
      const storedProducts = localStorage.getItem("products");
      if (storedProducts) {
        setProducts(JSON.parse(storedProducts));
      }
    };

    fetchDataFromLocalStorage();
  }, []);

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
    <div>
      <Container>
        <h3 className="title">Latest Products</h3>

        <Slider {...settings}>
          {products.map((product) => (
            <div className="" key={product.id}>
              <div className="product-image-wrapper">
                <ProductCard
                  key={product.id}
                  product={product}
                  onToggleWishlist={toggleWishlist}
                />
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Component;
