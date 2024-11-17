import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginTxt, setLoginTxt] = useState("Login");

  console.log("header rerendered");
  return (
    <div className="header">
      <div className="logoWrapper">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Card</li>
          <li>
            <span className="loginButton" onClick={() => (loginTxt === "Login") ? setLoginTxt("Logout"): setLoginTxt("Login") }>
              {loginTxt}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
