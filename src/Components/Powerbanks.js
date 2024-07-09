import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Pagination from "../Components/Pagination";
import Powerbanksdata from "../db/Powerbanksdata";
import { BasicphonesPriceFilter} from "../Components/PriceFilter";
import { PowerbankBrandFilter} from "../Components/Brandfilter";
import {ColorFilter} from "../Components/Colorsfilter";
import {RecommendedFilter} from "../Components/Recommended";

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedSortOrder, setSelectedSortOrder] = useState("");

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(Powerbanksdata);
    }
  }, []);

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedBrand,
    selectedColor,
    selectedPriceRange,
    selectedSortOrder,
    products,
  ]);

  const handlePriceChange = (selectedRange) => {
    setSelectedPriceRange(selectedRange);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSortChange = (selectedFilter) => {
    setSelectedSortOrder(selectedFilter);
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (selectedBrand) {
      filtered = filtered.filter(
        (product) => product.category === selectedBrand
      );
    }

    if (selectedColor) {
      filtered = filtered.filter((product) => product.color === selectedColor);
    }

    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split("-");
      filtered = filtered.filter(
        ({ Price }) =>
          Price >= parseInt(minPrice) && Price <= parseInt(maxPrice)
      );
    }

    if (selectedSortOrder === "lowtohigh") {
      filtered.sort((a, b) => a.Price - b.Price);
    } else if (selectedSortOrder === "hightolow") {
      filtered.sort((a, b) => b.Price - a.Price);
    }

    setFilteredProducts(filtered);
  };

  const toggleWishlist = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, inWishlist: !product.inWishlist }
        : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);

  return (
    <Container>
      <Row style={{ padding: "30px" }}>
        <RecommendedFilter handleFilterChange={handleSortChange} />
        <Col xs={12} md={3} lg={3}>
          < BasicphonesPriceFilter handlePriceChange={handlePriceChange} />
          < PowerbankBrandFilter handleFilterChange={handleBrandChange} />
          <ColorFilter handleFilterChange={handleColorChange} />
        </Col>
        <Col xs={12} md={9} lg={9}>
      
          <section>
            <Row>
              {currentPosts.length > 0 ? (
                currentPosts.map((product, index) => (
                  <Col
                    key={index}
                    xs={12}
                    md={4}
                    lg={4}
                    style={{ padding: "10px" }}
                  >
                    <div
                      className="card-container"
                      style={{
                        marginLeft: "0rem",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src={product.img}
                        alt={product.title}
                        style={{
                          objectFit: "contain",
                          display: "block",
                          height: "auto",
                          width: "70%",
                          margin: "0 auto",
                        }}
                      />
                      <div className="card-details" style={{ padding: "10px" }}>
                        <Link to={`/Details/${product.id}`}>
                          <h6
                            className="card-title"
                            style={{
                              fontSize: "18px",
                              color: "#000000",
                              fontWeight: "600",
                              marginBottom: "20px",
                            }}
                          >
                            {product.title}
                          </h6>
                        </Link>
                        <div
                          className="wishlist-icon"
                          onClick={() => toggleWishlist(product.id)}
                        >
                          {product.inWishlist ? (
                            <FaHeart color="red" />
                          ) : (
                            <FaRegHeart />
                          )}
                        </div>
                        <section className="card-price">
                          <p className="product-price">
                            ₹
                            {Math.round(
                              product.Price -
                                (product.Price * product.discount) / 100
                            )}
                          </p>
                          <del>₹{product.Price}</del>
                        </section>
                        <section className="card-stock">
                          {product.inStock ? (
                            <span style={{ color: "green" }}>In Stock</span>
                          ) : (
                            <span style={{ color: "red" }}>Out of Stock</span>
                          )}
                        </section>
                      </div>
                    </div>
                  </Col>
                ))
              ) : (
                <Col>
                  <h5>No products match your filters.</h5>
                </Col>
              )}
            </Row>
          </section>
          <Pagination
            totalPosts={filteredProducts.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
