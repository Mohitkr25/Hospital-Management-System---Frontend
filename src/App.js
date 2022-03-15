import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import LoginA from "./Login_users/LoginA";
import About from "./Components/About";
import Contact from "./Components/Contact";
import LoginD from "./Login_users/LoginD";
import LogoutD from "./Login_users/LogoutD";
import RegisterD from "./Login_users/RegisterD";
import OtDetails from "./Components/ProfileMenuDoc/OtDetails";
import Appointement from "./Components/ProfileMenuDoc/Appointement";
import Profile from "./Components/ProfileMenuDoc/Profile";
import Patients from "./Components/ProfileMenuDoc/Patients";
import Allpatients from "./Components/ProfileMenuDoc/Allpatients";
import Addpatients from "./Components/ProfileMenuDoc/Addpatients";
import Navbar from "./Components/ProfileMenuDoc/Navbar";
import Register_user from "./Login_users/Register_user";
import LoginU from "./Login_users/LoginU";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/About">
            {/* <Header /> */}
            <About />
          </Route>

          <Route path="/LoginD">
            <Header />
            <LoginD />
          </Route>
          <Route path="/Login_user">
            <Header />
            <LoginU />
          </Route>
          <Route path="/Login_Admin">
            <Header />
            <LoginA />
          </Route>
          <Route path="/RegisterD">
            <Header />
            <RegisterD />
          </Route>
          <Route path="/Register_User">
            <Header />
            <Register_user />
          </Route>

          <Route path="/Contact">
            <Header />
            <Contact />
          </Route>
          <Route path="/LogoutD">
            <LogoutD />
          </Route>
          <Route path="/Patients">
            <Patients />
          </Route>
          {/* <Route path="/Allpatients" component={Allpatients} /> */}
          <Route path="/Addpatients">
            <Addpatients />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
