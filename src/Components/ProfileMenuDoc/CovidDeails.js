import React from "react";
import "../../App.css";
import Vaccinde from "../Vaccinde";

function CovidDeails() {
  return (
    <div className="CovidDetails">
      <div className="flexrow">
        <div className="vaccinpage">
          <p>Vaccination Days </p>
          <input type="text" />
          <p>Vaccine Available </p>
          <input type="text" />
          <p>Total Vaccination so far </p>
          <input type="text" />
        </div>
        <div className="lines">
          {/* <p>Live covid updates With respect to our Hospitals . </p>
          <span>Details of Available beds and Vaccination</span> */}
        </div>
        <div className="emergencybtn">
          <a href="#">For Emergency</a>
        </div>
      </div>

      <div className="covidSec">
        <div className="covisdetails">
          <form>
            <h3>Covid Details in our Hospital </h3>
            <div className="details">
              <h4>
                Total <span className="pat">Patients</span> upto{" -"}
              </h4>
              <input type="text" />
            </div>
            <div className="details">
              <h4>
                Total <span className="rec">Recovered</span> upto{" -"}
              </h4>
              <input type="text" />
            </div>
            <div className="details">
              <h4>
                Active <span className="pat">Patients</span> upto{" -"}
              </h4>
              <input type="text" />
            </div>
            <div className="details">
              <h4>
                Total <span className="rec">Beds </span> Available{" -"}
              </h4>
              <input type="text" />
            </div>
          </form>

          <div className="Ldetails">
            <a
              className="alink"
              href="https://my-livecovid-tracker.herokuapp.com/"
              target="_blank"
            >
              Live covid updates
            </a>
            <a
              className="Ulink"
              href="https://my-livecovid-tracker.herokuapp.com/"
              target="_blank"
            >
              UPDATE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidDeails;
