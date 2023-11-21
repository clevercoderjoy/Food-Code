import "./headerComponent.css";

const HeaderComponent = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="logo">FoOd CoDe</div>
        <div className="navbar">
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>You</li>
              <li>Cart</li>
              <li>C-I</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default HeaderComponent;
