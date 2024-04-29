import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Input from "../Components/Input";
import products from "../db/data";
import { FaCartShopping } from "react-icons/fa6";
import Button from "../Components/Button";
import { Link } from "react-router-dom";
// PriceFilter component
const PriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div>
      <div className="">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleRadioChange} type="radio" value="" name="priceRange" style={{ marginRight: "5px" }} />
          <span className="checkmark"></span>All
        </label><br />

        <Input
          handleChange={handleRadioChange}
          value="5000-9999"
          title="₹5,000 - ₹9,999"
          id="range1"
          name="priceRange"

        />
        <br />
        <Input
          handleChange={handleRadioChange}
          value="10000-14999"
          title="₹10,000 - ₹14,999"
          id="range2"
          name="priceRange"
        />
        <Input
          handleChange={handleRadioChange}
          value="15000-29999"
          title="₹15,000 - ₹29,999"
          id="range2"
          name="priceRange"
        />
        <Input
          handleChange={handleRadioChange}
          value="30000-59999"
          title="₹30,000 - ₹59,999"
          id="range2"
          name="priceRange"
        />
        <Input
          handleChange={handleRadioChange}
          value="60000-310999"
          title="₹60,000 - ₹310,999"
          id="range2"
          name="priceRange"
        />
      </div>

    </div>
  );
};

const Recommended = ({ handleFilterChange }) => {
  const handleSelectChange = (e) => {
    const selectedFilter = e.target.value;
    handleFilterChange(selectedFilter);
  };


  return (
    <>
      <div>
        <div className="recommended-flex" style={{ padding: "30px", textAlign: "right" }}>
          <Button onClickHandler={handleSelectChange} value="" title="All Products" />
          <Button onClickHandler={handleSelectChange} value="5Gmobiles" title="5G Mobiles" />
          <Button onClickHandler={handleSelectChange} value="lowtohigh" title="Low to High" />
          <Button onClickHandler={handleSelectChange} value="hightolow" title="High to Low" />
        </div>
      </div>
    </>
  );
};

const Products = ({ products }) => {


  return (
    <section >

      <Row>

        {products.map((product, index) => (

          <Col xs={12} md={4} lg={4} key={index} style={{ padding: "10px" }}>
            <section className="card-container" style={{ marginLeft: "0rem", border: "1px solid #ccc", borderRadius: "10px" }}>
              <img src={product.img} alt={product.title} className="" height="300px" width="100%" style={{ objectFit: 'contain' }} />
              <div className="card-details" style={{ padding: "10px" }} >
                <Link to={`/Hero/${product.id}`}>
                  <h6 className="card-title" style={{ fontSize: "16px", color: "#000000", fontWeight: "600" }}>{product.title}</h6>  </Link>
                <section className="card-reviews">
                  {product.star}  {product.star}  {product.star}

                  <span className="total-reviews">{product.reviews}</span>
                </section>
                <section className="card-price">
                  <div className="price">

                    <del>{product.prevPrice}</del> {product.Price}
                  </div>
                  <div className="bag">
                    <FaCartShopping className="shop-icon" />
                  </div>
                </section>

              </div>
            </section>
          </Col>

        ))}
      </Row>
    </section>
  );
};

