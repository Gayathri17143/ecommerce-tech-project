import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Form,
  Container,
} from "react-bootstrap";
import Rating from "../Components/Ratingstar";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import axios from "axios";

function ProductScreen() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [successProductReview, setSuccessProductReview] = useState(false);
  const [loadingProductReview, setLoadingProductReview] = useState(false);
  const [errorProductReview, setErrorProductReview] = useState(null);

  const { id } = useParams();
  const Navigate = useNavigate();
  // const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, successProductReview]);

  // const addToCartHandler = () => {
  //   Navigate.push(`/cart/${id}?qty=${qty}`);
  // };

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   setLoadingProductReview(true);
  //   try {
  //     await axios.post(
  //       `/api/products/${id}/reviews`,
  //       { rating, comment },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${userInfo.token}`,
  //         },
  //       }
  //     );
  //     setLoadingProductReview(false);
  //     setSuccessProductReview(true);
  //     setRating(0);
  //     setComment("");
  //   } catch (error) {
  //     setLoadingProductReview(false);
  //     setErrorProductReview(error.message);
  //   }
  // };
  const [submittedReview, setSubmittedReview] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoadingProductReview(true);

    // Simulate a delay for submitting the review
    setTimeout(() => {
      const reviewDate = new Date().toLocaleString();
      setSubmittedReview({ rating, comment, date: reviewDate });
      setLoadingProductReview(false);
      setRating("");
      setComment("");
    }, 1000);
  };

  return (
    <Container>
      {/* <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link> */}

      <div>
        <Row style={{ background: "#fff", padding: "30px" }}>
          {/* <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />

            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color={"#f8e825"}
                />
              </ListGroup.Item>

              <ListGroup.Item>Price: ₹{product.price}</ListGroup.Item>

              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>

            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>₹{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col xs="auto" className="my-1">
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    className="w-100"
                    disabled={product.countInStock === 0}
                    type="button"
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col> */}

          <Col md={12}>
            {/* {product.reviews?.length === 0 && (
              <Message variant="info">No Reviews</Message>
            )} */}

            <ListGroup  >
              {/* <p>{createdAt.substring(0, 10)}</p> */}

              <ListGroup.Item>
                <h4 style={{textAlign:"center"}}>Write a Review</h4>

                {/* {loadingProductReview && <Loader />}
                {successProductReview && (
                  <Message variant="success">Review Submitted</Message>
                )} */}

                {/* {userInfo ? ( */}
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="rating">
                    <Form.Label>Rating</Form.Label>

                    <Form.Control
                      as="select"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="comment">
                    <Form.Label>Review</Form.Label>

                    <Form.Control
                      as="textarea"
                      row="5"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    disabled={loadingProductReview}
                    type="submit"
                    variant="primary"
                    className="my-3"
                  >
                    Submit
                  </Button>
                </Form>
                {/* ) : (
                    <Message variant="info">
                      Please <Link to="/login">Login</Link> to write a review.
                    </Message>
                  )} */}
              </ListGroup.Item>
              <h4 className="mt-3">Reviews</h4>
              {submittedReview && (
                <ListGroup.Item>
                  <div className="mt-3">
                    <Rating value={submittedReview.rating} color="f8e825" />

                    <p>
                      <strong>Comment:</strong> {submittedReview.comment}
                    </p>
                    <p>
                      <strong>Date:</strong> {submittedReview.date}
                    </p>
                  </div>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ProductScreen;
