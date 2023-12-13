import "./filterButtons.css";

const FilterButtons = ({ filterByStars }) => {
  const handleFilterButtonClick = (e) => {
    const stars = e.target.textContent;
    switch (stars.toLowerCase())
    {
      case "5 stars":
        filterByStars(5);
        break;
      case "4 stars":
        filterByStars(4);
        break;
      case "3 stars":
        filterByStars(3);
        break;
      case "reset":
        filterByStars(0);
        break;
    }
  }
  return (
    <>
      <div className="filterButtonContainer">
        <button className="btn" onClick={handleFilterButtonClick}>5 Stars</button>
        <button className="btn" onClick={handleFilterButtonClick}>4 Stars</button>
        <button className="btn" onClick={handleFilterButtonClick}>3 Stars</button>
        <button className="btn" onClick={handleFilterButtonClick}>Reset</button>
      </div>
    </>
  )
}

export default FilterButtons;