import { useState } from 'react';
import Home from '../../pages/home/Home';
import Footer from '../footer/Footer';
import Header from '../header/Header';


const FoodCode = () => {
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
    <div className="foodCode">
      <Header changeButtonState={handleButtonClick} btnState={btnState} />
      <Home />
      <Footer changeButtonState={handleButtonClick} btnState={btnState} />
    </div>
  );
}

export default FoodCode;
