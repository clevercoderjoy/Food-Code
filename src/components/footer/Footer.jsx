import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footerContainer">
        <div className="footerLogo">
          <span>FoOd</span>
          <span>CoDe</span>
        </div>
        <div className="copyright">
          <span>built by </span>
          <span>
            <a href="https://clevercoderjoy.bio.link/" target="_blank" rel="noopener noreferrer">clevercoderjoy</a>
          </span>
        </div>
        <div className="footerNavBar">
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Cart</li>
              <li>You</li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  )
}

export default Footer;