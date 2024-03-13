import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderService from "../../Service/OrderService";
import {
  Box,
  Container,
  Grid,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  styled,
  tableCellClasses,
} from "@mui/material";

export default function OrderByDate() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const date = new Date().toISOString().split("T")[0];

    OrderService.getorderbyDate(date).then((response) => {
      if (response.status >= 200 && response.status <= 205) {
        console.log(response.data, "--------------order details");
        // console.log(response.data[0].orderItems,'-----')
        setData(response.data);
      } else {
        console.error("Error fetching plan data.");
      }
    });
  }, []);
  console.log("cust");
  console.log(data);
  const handlePlan = () => {
    navigate("/Editplan");
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#8AAAE5",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const handleOrder = () => {
    console.log("inside handle logout");
    navigate("/");
  };
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      {data.length > 0 && data[0].orderItems.length > 0 ? (
        <Box>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Order ID </StyledTableCell>
                  <StyledTableCell align="center">User Name </StyledTableCell>
                  <StyledTableCell align="center">Date </StyledTableCell>
                  <StyledTableCell align="center">Dish Name </StyledTableCell>
                  <StyledTableCell align="center">Quantity </StyledTableCell>
                  <StyledTableCell align="center">
                    Points Deducted{" "}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Order Status{" "}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Payment Type{" "}
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="center">
                      {row.orderId}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.orderItems[0].userNameOrGuestName}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.date}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.orderItems[0].dishName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.orderItems[0].quantity}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.orderItems[0].pointsDeducted}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.orderItems[0].orderStatus}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.orderItems[0].paymentType}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 ml-3 border border-blue-500 hover:border-transparent rounded">
          No orders yet
        </button>
      )}
          
    </Container>
  );
}
