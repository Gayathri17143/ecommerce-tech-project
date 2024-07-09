import React, { useState } from 'react';
import '../Components/Newsletter.css'; // Import CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SubscriberForm = () => {
  const [email, setEmail] = useState(''); 
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { email });
    // You can add your submission logic here (e.g., sending data to a server)
    setSubmitted(true);
    setEmail(''); 
  };

  return (
    <div style={{ background: "#c8ebff", padding: "20px 0" }}>
      <div className="subscriber-form-container">
        {submitted ? (
          <div className="thank-you-message">
            <h4>Thank you for subscribing!</h4>
          </div>
        ) : (
          <>
            <h4>Subscribe to Our Newsletter</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SubscriberForm;
