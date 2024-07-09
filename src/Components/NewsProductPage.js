import React from "react";
import { useState, useEffect } from "react";
import realme from "../assets/news-realme.webp";
import samsung from "../assets/news-samsung.webp";
import bolt from "../assets/news-Fire-Boltt.webp";
import earbuds from "../assets/news-tws-earbuds.webp";
import { News1 } from "../Components/NewsProductdata";
import {  Row, Col, Card } from "react-bootstrap";
import { Container } from "@mui/material";
import News from "../Components/News";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsProductPage.css";
const TrendingNewsComponent = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY"
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);
  const NewsData = {
    headlines: [
      {
        desc: "2024 Samsung Crystal 4K TV series with 4K upscaling, 3D surround sound, and more launched in India: price, features",
        image: samsung,
      },
      {
        desc: "Fire Boltt Oracle with LTE calling, 1.96-inch HD display launched in India: price, specifications",
        image: bolt,
      },
      {
        desc: "Best TWS earbuds in India under Rs 6,000 in April 2024: OnePlus Buds 3, OPPO Enco Air3 Pro, and more",
        image: earbuds,
      },
      {
        desc: "2024 Samsung Crystal 4K TV series with 4K upscaling, 3D surround sound, and more launched in India: price, features",
        image: samsung,
      },
    ],
    
  };
  // Sample data for demonstration
  const trendingNewsData = {
    headlines: [
      {
        desc: "2024 Samsung Crystal 4K TV series with 4K upscaling, 3D surround sound, and more launched in India: price, features",
        image: samsung,
      },
      {
        desc: "Fire Boltt Oracle with LTE calling, 1.96-inch HD display launched in India: price, specifications",
        image: bolt,
      },
      {
        desc: "Best TWS earbuds in India under Rs 6,000 in April 2024: OnePlus Buds 3, OPPO Enco Air3 Pro, and more",
        image: earbuds,
      },
      {
        desc: "Fire Boltt Oracle with LTE calling, 1.96-inch HD display launched in India: price, specifications",
        image: bolt,
      },
    ],
    
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <div className="section" style={{ padding: "3%" }}>
        <Row>
          <Col lg={8}>
          <ul>
          {News1.map((item, index) => (
            <li key={index}>
              <h3 style={{ padding: "10px" ,textAlign:"left"}}>{item.title}</h3>

              <img
                src={item.image}
                alt={item.title}
                style={{ width: "70%", marginRight: "auto", display: "block" }}
              />
              <div style={{ padding: "10px" }}>
                <h3 style={{color:"#ffbb38",textAlign:"left"}}>Highlights</h3>
                <p
                  style={{ color: "#ccc", fontSize: "20px", fontWeight: "600" }}
                >
                  {item.price}
                </p>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
          </Col>
          <Col lg={4} style={{paddingTop:"10px",border:"1px solid #ccc"}}>
          <h4>Trending News</h4>
           
            {NewsData.headlines.map((item, index) => (
              <div className="small" >
                <Row >
                  <Col   key={index}>
                    <img
                      style={{ padding: "10px" }}
                      src={item.image}
                      alt={item.image}
                    />
                    </Col><Col  >
                    <div style={{ padding: "10px"  }}>
                    <a href="/NewsProductPage" style={{ color:"green"}}>  <p>{item.desc}</p></a>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          
          </Col>
        </Row>
       
        <div>
          <h4 style={{color:"#758745"}}>Also Read</h4>
          <Slider {...settings}  >
            {trendingNewsData.headlines.map((item, index) => (
              <div className="small">
                <ul>
                  <li key={index}>
                    <img
                      style={{ padding: "10px" }}
                      src={item.image}
                      alt={item.image}
                    />
                    <div style={{ padding: "10px" }}>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </Slider>
        </div>
      </div>
       
    </Container>
  );
};

export default TrendingNewsComponent;
