import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, emailId, service, payWith, status) {
  return { name, emailId, service, payWith, status };
}

const rows = [
  createData(
    "Sufi Ahmed Hamim",
    "sufi@gmail.com",
    "Local Moving",
    "Credit Card",
    "Pending"
  ),
  createData(
    "Sufi Ahmed Hamim",
    "sufi@gmail.com",
    "Long Distance Moving",
    "Credit Card",
    "Done"
  ),
  createData(
    "Sufi Ahmed Hamim",
    "sufi@gmail.com",
    "Storage Unit",
    "Credit Card",
    "On going"
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: "50%",
  },
});

const OrderList = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Email ID</StyledTableCell>
            <StyledTableCell align="center">Service</StyledTableCell>
            <StyledTableCell align="center">Pay With</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.emailId}</StyledTableCell>
              <StyledTableCell align="center">{row.service}</StyledTableCell>
              <StyledTableCell align="center">{row.payWith}</StyledTableCell>
              <StyledTableCell align="center">
                {row.status}{" "}
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  {/* {open ? (
                    <List>
                      <ListItem>
                        <ListItemText primary="pending" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="pending" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="pending" />
                      </ListItem>
                    </List>
                  ) : null} */}
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderList;
