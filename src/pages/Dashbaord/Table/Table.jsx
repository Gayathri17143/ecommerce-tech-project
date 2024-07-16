import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
  createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
  createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
 
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: '#008000a6',
      // color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ff0000b8',
      // color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table" style={{marginTop:"50px"}}>
      <h3 style={{margin:"20px",color:"#e0e0e0"}}>Recent Orders</h3>
        <TableContainer 
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029",padding:"20px" ,background:"#1f2a40" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead  >
              <TableRow  >
                <TableCell>Product</TableCell>
                <TableCell align="left">Tracking ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {rows.map((row) => (
                <TableRow 
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "#cfcecf" }} component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell style={{ color: "#cfcecf" }} align="left">{row.trackingId}</TableCell>
                  <TableCell style={{ color: "#cfcecf" }} align="left">{row.date}</TableCell>
                  <TableCell style={{ color: "#cfcecf" }} align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  {/* <TableCell align="left" className="Details">Details</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
