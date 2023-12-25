import { useState } from "react";
import "./header.css";

const Header = () => {
  const [btnState, setBtnState] = useState({ class: "loginButton", btnTxt: "Login" });

  const handleButtonClick = () => {
    switch (btnState.btnTxt)
    {
      case "Login":
        setBtnState(btnState => ({ ...btnState, btnTxt: "Logout", class: "logoutButton" }));
        break;
      case "Logout":
        setBtnState(btnState => ({ ...btnState, btnTxt: "Login", class: "loginButton" }));
        break;
    }
  }
  return (
    <>
      <header className="headerContainer">
        <div className="logo">FoOd CoDe</div>
        <div className="navbar">
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Cart</li>
              {
                btnState.btnTxt === "Logout" ? (<li>You</li>) : ""
              }
              <li onClick={handleButtonClick}>
                <button className={btnState.class}>{btnState.btnTxt}</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header;
