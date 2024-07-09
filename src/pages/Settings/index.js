// src/Profile.js
import React, { useState, useEffect } from 'react';
import './Settings.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    country: '',
    city: '',
    state: '',
    zipCode: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('http://localhost:5000/profile');
      const data = await response.json();
      setProfile(data);
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    });

    if (response.ok) {
      console.log('Profile Updated:', profile);
    } else {
      console.error('Failed to update profile');
    }
  };

  return (
    <div className="profile-card">
      <h2>Profile Details</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex'>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div className='flex'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <div className='flex'>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={profile.password}
            onChange={handleChange}
          />
        </div>
        <div className='flex'>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
          />
        </div>
        <div className='flex'>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </div>
        <div className='flex'>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={profile.country}
            onChange={handleChange}
          />
        </div>
        <div className='flex'>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={profile.city}
            onChange={handleChange}
          />
        </div>
        <div className='flex'>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={profile.state}
            onChange={handleChange}
          />
        </div>
        <div className='flex'>
          <label>Zip Code:</label>
          <input
            type="text"
            name="zipCode"
            value={profile.zipCode}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
