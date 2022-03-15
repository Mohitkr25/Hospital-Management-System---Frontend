import React from "react";
import homelogo from "../images/health.png";
import "../Components/Home.css";
import member from "../images/member.png";
import admin from "../images/admin.png";

function Home() {
  return (
    <section className="homebody">
      <div className="mainheader">
        <div className="homelogo">
          <img src={homelogo} alt="Home logop" />
        </div>
        <nav id="HomenavBar">
          <div className="tagss">
            <ul>
              <li className="items">
                <a href="/Home">Home</a>
              </li>
              <li className="items">
                <a href="/LoginD">Login</a>
              </li>

              <li className="items">
                <a href="/About">About</a>
              </li>
              <li className="items">
                <a href="/Contact">Contact Us</a>
              </li>
              <li className="items">
                <a href="#">HelpLine</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="covidSec">
        <div className="covisdetails">
          <h3>Covid Details in our Hospital </h3>
          <div className="details">
            <h4>
              Total <span className="pat">Patients</span> upto{" -"}
            </h4>
            <p>1200</p>
          </div>
          <div className="details">
            <h4>
              Total <span className="rec">Recovered</span> upto{" -"}
            </h4>
            <p>800</p>
          </div>
          <div className="details">
            <h4>
              Active <span className="pat">Patients</span> upto{" -"}
            </h4>
            <p>105</p>
          </div>
          <div className="details">
            <h4>
              Total <span className="rec">Beds </span> Available{" -"}
            </h4>
            <p>85</p>
          </div>

          <div className="Ldetails">
            <a
              href="https://my-livecovid-tracker.herokuapp.com/"
              target="_blank"
            >
              Live covid updates
            </a>
          </div>
        </div>
      </div>
      <main>
        <section className="left-sec">
          <h2>Welcome To our Health Care System</h2>
          <h2>We are here for your care 24/7</h2>
          <div className="Edetails">
            <a href="#">For Emergency Service</a>
          </div>
          <div className="loginbox">
            <div className="loginoption">
              <img src={admin} alt="logo" />
              <div className="logincont">
                <a href="/Login_Admin" className="details mgl">
                  Login as Admin
                </a>
              </div>
            </div>
            <div className="loginoption">
              <img src={member} alt="logo" />
              <div className="logincont">
                <a href="/LoginD" className="details mgl">
                  Login as Member
                </a>
                <a href="/RegisterD" className="details mgl">
                  Register as Member
                </a>
              </div>
            </div>
            <div className="loginoption">
              <img src={member} alt="logo" />
              <div className="logincont">
                <a href="/Login_user" className="details mgl">
                  Login as User
                </a>
                <a href="/Register_User" className="details mgl">
                  Register as User
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="right-sec"></section>
      </main>
    </section>
  );
}

export default Home;
