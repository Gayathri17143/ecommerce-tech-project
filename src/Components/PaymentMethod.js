// src/components/PaymentMethod.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const PaymentMethod = ({ nextStep, setPaymentMethod, prevStep }) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    cardHolderName: '',
    validThru: '',
    expiryDate: '',
    cvv: '',
  });
  const [phonepeInfo, setPhonepeInfo] = useState({ phone: '' });
  const [gpayInfo, setGpayInfo] = useState({ email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (selectedMethod === 'Credit Card') {
      setCreditCardInfo({ ...creditCardInfo, [name]: value });
    } else if (selectedMethod === 'PhonePe') {
      setPhonepeInfo({ ...phonepeInfo, [name]: value });
    } else if (selectedMethod === 'GPay') {
      setGpayInfo({ ...gpayInfo, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      const paymentDetails = { method: selectedMethod, creditCardInfo, phonepeInfo, gpayInfo };
      setPaymentMethod(paymentDetails);
      nextStep();
    } else {
      setErrors(newErrors);
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!selectedMethod) {
      newErrors.selectedMethod = 'Payment method is required';
    } else if (selectedMethod === 'Credit Card') {
      Object.keys(creditCardInfo).forEach(key => {
        if (!creditCardInfo[key]) {
          newErrors[key] = `${key} is required`;
        }
      });
    } else if (selectedMethod === 'PhonePe' && !phonepeInfo.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (selectedMethod === 'GPay' && !gpayInfo.email) {
      newErrors.email = 'Email is required';
    }
    return newErrors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>Select Payment Method</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Payment Method</FormLabel>
        <RadioGroup
          aria-label="payment method"
          name="paymentMethod"
          value={selectedMethod}
          onChange={(e) => setSelectedMethod(e.target.value)}
        >
          <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
          <FormControlLabel value="PhonePe" control={<Radio />} label="PhonePe" />
          <FormControlLabel value="GPay" control={<Radio />} label="GPay" />
          <FormControlLabel value="Cash On Delivery" control={<Radio />} label="Cash On Delivery" />
        </RadioGroup>
      </FormControl>

      {errors.selectedMethod && <Typography color="error">{errors.selectedMethod}</Typography>}

      {selectedMethod === 'Credit Card' && (
        <Box>
          <Typography variant="h6">Credit Card Information</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Card Number"
                name="cardNumber"
                value={creditCardInfo.cardNumber}
                onChange={handleChange}
                fullWidth
                error={!!errors.cardNumber}
                helperText={errors.cardNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Card Holder Name"
                name="cardHolderName"
                value={creditCardInfo.cardHolderName}
                onChange={handleChange}
                fullWidth
                error={!!errors.cardHolderName}
                helperText={errors.cardHolderName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Valid Thru"
                name="validThru"
                value={creditCardInfo.validThru}
                onChange={handleChange}
                fullWidth
                error={!!errors.validThru}
                helperText={errors.validThru}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Expiry Date"
                name="expiryDate"
                value={creditCardInfo.expiryDate}
                onChange={handleChange}
                fullWidth
                error={!!errors.expiryDate}
                helperText={errors.expiryDate}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="CVV"
                name="cvv"
                value={creditCardInfo.cvv}
                onChange={handleChange}
                fullWidth
                error={!!errors.cvv}
                helperText={errors.cvv}
              />
            </Grid>
          </Grid>
        </Box>
      )}

      {selectedMethod === 'PhonePe' && (
        <Box>
          <Typography variant="h6">PhonePe Information</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                name="phone"
                value={phonepeInfo.phone}
                onChange={handleChange}
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>
          </Grid>
        </Box>
      )}

      {selectedMethod === 'GPay' && (
        <Box>
          <Typography variant="h6">GPay Information</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                value={gpayInfo.email}
                onChange={handleChange}
                fullWidth
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
          </Grid>
        </Box>
      )}

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

export default PaymentMethod;
