import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Container } from "react-bootstrap";
const Component = ( ) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Function to fetch data from local storage
    const fetchDataFromLocalStorage = () => {
      const storedWishlist = localStorage.getItem("products");
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
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };
 
  return (
    <Container>
      <div className="">
        {wishlist
          .filter((item) => item.inWishlist)
          .map((product) => (
            <div className="" key={product.id}>
              <div className="product-image-wrapper">
                <ProductCard
                  key={product.id}
                  product={product}
                  
                  onToggleWishlist={toggleWishlist}
                />
              </div>
            </div>
          ))}
      
      </div>
    </Container>
  );
};

export default Component;
