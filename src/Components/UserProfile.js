import React, { useState } from 'react';
import './UserProfile.css'; // Import CSS file for styling

function App() {
  // State variables to hold form data
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');

  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', { firstname,lastname, mobileNumber, gender, email, address });
    // Reset form fields after submission
    setFirstName('');
    setLastName('');
    setMobileNumber('');
    setGender('');
    setEmail('');
    setAddress('');
  };

  return (
    <div className="container" style={{margin:'3%'}}>
      <h3>Personal Information</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>FirstName:</label>
          <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>LastName:</label>
          <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Mobile Number:</label>
          <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
