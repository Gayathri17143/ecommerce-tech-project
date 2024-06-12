import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const ProductCard = ({ product, onToggleWishlist }) => {
  const handleToggleWishlist = () => {
    onToggleWishlist(product.id);
  };
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
  return (
    <div className="product">
      <div className="product-image-wrapper">
        <img className="product-image" src={product.img} alt={product.title} />
        <div style={{ padding: "20px 5px 3px 5px" }}>
          <h6 className="product-name">{product.title}</h6>
        </div>
        <Row>
          <Col lg={6}>
            <p className="product-price">₹{product.Price}</p>
          </Col>
          <Col lg={6}>
            <Button
              href="/checkout"
              style={{ background: "none", padding: "0px" }}
            >
              Buy Now
            </Button>
          </Col>
          <Col lg={6}>
            <ShoppingCartIcon
              sx={{ marginTop: "10px" }}
              onClick={() => addProductToCart(product)}
            />
          </Col>
        </Row>

        <div className="wishlist-icon" onClick={handleToggleWishlist}>
          {product.inWishlist ? <FaHeart color="red" /> : <FaRegHeart />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
