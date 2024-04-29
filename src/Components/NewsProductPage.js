import React from 'react';
import  { useState, useEffect } from 'react';
import realme from "../assets/news-realme.webp"; 
import {News1 } from "../Components/NewsProductdata"
import { Container, Row, Col, Card } from 'react-bootstrap';
import News from "../Components/News";
const TrendingNewsComponent = () => {

  const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
  //       const data = await response.json();
  //       setArticles(data.articles);
  //     } catch (error) {
  //       console.error('Error fetching news:', error);
  //     }
  //   };

  //   fetchNews();
  // }, []);

  // Sample data for demonstration
  // const trendingNewsData = {
  //   headlines: [
  //     { title: "New Smartphone Launch: XYZ Phone Pro 2024", category: "Smartphones", image: realme },
  //     { title: "Top 5 Must-Have Gadgets of the Year", category: "Gadgets", image: "image-url" },
  //     { title: "Revolutionary Tech: AI-powered Home Assistants", category: "Smart Home", image: "image-url" }
  //   ],
  //   featuredArticles: [
  //     { title: "The Future of Wearable Tech: Innovations to Watch", category: "Wearable", image: "image-url" },
  //     { title: "Gaming Gadgets: Enhancing the Gaming Experience", category: "Gaming", image: "image-url" }
  //   ],
  //   archives: [
  //     { title: "Best Gadgets of 2023", category: "Review", image: "image-url" },
  //     { title: "Tech Trends of the Decade", category: "Trends", image: "image-url" }
  //   ],
  //   editorialContent: [
  //     { title: "How to Choose the Right Smartphone for You", category: "Guides", image: "image-url" },
  //     { title: "The Impact of AI on Daily Life", category: "AI", image: "image-url" }
  //   ],
  //   multimediaContent: [
  //     { title: "Video Review: XYZ Phone Pro 2024", category: "Smartphones", video: "video-url" },
  //     { title: "Podcast: The Future of Tech", category: "Tech", audio: "audio-url" }
  //   ]
  // };

  return (
    <div className="trending-news">
      <div className="section">
        
        <ul>
          <Row>
          {News1.map((item, index) => (
             <Col key={index} md={6} sm={6} xs={12}>
            <li key={index}>
              <h3 style={{padding:"30px"}}>{item.title}</h3>
              
              <img src={item.image} alt={item.title} style={{width:"100%"}}/>
              <div>
                <h3 style={{color:"rgb(147 85 85);",paddingBottom:"30px"}}>Highlights</h3>
                <p style={{color:"#000",fontWeight:"600"}}>{item.price}</p>
                <p>{item.description}</p>
              </div>
            </li>
            </Col>
            
          ))}
           <Col  md={6} sm={6} xs={12}>
            {/* <News/> */}
            </Col>
          </Row>
        </ul>
      </div>

      {/* <div className="section">
        <h2>Featured Articles</h2>
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
      </div>
      <div className="section">
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
      </div>
      <div className="section">
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
      </div>
      <div className="section">
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
      {/* Similarly render other sections */}

    </div>
  );
};

export default TrendingNewsComponent;