// Parent component
const App = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);



  // Handle price change
  const handlePriceChange = (selectedRange) => {
    if (selectedRange) {
      const [minPrice, maxPrice] = selectedRange.split("-");
      const filtered = products.filter(({ Price }) => Price >= parseInt(minPrice) && Price <= parseInt(maxPrice));
      setFilteredProducts(filtered);
    } else {
      // Reset filter if no range selected
      setFilteredProducts(products);
    }
  };


  // Handle filter change
  const handleFilterChange = (selectedFilter) => {
    setSelectedFilter(selectedFilter);
    if (!selectedFilter) {
      setFilteredProducts(products);
      return;
    }
    const filtered = applyFilter(selectedFilter, null);
    setFilteredProducts(filtered);
  };
  // Filter products based on selected category, color, company, or title
  const applyFilter = (selected, selectedRange) => {
    return products.filter(({ category, color, company, Price, title }) => {
      if (selected) {
        return (
          category === selected ||
          color === selected ||
          company === selected ||
          title === selected
        );
      } else if (selectedRange) {
        const [minPrice, maxPrice] = selectedRange.split("-");
        return Price >= parseInt(minPrice) && Price <= parseInt(maxPrice);
      }
      return true; // Return true if no selection is made
    });
  };
  // FilterOptions component
  const FilterOptions = ({ handleFilterChange }) => {
    const handleSelectChange = (e) => {
      const selectedFilter = e.target.value;
      handleFilterChange(selectedFilter);
    };



    return (
      <div style={{paddingTop:"20px"}}>
        <div>
          <h2 className="sidebar-title color-title">Brands</h2>
          <label className="sidebar-label-container">
            <input onChange={handleSelectChange} type="radio" value="" name="test" style={{ marginRight: "5px" }} />
            <span className="checkmark"></span>All
          </label><br />
          <Input
            handleChange={handleSelectChange}
            value="apple"
            title="Apple"
            name="test"
          /> <br />
          <Input
            handleChange={handleSelectChange}
            value="samsung"
            title="Samsung"
            name="test"
          /><br />
          <Input
            handleChange={handleSelectChange}
            value="oneplus"
            title="Oneplus"
            name="test"
          /><br />
          <Input
            handleChange={handleSelectChange}
            value="redmi"
            title="Redmi"
            name="test"
          /><br />
          <Input
            handleChange={handleSelectChange}
            value="realme"
            title="Realme"
            name="test"
          /><br />
          <Input
            handleChange={handleSelectChange}
            value="oppo"
            title="Oppo"
            name="test"
          /><br />
          <Input
            handleChange={handleSelectChange}
            value="vivo"
            title="Vivo"
            name="test"
          /><br />
          <Input
            handleChange={handleSelectChange}
            value="tecno"
            title="Tecno"
            name="test"
          /><br />
          <Input
            handleChange={handleSelectChange}
            value="nokia"
            title="Nokia"
            name="test"
          />
        </div>


        <div style={{paddingTop:"20px"}}>
          <h2 className="sidebar-title color-title">Colors</h2>
          <label className="sidebar-label-container">
            <input onChange={handleSelectChange} type="radio" value="" name="test1" style={{ marginRight: "5px" }} />
            <span className="checkmark all"></span>
            All
          </label><br />

          <Input
            handleChange={handleSelectChange}
            value="black"
            title="Black"
            name="test1"
            color="black"
          /><br />
          <Input
            handleChange={handleSelectChange}
            value="grey"
            title="Grey"
            name="test1"
            color="grey"
          /><br />
          <Input
            handleChange={handleSelectChange}
            value="blue"
            title="Blue"
            name="test1"
            color="blue"
          /><br />

          <Input
            handleChange={handleSelectChange}
            value="red"
            title="Red"
            name="test1"
            color="red"
          /><br />

          <Input
            handleChange={handleSelectChange}
            value="green"
            title="Green"
            name="test1"
            color="green"
          /><br />

          <label className="sidebar-label-container">
            <input
              onChange={handleSelectChange}
              type="radio"
              value="white"
              name="test1"
            />
            <span
              className="checkmark"
              style={{ background: "white", marginRight: "5px" }}
            ></span>
            White
          </label>
        </div>

      </div>
    );
  };



  return (
    <div>
      <Container>
        <Row style={{ padding: "30px" }}>
          <Col xs={12} md={3} lg={3}>
            <PriceFilter handlePriceChange={handlePriceChange} />
            <FilterOptions handleFilterChange={handleFilterChange} />
          </Col>
          <Col xs={12} md={9} lg={9}>
            <Recommended handleFilterChange={handleFilterChange} />
            <Products products={filteredProducts.length ? filteredProducts : products} />
          </Col>


        </Row>
      </Container>




    </div>
  );
};

export default App;
