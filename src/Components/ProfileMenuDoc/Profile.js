import React, { useEffect, useState } from "react";
import "../../App.css";
import "../Home.css";
import { useHistory } from "react-router-dom";
import MyImage from "../../images/member.png";

function Profile() {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const callAboutpage = async () => {
    try {
      const res = await fetch("/About", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      // console.log("Mydata", data);
      setUserData(data);
      // console.log("userdata = ", userData);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/LoginD");
    }
  };
  useEffect(() => {
    callAboutpage();
  }, []);
  return (
    <div className="P_container">
      {/* <h3>My Profile</h3> */}
      <form method="GET">
        <div className="Myprofile">
          <div>
            <img src={MyImage} />
            <p>{userData.name}</p>
          </div>
        </div>
        <div className="P_details">
          <p>
            Email Id - <span>{userData.email}</span>
          </p>
          <p>
            Profession - <span className="devp">{userData.profession}</span>
          </p>
        </div>
      </form>
      <div className="endline"></div>
      <div className="menucard">
        <a className="alink" href="#">
          Current Appointements
        </a>
        <a className="alink" href="/Patients">
          Patients Details
        </a>
        <a className="alink" href="#">
          OT Details{" "}
        </a>
        <a className="alink" href="#">
          Covid Details
        </a>
        <a className="blink" href="/LogoutD">
          Logout
        </a>
      </div>
    </div>
  );
}

export default Profile;
