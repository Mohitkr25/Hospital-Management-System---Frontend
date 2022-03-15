import React, { useEffect } from "react";
import { useHistory } from "react-router";
import "./about.css";
import Home from "./Home";
// import Home from "./Home";
import Appointement from "./ProfileMenuDoc/Appointement";
import CovidDeails from "./ProfileMenuDoc/CovidDeails";
import Profile from "./ProfileMenuDoc/Profile";
import Vaccinde from "./Vaccinde";

function About() {
  // const history = useHistory();
  // const callAboutpage = async () => {
  //   try {
  //     const res = await fetch("/About", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });

  //     const data = await res.json();
  //     console.log(data);

  //     if (!res.status === 200) {
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     history.push("/LoginD");
  //   }
  // };
  // useEffect(() => {
  //   callAboutpage();
  // }, []);

  return (
    <div className="aboutbody">
      <div className="left_container">
        <Profile />
      </div>
      <div className="right">
        {/* <Vaccinde /> */}
        <CovidDeails />
      </div>
    </div>
  );
}

export default About;
