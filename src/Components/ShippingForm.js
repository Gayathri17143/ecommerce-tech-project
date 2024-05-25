// src/components/ShippingForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box } from '@mui/material';

const ShippingForm = ({ nextStep, setShippingInfo, prevStep }) => {
  const [shippingInfo, setLocalShippingInfo] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(shippingInfo);
    if (Object.keys(newErrors).length === 0) {
      setShippingInfo(shippingInfo);
      nextStep();
    } else {
      setErrors(newErrors);
    }
  };

  const validate = (info) => {
    let newErrors = {};
    Object.keys(info).forEach(key => {
      if (!info[key]) {
        newErrors[key] = `${key} is required`;
      }
    });
    return newErrors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>Shipping Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Address"
            name="address"
            value={shippingInfo.address}
            onChange={handleChange}
            fullWidth
            error={!!errors.address}
            helperText={errors.address}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="City"
            name="city"
            value={shippingInfo.city}
            onChange={handleChange}
            fullWidth
            error={!!errors.city}
            helperText={errors.city}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="State"
            name="state"
            value={shippingInfo.state}
            onChange={handleChange}
            fullWidth
            error={!!errors.state}
            helperText={errors.state}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="ZIP Code"
            name="zip"
            value={shippingInfo.zip}
            onChange={handleChange}
            fullWidth
            error={!!errors.zip}
            helperText={errors.zip}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button variant="contained" onClick={prevStep} style={{ marginRight: '8px' }}>
          Back
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Next
        </Button>
      </Box>
    </form>
  );
};

export default ShippingForm;
