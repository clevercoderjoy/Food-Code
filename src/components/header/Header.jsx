import "./header.css";

const Header = ({ changeButtonState, btnState }) => {

  const handleButtonClick = () => {
    console.log("btnState", btnState)
    changeButtonState();
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
