import React from "react";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import UserService from "../../Service/UserService";

export default function Alluser() {
  const [data, setData] = useState([]);
  const email_id = sessionStorage.getItem("email");
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const user_id = sessionStorage.getItem("id");
    console.log(user_id, "user id from session");
    UserService.getAllUser().then((response) => {
      if (response.status >= 200 && response.status <= 205) {
        console.log(response.data, "--------------order details");
        // console.log(response.data[0].orderItems,'-----')
        setData(response.data);
      } else {
        console.error("Error fetching plan data.");
      }
    });
  }, [email_id]);

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
      {data.length > 0 ? (
        <Box>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>User Id </StyledTableCell>
                  <StyledTableCell align="center">User Name </StyledTableCell>
                  <StyledTableCell align="center">Plan_Id </StyledTableCell>
                  <StyledTableCell align="center">Contact </StyledTableCell>
                  <StyledTableCell align="center">email </StyledTableCell>
                  <StyledTableCell align="center">address </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="center">
                      {row.user_id}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.plan_Id}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.contact_num}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.address}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 ml-3 border border-blue-500 hover:border-transparent rounded">
          No users registered no website yet
        </button>
      )}
          
    </Container>
  );
}
