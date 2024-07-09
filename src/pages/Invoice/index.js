import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';

const InvoicePage = () => {
  const [invoiceItems, setInvoiceItems] = useState([{ description: '', quantity: 1, price: 0 }]);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const total = invoiceItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const tax = total * 0.1; // 10% tax
    setTotal(total);
    setTax(tax);
    setGrandTotal(total + tax);
  }, [invoiceItems]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const items = [...invoiceItems];
    items[index][name] = value;
    setInvoiceItems(items);
  };

  const handleAddItem = () => {
    setInvoiceItems([...invoiceItems, { description: '', quantity: 1, price: 0 }]);
  };

  const handleRemoveItem = (index) => {
    const items = [...invoiceItems];
    items.splice(index, 1);
    setInvoiceItems(items);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/invoices', { items: invoiceItems, total, tax, grandTotal });
      alert('Invoice submitted successfully!');
    } catch (error) {
      alert('Failed to submit invoice');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create Invoice
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoiceItems.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  name="description"
                  value={item.description}
                  onChange={(e) => handleInputChange(index, e)}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="quantity"
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleInputChange(index, e)}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="price"
                  type="number"
                  value={item.price}
                  onChange={(e) => handleInputChange(index, e)}
                  fullWidth
                />
              </TableCell>
              <TableCell>{(item.quantity * item.price).toFixed(2)}</TableCell>
              <TableCell>
                <Button onClick={() => handleRemoveItem(index)}>Remove</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={handleAddItem}>Add Item</Button>
      <Typography variant="h6" gutterBottom>
        Subtotal: {total.toFixed(2)}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Tax (10%): {tax.toFixed(2)}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Grand Total: {grandTotal.toFixed(2)}
      </Typography>
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Submit Invoice
      </Button>
    </Container>
  );
};

export default InvoicePage;
