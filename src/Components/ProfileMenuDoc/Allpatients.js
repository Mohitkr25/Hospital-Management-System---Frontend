import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "30px 0 0 30px",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#000000",
      color: "#FFFFFF",
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
});
function Allpatients() {
  const [Patients, setPatients] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  // const deleteUserData = async (id) => {
  //     await deleteUser(id);
  //     getAllUsers();
  // }

  const getAllUsers = async () => {
    const res = await fetch("/Patients", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    setPatients(data);
  };

  const classes = useStyles();
  return (
    <div className="scrolldiv">
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Doctor Name</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Patients.map((user) => (
            <TableRow className={classes.row}>
              {/* <TableCell>{user._id}</TableCell> change it to user.id to use JSON Server */}
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.date}</TableCell>
              <TableCell>{user.doctor_name}</TableCell>
              <TableCell>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ marginRight: 10 }}
                >
                  Edit
                </Button>
                <Button color="secondary" variant="contained">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Allpatients;
