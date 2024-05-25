import React from "react";
import { useEffect, useState } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pagination from "../Components/Pagination";
import { Container, Row, Col } from "react-bootstrap";
const ProductList = () => {
  const product = [
    {
      id: 1,

      description: "Description of Product 1",

      videoUrl: "https://www.youtube.com/embed/2CuZLR_Z-8s",
    },
    {
      id: 2,

      description: "Description of Product 2",

      videoUrl: "https://www.youtube.com/embed/2CuZLR_Z-8s",
    },
    {
      id: 3,

      description: "Description of Product 3",

      videoUrl: "https://www.youtube.com/embed/2CuZLR_Z-8s",
    },
    {
      id: 4,

      description: "Description of Product 4",

      videoUrl: "https://www.youtube.com/embed/2CuZLR_Z-8s",
    },
    {
      id: 5,

      description: "Description of Product 5",

      videoUrl: "https://www.youtube.com/embed/2CuZLR_Z-8s",
    },
    {
      id: 6,

      description: "Description of Product 6",

      videoUrl: "https://www.youtube.com/embed/2CuZLR_Z-8s",
    },
    {
      id: 7,

      description: "Description of Product 7",

      videoUrl: "https://www.youtube.com/embed/2CuZLR_Z-8s",
    }, {
      id: 8,

      description: "Description of Product 8",

      videoUrl: "https://www.youtube.com/embed/2CuZLR_Z-8s",
    }, {
      id: 9,

      description: "Description of Product 9",

      videoUrl: "https://www.youtube.com/embed/2CuZLR_Z-8s",
    },
    // Add more products as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const totalProducts = product.slice(firstPostIndex, lastPostIndex);

  const ProductVideo = ({ videoUrl }) => {
    return (
      <div className="product-video">
        <iframe
          width="100%"
          height="300"
          src={videoUrl}
          title="YouTube Video"
          allowFullScreen
        ></iframe>
        {/* <video controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    );
  };
  const Product = ({ product }) => {
    return (
      <>
        <div className="product" style={{ display: "block" }}>
          <ProductVideo videoUrl={product.videoUrl} />
          <p>{product.description}</p>
        </div>
      </>
    );
  };
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   arrows: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <Container>
      <div className="product-list">
        <h4>Top Videos</h4>

        {/* <Slider {...settings} style={{ padding: "20px" }}> */}
        <Row>
          {totalProducts.map((product) => (
            <Col lg="4" md="6" sm="12">
              <Product key={product.id} product={product} />
            </Col>
          ))}
        </Row>
        <Pagination
          totalPosts={product.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        {/* </Slider> */}
      </div>
    </Container>
  );
};

export default ProductList;
