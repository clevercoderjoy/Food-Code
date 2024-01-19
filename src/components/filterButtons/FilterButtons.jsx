const FilterButtons = ({ filterByStars }) => {

  const btnClass = "btn hover:uppercase hover:scale-110 text-center cursor-pointer font-bold p-2 rounded-[3px] border-black border-[2px] my-0 mx-4 tracking-widest transition-all duration-100 ease-in-out";

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
      <div className="filterButtonContainer text-center mt-8 mx-auto mb-4">
        <button className={btnClass} onClick={handleFilterButtonClick}>5 Stars</button>
        <button className={btnClass} onClick={handleFilterButtonClick}>4 Stars</button>
        <button className={btnClass} onClick={handleFilterButtonClick}>3 Stars</button>
        <button className={btnClass} onClick={handleFilterButtonClick}>Reset</button>
      </div>
    </>
  )
}

export default FilterButtons;