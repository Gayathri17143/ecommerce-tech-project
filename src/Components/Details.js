import React, { useState, useEffect, useRef } from "react";
import "./Details.css";
import SoldIcon from "../assets/sold.png";
import { Container, Button } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Video from "./Video";
import Marquee from "react-fast-marquee";
import Ratings from "./ProductScreen";
import Overview from "./Overview";
import Specs from "./Specs";
import apple from "../assets/Apple-iphone-15-pro-max-black.png";
import apple1 from "../assets/Apple-iphone-15-pro-max-blue-titanium-1.png";
import apple2 from "../assets/Apple-iphone-15-pro-max-blue-titanium-2.png";
import apple3 from "../assets/Apple-iphone-15-pro-max-blue-titanium-3.png";
import Pincode from "../Components/Pincode";
const product = {
  id: 1,
  title: "Apple iPhone 15 Pro Max",
  slug: "new-luxury-laptop",
  availability: "Instock",
  img: apple,
  Price: 183990,
  desc: "Apple iPhone 15 Pro Max price in India starts from Rs. 148,900. The lowest price of Apple iPhone 15 Pro Max is Rs. 148,900 at amazon.in. This is 8 GB RAM / 256 GB internal storage base variant of Apple iPhone 15 Pro Max which is available in Black Titanium, White Titanium, Blue Titanium, Natural Titanium colour.",
  images: [
    {
      src: apple,
    },
    {
      src: apple1,
    },
    {
      src: apple2,
    },
    {
      src: apple3,
    },
    {
      src: apple,
    },
    {
      src: apple1,
    },
    {
      src: apple2,
    },
    {
      src: apple3,
    },
    {
      src: apple,
    },
    {
      src: apple1,
    },
  ],
  colors: [
    { id: 1, name: "black", color: "black", url: "/Details/id" },
    { id: 2, name: "blue", color: "blue", url: "/Details/id" },
    { id: 3, name: "white", color: "white", url: "/ProductColors" },
    { id: 4, name: "gray", color: "gray", url: "/ProductColors" },
  ],
  variants: [
    {
      id: 1,

      storage: "64GB",
    },
    {
      id: 2,

      storage: "128GB",
    },
    {
      id: 3,

      storage: "256GB",
    },
  ],
  infos: [
    {
      title: "Overview",

      content: <Overview />,
    },

    {
      title: "Detailed Specs",
      content: <Specs />,
    },
    {
      title: "Ratings and Reviews",
      content: <Ratings />,
    },
    {
      title: "Video",
      content: <Video />,
    },
  ],
  discount: 20,
  sold: 52,
  category: "mobile",
  brand: "apple",
};
const Details = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const [selectedStorage, setSelectedStorage] = useState(product.variants[0]);

  const [infoTitle, setInfoTitle] = useState(product.infos[0].title);

  const slideRef = useRef();

  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childrenElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width);
  }, []);

  function plusSlides(n) {
    setSlideIndex((prev) => prev + n);
    slideShow(slideIndex + n);
  }

  function slideShow(n) {
    if (n > product.images.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(product.images.length);
    }
  }

  //drag

  function dragStart(e) {
    setStart(e.clientX);
  }
  function dragOver(e) {
    let touch = e.clientX;
    setChange(start - touch);
  }
  function dragEnd(e) {
    //drag left chang >0
    //drag right chang <0
    if (change > 0) {
      slideRef.current.scrollLeft += width;
    } else {
      slideRef.current.scrollLeft -= width;
    }
  }

  useEffect(() => {
    if (!slideRef.current || !width) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrollLeft =
      slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex]);

  //add to cart

  //  const [cartsVisibilty, setCartVisible] = useState(false);
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
  const handleVariantChange = (variant) => {
    setSelectedStorage(variant);
  };

  const { id } = useParams();
  const [product1, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);
  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };
  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4  my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                  {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">${product.price}</li>
                  </ul> */}
                  <div className="card-body">
              <p style={{color:"red"}}> ₹ { product.Price}</p>  
                    <Link to="/checkout" style={{ margin: "10px" }}>
                      Buy Now
                    </Link>
                   
                    <ShoppingCartIcon
                      style={{ margin: "10px" ,cursor:"pointer"}}
                      onClick={() => addProductToCart(product)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <React.Fragment>
      <Container>
        <section className="product-details">
          <div className="product-page-img">
            <div className="big-images">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="mySlides"
                  style={{
                    display: index + 1 === slideIndex ? "block" : "none",
                  }}
                >
                  <div className="numbertext">
                    {index + 1}/{product.images.length}
                  </div>
                  <img src={image.src} alt="" />
                </div>
              ))}
              <a href="#!" className="prev" onClick={() => plusSlides(-1)}>
                &#10094;
              </a>
              <a href="#!" className="next" onClick={() => plusSlides(1)}>
                &#10095;
              </a>
            </div>
            <div
              className="slider-img"
              draggable={true}
              ref={slideRef}
              onDragStart={dragStart}
              onDragOver={dragOver}
              onDragEnd={dragEnd}
            >
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`slider-box ${
                    index + 1 === slideIndex ? "active" : ""
                  }`}
                  onClick={() => setSlideIndex(index + 1)}
                >
                  <img src={image.src} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="product-page-details">
            <strong>{product.title}</strong>
            <p className="product-category">
              {product.brand} -{product.category}
            </p>
            <p style={{ color: "green", fontWeight: "700" }}>
              {product.availability}
            </p>
            <p className="product-price">
              ₹
              {Math.round(
                product.Price - (product.Price * product.discount) / 100
              )}
              <del>{product.Price}₹</del>
            </p>
            <p className="small-desc">{product.desc}</p>
            <div className="product-options">
              <span>Colors</span>
              {product.colors.map((color) => (
                <div key={color}>
                  <Button
                    href={color.url}
                    //  sx={{ background: color }}
                    style={{ backgroundColor: color.color, margin: "5px" }}
                    className={color === selectedColor ? "active" : ""}
                    onClick={() => setSelectedColor(color)}
                  />
                </div>
              ))}
            </div>
            <div className="product-options">
              <p>Storage: {selectedStorage.storage}</p>
            </div>
            <div className="variant-selector">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => handleVariantChange(variant)}
                  className={variant.id === selectedStorage.id ? "active" : ""}
                >
                  {variant.storage}
                </button>
              ))}
            </div>
            <Pincode />
            {/* <div className="product-page-offer">
              <i className="fa-solid fa-tag" /> {product.discount}% Discount
            </div> */}
            {/* <div className="product-sold">
              <img src={SoldIcon} alt="SoldIcon" />
              <strong>
                {product.sold}
                <span>Products Sold.</span>
              </strong>
            </div> */}
            <div className="cart-btns">
              <a
                href="#!"
                className="add-cart"
                onClick={() => addProductToCart(product)}
              >
                Add to Cart
              </a>
              <a href="/checkout" className="add-cart buy-now">
                Buy Now
              </a>
            </div>
          </div>
        </section>
        <section className="product-all-info">
          <ul className="product-info-menu">
            {product.infos.map((info) => (
              <li
                key={info.title}
                onClick={() => setInfoTitle(info.title)}
                className={`p-info-list ${
                  info.title === infoTitle ? "active" : ""
                }`}
              >
                {info.title}
              </li>
            ))}
          </ul>
          {product.infos.map((info) => (
            <div
              key={info.title}
              className={`info-container ${
                info.title === infoTitle ? "active" : ""
              }`}
            >
              {info.content}
            </div>
          ))}
        </section>
        <section>
          <div className="row">
            <div className="d-none d-md-block" style={{ padding: "5%" }}>
              <h2 className="">You may also Like</h2>
              <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
                {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
              </Marquee>
            </div>
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default Details;
