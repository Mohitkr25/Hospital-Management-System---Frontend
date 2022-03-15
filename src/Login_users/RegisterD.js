import React, { useState } from "react";
import "../App.css";
import signuplogo from "../images/signup.png";
import signupimg from "../images/contract.png";
import { useHistory } from "react-router-dom";

function RegisterD() {
  const [userDoc, setUserDoc] = useState({
    name: "",
    email: "",
    profession: "",
    mobile: "",
    address: "",
    password: "",
    cnf_password: "",
  });

  const history = useHistory();

  let name, value;
  const handleinputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    // console.log(name, value);

    setUserDoc({ ...userDoc, [name]: value });
  };

  const postdata = async (e) => {
    e.preventDefault();
    const { name, email, profession, mobile, address, password, cnf_password } =
      userDoc;
    const res = await fetch("/registerD", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        profession,
        mobile,
        address,
        password,
        cnf_password,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      window.alert(data.error);
      console.log("Invalid Registration");
      // console.log(data);
    } else {
      window.alert("Registration Succesful");
      console.log("Registration Succesful");

      history.push("/LoginD");
    }
  };

  return (
    <div className="wholebody">
      <div className="signuplogo">
        <img src={signuplogo} />
        <h3>As a Doctor/Staf</h3>
      </div>
      <section className="header">
        <div className="conatiner mt-5">
          <div className="signup">
            <form method="POST">
              <div className="wrapper">
                <i class="sideicon zmdi zmdi-account-circle  zmdi-hc-2x meterial-icons-name"></i>
                <div className="input_data">
                  <input
                    type="text"
                    required
                    name="name"
                    value={userDoc.name}
                    onChange={handleinputs}
                  />
                  <div className="underline"></div>
                  <label>Name</label>
                </div>
              </div>
              <div className="wrapper">
                <i class="sideicon zmdi zmdi-email zmdi-hc-2x meterial-icons-name"></i>
                <div className="input_data">
                  <input
                    type="email"
                    required
                    name="email"
                    value={userDoc.email}
                    onChange={handleinputs}
                  />
                  <div className="underline"></div>
                  <label>Email</label>
                </div>
              </div>
              <div className="wrapper">
                <i class="sideicon zmdi zmdi-account-circle  zmdi-hc-2x meterial-icons-name"></i>
                <div className="input_data">
                  <input
                    type="text"
                    required
                    name="profession"
                    autoComplete="Off"
                    value={userDoc.profession}
                    onChange={handleinputs}
                  />
                  <div className="underline"></div>
                  <label>Your Profession</label>
                </div>
              </div>
              <div className="wrapper">
                <i class="sideicon zmdi zmdi-phone  zmdi-hc-2x meterial-icons-name"></i>
                <div className="input_data">
                  <input
                    type="text"
                    required
                    name="mobile"
                    value={userDoc.mobile}
                    onChange={handleinputs}
                  />
                  <div className="underline"></div>
                  <label>Mobile Number</label>
                </div>
              </div>
              <div className="wrapper">
                <i class="sideicon zmdi zmdi-home  zmdi-hc-2x meterial-icons-name"></i>
                <div className="input_data">
                  <input
                    type="text"
                    required
                    name="address"
                    autoComplete="Off"
                    value={userDoc.address}
                    onChange={handleinputs}
                  />
                  <div className="underline"></div>
                  <label>Current address</label>
                </div>
              </div>
              <div className="wrapper">
                <i class="sideicon zmdi zmdi-key  zmdi-hc-2x meterial-icons-name"></i>
                <div className="input_data">
                  <input
                    type="password"
                    required
                    name="password"
                    value={userDoc.password}
                    onChange={handleinputs}
                  />
                  <div className="underline"></div>
                  <label>Password</label>
                </div>
              </div>
              <div className="wrapper">
                <i class="sideicon zmdi zmdi-key  zmdi-hc-2x meterial-icons-name"></i>
                <div className="input_data">
                  <input
                    type="password"
                    required
                    name="cnf_password"
                    value={userDoc.cnf_password}
                    onChange={handleinputs}
                  />
                  <div className="underline"></div>
                  <label>Cnf Password</label>
                </div>
              </div>

              <input
                type="submit"
                name="signup"
                className="btnsubmit"
                value="Register"
                onClick={postdata}
              />
            </form>
          </div>
          <div className="rightimg">
            <img src={signupimg} alt="SignUp Image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegisterD;
