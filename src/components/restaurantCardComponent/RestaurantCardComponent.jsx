import "./restaurantCardComponent.css";

const RestaurantCardComponent = () => {
  return (
    <>
      <div className="restaurantContainer">
        <div className="restaurantImgContainer">
          <img src="https://meghanafoods.co.in/assets/img/logo.png" alt="restaurantImg" className="restaurantImg" />
        </div>
        <div className="restaurantDetailsContainer">
          <div className="restaurantName">
            Meghana Foods
          </div>
          <div className="restaurantCuisines">
            <span>cuisine 1</span>
            <span>cuisine 2</span>
          </div>
          <div className="restaurantFoodDetails">
            <span className="ratings">4.3⭐</span>
            <span className="separator">|</span>
            <span className="time">27 mins</span>
            <span className="separator">|</span>
            <span className="avgPrice">400 for Two</span>
          </div>
          <div className="offers">
            40% off | Use SPECIALS
          </div>
        </div>
        <button className="view">
          <a href="/">
            Quick View
          </a>
        </button>
      </div >
    </>
  );
}

export default RestaurantCardComponent;
