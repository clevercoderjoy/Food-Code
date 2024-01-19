import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const authButtonClass = "loginButton text-center block border-none text-white font-bold py-[0.1rem] px-[0.2rem] transition-all duration-[100] ease-in-out rounded-[3px] uppercase tracking-widest";

  const listStyle = "inline-block text-xl p-2 cursor-pointer transition-all duration-110 ease-in-out hover:font-bold hover:scale-[1.1]";

  const [btnState, setBtnState] = useState({ class: `bg-[#0f9d58] ${authButtonClass}`, btnTxt: "Login" });

  const handleButtonClick = () => {
    switch (btnState.btnTxt)
    {
      case "Login":
        setBtnState(btnState => ({ ...btnState, btnTxt: "Logout", class: `bg-[tomato] ${authButtonClass}` }));
        break;
      case "Logout":
        setBtnState(btnState => ({ ...btnState, btnTxt: "Login", class: `bg-[#0f9d58] ${authButtonClass}` }));
        break;
    }
  }

  return (
    <>
      <header className="headerContainer relative flex items-center justify-between m-[0.3rem] border-2 border-black rounded-[3px]">
        <Link className="logo text-3xl font-bold my-0 mx-[0.2rem] no-underline cursor-pointer text-black" to="/">FoOd CoDe</Link>
        <div className="navbar m-auto">
          <nav>
            <ul className="list-none">
              <li className={listStyle}>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li className={listStyle}>
                <Link to="/about">
                  About
                </Link>
              </li>
              <li className={listStyle}>
                <Link to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="m-auto">
          <div className={`${listStyle} absolute right-[0px] top-[-2px]`} onClick={handleButtonClick}>
            <button className={btnState.class}>{btnState.btnTxt}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;
