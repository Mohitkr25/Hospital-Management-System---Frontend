import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import "../../App.css";
import { InputLabel } from "@mui/material";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "0% 0 0 20%",
    "& > *": {
      marginTop: 10,
    },
  },
});
function Addpatients() {
  const classes = useStyles();
  let history = useHistory();

  const [pat, setpat] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    doctor_name: "",
  });
  const { name, phone, address, date, doctor_name } = pat;

  const onValueChange = (e) => {
    setpat({ ...pat, [e.target.name]: e.target.value });
  };
  const addUserDetails = async (e) => {
    const { name, phone, address, date, doctor_name } = pat;
    const res = await fetch("/addpatient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        address,
        date,
        doctor_name,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      window.alert(data.error);
      console.log("Invalid Registration");
      // console.log(data);
    } else {
      window.alert("add Succesful");
      console.log("add Succesful");
      history.push("/Patients");
    }
  };

  // history.push("./all");
  return (
    <div className="patientpage">
      <div className="pat_left">
        <Profile />
      </div>
      <div className="right">
        <Navbar />
        <div className="displayright">
          <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input
                name="name"
                required
                value={pat.name}
                onChange={(e) => onValueChange(e)}
                id="my-input"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Phone</InputLabel>
              <Input
                name="phone"
                required
                value={pat.phone}
                onChange={(e) => onValueChange(e)}
                id="my-input"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Address</InputLabel>
              <Input
                name="address"
                value={pat.address}
                onChange={(e) => onValueChange(e)}
                id="my-input"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">date</InputLabel>
              <Input
                name="date"
                value={pat.date}
                onChange={(e) => onValueChange(e)}
                id="my-input"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Doctor name</InputLabel>
              <Input
                name="doctor_name"
                value={pat.doctor_name}
                onChange={(e) => onValueChange(e)}
                id="my-input"
              />
            </FormControl>
            <FormControl>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addUserDetails()}
              >
                Add User
              </Button>
            </FormControl>
          </FormGroup>
        </div>
      </div>
    </div>
  );
}

export default Addpatients;
