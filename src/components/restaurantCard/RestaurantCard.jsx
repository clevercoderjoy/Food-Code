import { Link } from "react-router-dom";
import { CDN_URL, dots } from "../../utils/constants";

const RestaurantCard = ({ restaurant }) => {

  const { cloudinaryImageId, cuisines, name, avgRating, promoted, sla: { deliveryTime }, costForTwo, aggregatedDiscountInfoV3 } = restaurant.info;
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
      <div className="restaurantContainer w-[230px] h-[375px] mt-4 mx-2 mb-[1.5rem] rounded-[10px] border-2 border-black transition-all duration-100 ease-in-out relative hover:scale-[1.1]">
        {promoted ?
          <label className="absolute z-10 font-bold top-[0px] left-[0px] border-black rounded-tl-[8px] bg-black text-white py-1 px-2">Promoted</label>
          :
          ""
        }
        <div className="restaurantImgContainer m-auto text-center p-2">
          <img src={CDN_URL + cloudinaryImageId} alt="food-image" className="restaurantImg w-[100%] object-cover h-[150px] rounded-[10px]" />
        </div>
        <div className="restaurantDetailsContainer my-1 mx-2 border-t-2 border-black">
          <div className="restaurantName text-[25px] font-bold">
            {name.length > 10 ? (`${name.substring(0, 10)}${dots}`) : (name)}
          </div>

          <div className="restaurantFoodDetails flex justify-between items-center text-xs m-[0.3rem]">
            <span className="ratings">{avgRating}⭐</span>
            <span className="separator font-bold">|</span>
            <span className="time">{deliveryTime} mins</span>
            <span className="separator font-bold">|</span>
            <span className="avgPrice">{costForTwo}</span>
          </div>
          <div className="restaurantCuisines text-left px-1">
            <span>{cuisine}</span>
          </div>
          <div className="offers my-2 mx-0 rounded-[3px] font-bold text-base flex items-center justify-center">
            {
              (aggregatedDiscountInfoV3?.header === undefined && aggregatedDiscountInfoV3?.subHeader === undefined)
                ? "Offers Coming Soon"
                : `${aggregatedDiscountInfoV3?.header !== undefined ? aggregatedDiscountInfoV3?.header : ""} ${aggregatedDiscountInfoV3?.subHeader !== undefined ? aggregatedDiscountInfoV3?.subHeader : ""}`
            }
          </div>
        </div>
        <button className="view text-center block cursor-pointer font-bold p-2 text-sm rounded-[3px] tracking-[0.1rem] border-black border-2 transition-all duration-100 ease-in-out absolute bottom-[5px] left-[50px] hover:uppercase">
          <Link to={`/restaurants/${restaurant?.info?.id}`}>
            Quick View
          </Link>
        </button>
      </div >
    </>
  );
}

export default RestaurantCard;
