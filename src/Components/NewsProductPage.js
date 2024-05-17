import React from "react";
import { useState, useEffect } from "react";
import realme from "../assets/news-realme.webp";
import samsung from "../assets/news-samsung.webp";
import bolt from "../assets/news-Fire-Boltt.webp";
import earbuds from "../assets/news-tws-earbuds.webp";
import { News1 } from "../Components/NewsProductdata";
import { Container, Row, Col, Card } from "react-bootstrap";
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
    ],
    // featuredArticles: [
    //   { title: "The Future of Wearable Tech: Innovations to Watch", category: "Wearable", image: "image-url" },
    //   { title: "Gaming Gadgets: Enhancing the Gaming Experience", category: "Gaming", image: "image-url" }
    // ],
    // archives: [
    //   { title: "Best Gadgets of 2023", category: "Review", image: "image-url" },
    //   { title: "Tech Trends of the Decade", category: "Trends", image: "image-url" }
    // ],
    // editorialContent: [
    //   { title: "How to Choose the Right Smartphone for You", category: "Guides", image: "image-url" },
    //   { title: "The Impact of AI on Daily Life", category: "AI", image: "image-url" }
    // ],
    // multimediaContent: [
    //   { title: "Video Review: XYZ Phone Pro 2024", category: "Smartphones", video: "video-url" },
    //   { title: "Podcast: The Future of Tech", category: "Tech", audio: "audio-url" }
    // ]
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
      <div className="section" style={{marginBottom:"20px"}}>
        <ul  >
          {News1.map((item, index) => (
            <li key={index}>
              <h3 style={{ padding: "10px" }}>{item.title}</h3>

              <img
                src={item.image}
                alt={item.title}
                style={{ width: "70%" , marginRight:"auto",display:"block"}}
              />
              <div style={{padding:"10px"}}>
                <h3  >
                  Highlights
                </h3>
                <p style={{ color: "#ccc", fontSize:"20px", fontWeight: "600" }}>{item.price}</p>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <h4>Top Trending News</h4>
        <Slider {...settings} style={{ padding: "20px" }}>
        {trendingNewsData.headlines.map((item, index) => (
          <div className="small">
            <ul>
              
                <li key={index}>
                  <img style={{padding:"10px"}} src={item.image} alt={item.image} />

                  <div style={{padding:"10px"}}>
                    <p>{item.desc}</p>
                  </div>
                </li>
            
            </ul>
          </div>  ))}
        </Slider>

        {/* <div className="section">
        <h2>Archives</h2>
        <ul>
          {trendingNewsData.featuredArticles.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
        {/* <div className="section">
        <h2>EditorialContent</h2>
        <ul>
          {trendingNewsData.featuredArticles.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
        {/* <div className="section">
        <h2> MultimediaContent</h2>
        <ul>
          {trendingNewsData.featuredArticles.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
      </div>
      {/* Similarly render other sections */}
    </Container>
  );
};

export default TrendingNewsComponent;
