import "./headerComponent.css";

const HeaderComponent = () => {
  return (
    <>
      <header className="headerContainer">
        <div className="logo">FoOd CoDe</div>
        <div className="navbar">
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>You</li>
              <li>Cart</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default HeaderComponent;
