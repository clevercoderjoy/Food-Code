import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ changeButtonState, btnState }) => {

  const handleButtonClick = () => {
    console.log("btnState", btnState)
    changeButtonState();
  }
  return (
    <>
      <header className="headerContainer">
        <Link className="logo" to="/">FoOd CoDe</Link>
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  Cart
                </Link>
              </li>
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
