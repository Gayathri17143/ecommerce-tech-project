import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import './OrderHistory.css';
// import { Container } from "react-bootstrap";
const Component = ({ product, onToggleWishlist }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Function to fetch data from local storage
    const fetchDataFromLocalStorage = () => {
      const storedWishlist = localStorage.getItem("wishproducts");
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist));
      }
    };

    // Call the function to fetch data when the component mounts
    fetchDataFromLocalStorage();

    // Cleanup function to remove event listener or perform other cleanup
    return () => {
      // Any cleanup code, if necessary
    };
  }, []);

  const toggleWishlist = (productId) => {
    const updatedProducts = wishlist.map((product) =>
      product.id === productId
        ? { ...product, inWishlist: !product.inWishlist }
        : product
    );
    setWishlist(updatedProducts);
    localStorage.setItem("wishproducts", JSON.stringify(updatedProducts));
  };
  const handleToggleWishlist = () => {
    onToggleWishlist(product.id);
  };
  return (
    <Container>
      <div className="">
        {wishlist
          .filter((item) => item.inWishlist)
          .map((product) => (
            <div className="order" key={product.id}>
              <div className="product-image-wrapper">
                {/* <ProductCard
                  key={product.id}
                  product={product}
                  
                  onToggleWishlist={toggleWishlist}
                /> */}

                 
                <Row style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <Col lg={4}>
                    <img style={{border:"1px solid rgb(231 231 231)",borderRadius:"20px",  display: "block",
                          height: "auto",
                          width: "50%",
                          margin: "0 auto"}}
                      className="product-image"
                      src={product.img}
                      alt={product.title}
                    />
                  </Col>
                  <Col lg={4}  >
                    <h6 className="product-name">{product.title}</h6>
                  </Col>
                  <Col lg={2}>
                    <p className="product-price">₹{product.Price}</p>
                    
                  </Col>
                  <Col lg={2}>
                     
                    <div
                      className="wishlist-icon"
                      onClick={handleToggleWishlist}
                    >
                      {product.inWishlist ? (
                        <FaHeart color="red" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Component;
