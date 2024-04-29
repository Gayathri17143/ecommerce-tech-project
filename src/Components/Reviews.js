import React, { useState, useEffect } from 'react';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchGoogleReviews();
  }, []);

  const fetchGoogleReviews = async () => {
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=name,rating,reviews&key=YOUR_API_KEY`);
      const data = await response.json();
      setReviews(data.result.reviews);
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
    }
  };

  return (
    <div style={{padding:'50px'}}>
      <h4>Google Reviews</h4>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>Rating: {review.rating}</p>
          <p>{review.text}</p>
          <p>Author: {review.author_name}</p>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviews;
