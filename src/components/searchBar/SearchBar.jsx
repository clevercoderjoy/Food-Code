import Input from "../input/Input";

import "./searchBar.css";

const SearchBar = ({ onSearch }) => {

  const handleSearchInputChange = (e) => {
    const searchBarText = e.target.value;
    onSearch(searchBarText);
  }

  return (
    <>
      <div className="searchBarContainer">
        <Input placeholderText="Search..." onChange={(e) => handleSearchInputChange(e)} />
      </div>
    </>
  )
}

export default SearchBar;