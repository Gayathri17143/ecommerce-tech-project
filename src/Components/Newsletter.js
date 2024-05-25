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
      <div className=" "  >
        <div className=" ">
          <div className="subscriber-form-container">
            {submitted ? (
              <div className="thank-you-message">
                <h4>Thank you for subscribing!</h4>
              </div>
            ) : (
              <>
                <h4 style={{paddingLeft:"0px",fontSize:"20px", color:' #c9e7f9'}}>Subscribe to Our Newsletter</h4>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label style={{color:"#1976d2",fontSize:"20px"}} htmlFor="email">Email:</label>
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
