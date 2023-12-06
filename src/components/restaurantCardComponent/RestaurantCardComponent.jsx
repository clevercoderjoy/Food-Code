import "./restaurantCardComponent.css";

const RestaurantCardComponent = ({ resData }) => {
  const dots = "...";
  const imgPrefix = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const cuisinesWithDots = () => {
    let cuisines = "";
    for (let i = 0; i < 3; i++)
    {
      cuisines += " " + resData.info.cuisines[i];
    }
    return cuisines + dots;
  }
  const cuisines = resData.info.cuisines.length < 2 ? resData.info.cuisines.map((cuisine) => `${cuisine} `) : (
    cuisinesWithDots()
  )
  return (
    <>
      <div className="restaurantContainer">
        <div className="restaurantImgContainer">
          <img src={imgPrefix + resData.info.cloudinaryImageId} alt="food-image" className="restaurantImg" />
        </div>
        <div className="restaurantDetailsContainer">
          <div className="restaurantName">
            {resData.info.name.length > 10 ? (`${resData.info.name.substring(0, 10)}${dots}`) : (resData.info.name)}
          </div>
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
