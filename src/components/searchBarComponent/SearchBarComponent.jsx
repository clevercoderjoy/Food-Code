import InputComponent from "../inputComponent/InputComponent";
import ButtonComponent from './../buttonComponent/ButtonComponent';

import "./searchBarComponent.css";

const SearchBarComponent = () => {
  return (
    <>
      <div className="searchBarContainer">
        <InputComponent placeholderText="Search..." />
        <ButtonComponent buttonText="🔍" />
      </div>
    </>
  )
}

export default SearchBarComponent;