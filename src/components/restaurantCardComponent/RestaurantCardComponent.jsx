import "./restaurantCardComponent.css";

const RestaurantCardComponent = ({ resData }) => {
  const dots = "...";
  const cuisinesWithDots = () => {
    let cuisines = "";
    for (let i = 0; i < 4; i++)
    {
      cuisines += " " + resData.info.cuisines[i];
    }
    return cuisines + dots;
  }
  const cuisines = resData.info.cuisines.length < 5 ? resData.info.cuisines.map((cuisine) => `${cuisine} `) : (
    cuisinesWithDots()
  )
  return (
    <>
      <div className="restaurantContainer">
        <div className="restaurantImgContainer">
          <span className="restaurantImg">{
            resData.info.name.length > 15 ? (resData.info.name.substring(0, 12) + dots) : (resData.info.name)
          }</span>
        </div>
        <div className="restaurantDetailsContainer">
          <div className="restaurantCuisines">
            <span>{cuisines}</span>
          </div>
          <div className="restaurantFoodDetails">
            <span className="ratings">{resData.info.avgRating}⭐</span>
            <span className="separator">|</span>
            <span className="time">{resData.info.sla.deliveryTime} mins</span>
            <span className="separator">|</span>
            <span className="avgPrice">{resData.info.costForTwo}</span>
          </div>
          <div className="offers">
            {`${resData.info.aggregatedDiscountInfoV3?.header} | ${resData.info.aggregatedDiscountInfoV3?.subHeader}`}
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
