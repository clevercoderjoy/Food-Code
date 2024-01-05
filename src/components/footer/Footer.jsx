import { Link } from "react-router-dom";
import "./footer.css";

const Footer = ({ changeButtonState, btnState }) => {
  const handleButtonClick = () => {
    console.log("btnState", btnState)
    changeButtonState();
  }
  return (
    <>
      <footer className="footerContainer">
        <Link className="footerLogo" to="/">
          <span className="food">FoOd</span>
          <span className="code">CoDe</span>
        </Link>
        <div className="copyright">
          <span>built by </span>
          <span>
            <a href="https://clevercoderjoy.bio.link/" target="_blank" rel="noopener noreferrer">clevercoderjoy</a>
          </span>
        </div>
        <div className="footerNavBar">
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
      </footer>
    </>
  )
}

export default Footer;