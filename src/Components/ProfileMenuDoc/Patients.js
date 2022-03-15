import React from "react";
import Profile from "./Profile";
import Allpatients from "./Allpatients";
import Addpatients from "./Addpatients";
import "../../App.css";
import Navbar from "./Navbar";
import { AppBar } from "@mui/material";

function Patients() {
  return (
    <div className="patientpage">
      <div className="pat_left">
        <Profile />
      </div>
      <div className="right">
        <Navbar />
        <div className="displayright">
          <Allpatients />
          {/* <AddUser /> */}
        </div>
      </div>
    </div>
  );
}

export default Patients;
