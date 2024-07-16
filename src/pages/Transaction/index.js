import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
 

function createData(dateTime, seller, sku, method, type, status, country, currency, fee, tax, total) {
  return { dateTime, seller, sku, method, type, status, country, currency, fee, tax, total };
}

const rows = [
  createData("2 March 2022 12:30 PM", "Seller1", "SKU123", "Online", "Type1", "Approved", "USA", "USD", 10, 2, 12),
  createData("2 March 2022 1:00 PM", "Seller2", "SKU124", "Online", "Type2", "Pending", "Canada", "CAD", 20, 3, 23),
  createData("2 March 2022 2:30 PM", "Seller3", "SKU125", "Offline", "Type1", "Approved", "UK", "GBP", 15, 2.5, 17.5),
  createData("2 March 2022 3:45 PM", "Seller4", "SKU126", "Online", "Type3", "Delivered", "Australia", "AUD", 25, 4, 29),
  createData("2 March 2022 4:15 PM", "Seller5", "SKU127", "Offline", "Type2", "Approved", "India", "INR", 5, 0.75, 5.75),
  createData("2 March 2022 5:00 PM", "Seller6", "SKU128", "Online", "Type1", "Pending", "Germany", "EUR", 30, 5, 35),
];

const makeStyle = (status) => {
  if (status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  } else if (status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    };
  }
}

export default function BasicTable() {
  return (
    <div className="Table" style={{ marginTop: "50px" }}>
      <h3 style={{  color:"#e0e0e0",backgroundColor: 'none' }}>Recent Orders</h3>
      <TableContainer  
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029", padding: "20px",background: '#1f2a40' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date & Time</TableCell>
              <TableCell align="left">Seller</TableCell>
              <TableCell align="left">SKU</TableCell>
              <TableCell align="left">Method</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Country</TableCell>
              <TableCell align="left">Currency</TableCell>
              <TableCell align="left">Fee</TableCell>
              <TableCell align="left">Tax</TableCell>
              <TableCell align="left">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.sku}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.dateTime}</TableCell>
                <TableCell align="left">{row.seller}</TableCell>
                <TableCell align="left">{row.sku}</TableCell>
                <TableCell align="left">{row.method}</TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
                <TableCell align="left">{row.country}</TableCell>
                <TableCell align="left">{row.currency}</TableCell>
                <TableCell align="left">{row.fee}</TableCell>
                <TableCell align="left">{row.tax}</TableCell>
                <TableCell align="left">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
