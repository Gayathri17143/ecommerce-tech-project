import React, { useState,useEffect } from 'react';
import axios from 'axios';
// Sample purchased products data in JSON format
const purchasedProductsData = [
  {
    id: 1,
    name: 'Product 1',
    price: 10,
    description: 'Description of Product 1',
    purchaseDate: '2024-01-01',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20,
    description: 'Description of Product 2',
    purchaseDate: '2024-01-15',
  },
  // Add more purchased products as needed
];

const MyOrders = () => {
  const [purchasedProducts, setPurchasedProducts] = useState(purchasedProductsData);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Replace with your API endpoint
    axios.get('/api/my-orders')
      .then(response => {
        setPurchasedProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>My Orders</h1>
      <div className="orders">
        {purchasedProducts.length === 0 ? (
          <p>No orders have been placed yet.</p>
        ) : (
          purchasedProducts.map((product) => (
            <div key={product.id} className="order">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Purchased on: {product.purchaseDate}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
