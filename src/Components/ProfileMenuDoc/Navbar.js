import React from "react";
import "../../App.css";
import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  bgheader: {
    background: "tilt",
    marginTop: "0.5rem",
    marginRight: "1rem",
    border: ".5rem solid silver",
    borderRadius: "1.5rem solid silver",
    width: "70%",
    boxShadow: "0 8px 12px 0 rgba(1, 3, 2, 5)",
  },
  tabs: {
    color: "#FFFFFF",
    marginRight: 20,
    textDecoration: "none",
    fontSize: 20,
  },
});

function Navbar() {
  const classes = useStyle();
  return (
    <AppBar className={classes.bgheader} position="static">
      <Toolbar>
        <Typography component="h3" className={classes.tabs}>
          HeathCare system
        </Typography>

        <NavLink className={classes.tabs} to="Patients" exact>
          All Patients
        </NavLink>
        <NavLink className={classes.tabs} to="Addpatients" exact>
          Add Patieents
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
