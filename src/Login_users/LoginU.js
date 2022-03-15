import React, { useState } from "react";
import "../App.css";
import loginimg from "../images/loginlogo.png";
import signupimg from "../images/laptop.png";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LoginU = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginuserD = async (e) => {
    e.preventDefault();
    const res = await fetch("/loginD", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
      window.alert(data.error);
    } else {
      window.alert("Login Succesful");
      history.push("/About");
    }
  };
  const history = useHistory();

  return (
    <div className="wholebody">
      <div className="signuplogo">
        <img src={loginimg} />
        <h3>As a User</h3>
      </div>
      <section className="header">
        <div className="conatiner mt-5">
          <div className="signup">
            <form method="POST">
              <div className="wrapper">
                <i class="sideicon zmdi zmdi-email zmdi-hc-2x meterial-icons-name"></i>
                <div className="input_data">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="underline"></div>
                  <label>Email</label>
                </div>
              </div>

              <div className="wrapper">
                <i class="sideicon zmdi zmdi-key  zmdi-hc-2x meterial-icons-name"></i>
                <div className="input_data">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="underline"></div>
                  <label>Password</label>
                </div>
              </div>

              <input
                type="submit"
                name="signup"
                className="btnsubmit"
                value="Login"
                //     onClick={loginuserD}
              />
            </form>
            <div className="wrappernav">
              <NavLink className="navlink" to="/Register_User">
                {" "}
                Create an Account
              </NavLink>
            </div>
          </div>
          <div className="rightimg">
            <img src={signupimg} alt="SignUp Image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginU;
