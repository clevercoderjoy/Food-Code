import InputComponent from "../inputComponent/InputComponent";

import "./searchBarComponent.css";

const SearchBarComponent = () => {
  return (
    <>
      <div className="searchBarContainer">
        <InputComponent placeholderText="Search..." />
        <button className="searchButton">🔍</button>
      </div>
    </>
  )
}

export default SearchBarComponent;