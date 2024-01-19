import Input from "../input/Input";

const SearchBar = ({ onSearch }) => {

  const handleSearchInputChange = (e) => {
    const searchBarText = e.target.value;
    onSearch(searchBarText);
  }

  return (
    <>
      <div className="searchBarContainer mt-6 mx-auto mb-2 text-center">
        <Input placeholderText="Search...🔍" onChange={(e) => handleSearchInputChange(e)} />
      </div>
    </>
  )
}

export default SearchBar;