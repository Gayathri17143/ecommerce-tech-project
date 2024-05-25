// src/components/Checkout.js
import React, { useState } from 'react';
import BillingForm from './BillingForm';
import ShippingForm from './ShippingForm';
import PaymentMethod from './PaymentMethod';
import OrderSummary from './OrderSummary';
import Confirmation from './Confirmation';
import { Container, Stepper, Step, StepLabel, Box, useMediaQuery, useTheme } from '@mui/material';

const steps = ['Billing Information', 'Shipping Information', 'Payment Method', 'Order Summary', 'Confirmation'];

const Checkout = () => {
  const [step, setStep] = useState(0);
  const [billingInfo, setBillingInfo] = useState({});
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const confirmOrder = () => nextStep();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <BillingForm nextStep={nextStep} setBillingInfo={setBillingInfo} />;
      case 1:
        return <ShippingForm nextStep={nextStep} prevStep={prevStep} setShippingInfo={setShippingInfo} />;
      case 2:
        return <PaymentMethod nextStep={nextStep} prevStep={prevStep} setPaymentMethod={setPaymentMethod} />;
      case 3:
        return <OrderSummary 
                 billingInfo={billingInfo} 
                 shippingInfo={shippingInfo} 
                 paymentMethod={paymentMethod} 
                 confirmOrder={confirmOrder} 
                 prevStep={prevStep} 
               />;
      case 4:
        return <Confirmation />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <Container style={{padding:"40px",border:"1px solid #ccc",marginTop:"40px",marginBottom:"40px" }}>
      <Stepper activeStep={step} orientation={isMobile ? 'vertical' : 'horizontal'}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box mt={3}>
        {getStepContent(step)}
      </Box>
    </Container>
  );
};

export default Checkout;
