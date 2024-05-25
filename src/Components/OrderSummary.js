// src/components/OrderSummary.js
import React from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';

const OrderSummary = ({ billingInfo, shippingInfo, paymentMethod, confirmOrder, prevStep }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Order Summary</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" style={{fontWeight:"600"}}>Billing Information</Typography>
          <Typography>{billingInfo.firstName} {billingInfo.lastName}</Typography>
          <Typography>{billingInfo.address}, {billingInfo.city}, {billingInfo.state}, {billingInfo.zip}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" style={{fontWeight:"600"}}>Shipping Information</Typography>
          <Typography>{shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state}, {shippingInfo.zip}</Typography>
        </Grid>
      </Grid>

      <Typography variant="subtitle1" gutterBottom style={{fontWeight:"600"}}>Payment Information</Typography>
      <Typography>Method: {paymentMethod.method}</Typography>
      {paymentMethod.method === 'Credit Card' && (
        <Box>
          <Typography>Card Number: {paymentMethod.creditCardInfo.cardNumber}</Typography>
          <Typography>Card Holder: {paymentMethod.creditCardInfo.cardHolderName}</Typography>
          <Typography>Valid Thru: {paymentMethod.creditCardInfo.validThru}</Typography>
          <Typography>Expiry Date: {paymentMethod.creditCardInfo.expiryDate}</Typography>
          <Typography>CVV: {paymentMethod.creditCardInfo.cvv}</Typography>
        </Box>
      )}
      {paymentMethod.method === 'PhonePe' && <Typography>Phone: {paymentMethod.phonepeInfo.phone}</Typography>}
      {paymentMethod.method === 'GPay' && <Typography>Email: {paymentMethod.gpayInfo.email}</Typography>}
      {paymentMethod.method === 'Cash On Delivery' && <Typography>Cash On Delivery</Typography>}

      <Box mt={2}>
        <Button variant="contained" onClick={prevStep} style={{ marginRight: '8px' }}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={confirmOrder}>
          Confirm Order
        </Button>
      </Box>
    </Box>
  );
};

export default OrderSummary;
