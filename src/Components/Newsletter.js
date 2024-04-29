import React, { useState } from 'react';
import '../Components/Newsletter.css'; // Import CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SubscriberForm = () => {
  const [email, setEmail] = useState(''); 
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { email  });
    // You can add your submission logic here (e.g., sending data to a server)
    setSubmitted(true);
    setEmail(''); 
  };

  return (
    <div className="container"  >
      <div className="row justify-content-center" style={{background:"rgb(211 215 219 / 41%)"}}>
        <div className="col-md-6">
          <div className="subscriber-form-container">
            {submitted ? (
              <div className="thank-you-message">
                <h2>Thank you for subscribing!</h2>
              </div>
            ) : (
              <>
                <h2>Subscribe to Our Newsletter</h2>
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
                  </div>
                 
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriberForm;
