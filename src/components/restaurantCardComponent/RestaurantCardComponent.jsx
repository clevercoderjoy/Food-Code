import "./restaurantCardComponent.css";

const RestaurantCardComponent = ({ resData }) => {

  const { cloudinaryImageId, cuisines, name, avgRating, sla: { deliveryTime }, costForTwo, aggregatedDiscountInfoV3: { header, subHeader }, } = resData.info;
  const dots = "...";
  const imgPrefix = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const cuisinesWithDots = () => {
    let cuisine = "";
    for (let i = 0; i < 3; i++)
    {
      cuisine += " " + cuisines[i];
    }
    return cuisine + dots;
  }
  const cuisine = cuisines.length < 2 ? cuisines.map((cuisine) => `${cuisine} `) : (
    cuisinesWithDots()
  )
  return (
    <>
      <div className="restaurantContainer">
        <div className="restaurantImgContainer">
          <img src={imgPrefix + cloudinaryImageId} alt="food-image" className="restaurantImg" />
        </div>
        <div className="restaurantDetailsContainer">
          <div className="restaurantName">
            {name.length > 10 ? (`${name.substring(0, 10)}${dots}`) : (name)}
          </div>
          <div className="restaurantCuisines">
            <span>{cuisine}</span>
          </div>
          <div className="restaurantFoodDetails">
            <span className="ratings">{avgRating}⭐</span>
            <span className="separator">|</span>
            <span className="time">{deliveryTime} mins</span>
            <span className="separator">|</span>
            <span className="avgPrice">{costForTwo}</span>
          </div>
          <div className="offers">
            {`${header} | ${subHeader}`}
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
