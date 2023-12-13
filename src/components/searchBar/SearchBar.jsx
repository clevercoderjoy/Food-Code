import Input from "../input/Input";

import "./searchBar.css";

const SearchBar = () => {
  return (
    <>
      <div className="searchBarContainer">
        <Input placeholderText="Search..." />
        <button className="searchButton">🔍</button>
      </div>
    </>
  )
}

export default SearchBar;