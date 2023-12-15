import { CDN_URL } from "../../utils/constants";
import "./restaurantCard.css";

const RestaurantCard = ({ restaurant }) => {

  const { cloudinaryImageId, cuisines, name, avgRating, sla: { deliveryTime }, costForTwo, aggregatedDiscountInfoV3 } = restaurant.info;
  const dots = "...";
  const cuisinesWithDots = () => {
    let cuisine = "";
    for (let i = 0; i < 2; i++)
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
          <img src={CDN_URL + cloudinaryImageId} alt="food-image" className="restaurantImg" />
        </div>
        <div className="restaurantDetailsContainer">
          <div className="restaurantName">
            {name.length > 10 ? (`${name.substring(0, 10)}${dots}`) : (name)}
          </div>

          <div className="restaurantFoodDetails">
            <span className="ratings">{avgRating}⭐</span>
            <span className="separator">|</span>
            <span className="time">{deliveryTime} mins</span>
            <span className="separator">|</span>
            <span className="avgPrice">{costForTwo}</span>
          </div>
          <div className="restaurantCuisines">
            <span>{cuisine}</span>
          </div>
          <div className="offers">
            {
              (aggregatedDiscountInfoV3?.header === undefined && aggregatedDiscountInfoV3?.subHeader === undefined)
                ? "something"
                : `${aggregatedDiscountInfoV3?.header !== undefined ? aggregatedDiscountInfoV3?.header : ""} ${aggregatedDiscountInfoV3?.subHeader !== undefined ? aggregatedDiscountInfoV3?.subHeader : ""}`
            }
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

export default RestaurantCard;
