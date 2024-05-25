// src/components/Confirmation.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const Confirmation = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Order Confirmed</Typography>
      <Typography>Thank you for your purchase! Your order has been confirmed.</Typography>
    </Box>
  );
};

export default Confirmation;
