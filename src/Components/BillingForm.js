// src/components/BillingForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box } from '@mui/material';

const BillingForm = ({ nextStep, setBillingInfo }) => {
  const [billingInfo, setLocalBillingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalBillingInfo({ ...billingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(billingInfo);
    if (Object.keys(newErrors).length === 0) {
      setBillingInfo(billingInfo);
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
      <Typography variant="h6" gutterBottom>Billing Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            name="firstName"
            value={billingInfo.firstName}
            onChange={handleChange}
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            name="lastName"
            value={billingInfo.lastName}
            onChange={handleChange}
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            name="address"
            value={billingInfo.address}
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
            value={billingInfo.city}
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
            value={billingInfo.state}
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
            value={billingInfo.zip}
            onChange={handleChange}
            fullWidth
            error={!!errors.zip}
            helperText={errors.zip}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button variant="contained" color="primary" type="submit">
          Next
        </Button>
      </Box>
    </form>
  );
};

export default BillingForm;
