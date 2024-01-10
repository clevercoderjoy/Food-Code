import nonVegIcon from "../../../public/images/nonVegIcon.svg";
import vegIcon from "../../../public/images/vegIcon.svg";
import { dots, food_img_url } from "../../utils/constants";
import "./foodCard.css";

const FoodCard = ({ foodItems }) => {
  const menuItems = foodItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  return (
    <>
      <div className="menuContainer">
        <div className="resDetails">
          <div className="resInfo">
            <span className="resName">
              {foodItems?.data?.cards[0]?.card?.card?.info?.name}
            </span>
            <span className="resCuisines">
              {foodItems?.data?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
            </span>
            <span className="resArea">
              {foodItems?.data?.cards[0]?.card?.card?.info?.areaName}
            </span>
          </div>
          <div className="resRatings">
            <span className="starRatings">
              ⭐{foodItems?.data?.cards[0]?.card?.card?.info?.avgRating}
            </span>
            <span className="totalRatings">
              {foodItems?.data?.cards[0]?.card?.card?.info?.totalRatingsString}
            </span>
          </div>
        </div>

        <div className="resDelivery">
          {foodItems?.data?.cards[0]?.card?.card?.info?.feeDetails?.message}
        </div>

        <div className="resOffers">
          <div className="offerHeader">Special Offers Available For You</div>
          <div className="offerCarousels">
            {
              foodItems?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.map((offer) => <div className="offerCarousel" key={offer?.resId}>{offer?.info?.header}</div>)
            }
          </div>
        </div>
        <div className="menuItems">
          {
            menuItems?.map((items, index) => {
              return (index !== 0 && index !== 7 && index !== 8 && items?.card?.card?.itemCards?.length > 0) ? (
                <div className="categorizedItems" key={index}>
                  <div className="categoryTitle">{items?.card?.card?.title}</div>
                  <div className="categoryItems">
                    {
                      items?.card?.card?.itemCards?.map((item) => {
                        const { name, description, imageId, isVeg, price, id, variantsV2 } = item.card.info;
                        return (
                          <div className="foodItem" key={id}>
                            <div className="foodDetails">
                              <div className="foodName">{name}</div>
                              <div className="isVeg_price">
                                <div className="foodPrice"><span className="currency">₹</span>{
                                  price ? (price?.toString().substring(0, price?.toString().length - 2)) : (variantsV2?.variantGroups?.[0].variations?.[0]?.price)
                                }</div>
                                <div className="foodIsVeg">
                                  {
                                    isVeg ? <img src={vegIcon} alt="veg" /> : <img src={nonVegIcon} alt="veg" />
                                  }
                                </div>
                              </div>
                              <div className="foodDescription">{description?.length > 300 ? (description.substring(0, 150) + dots) : description}</div>
                            </div>
                            <div className="img_add">

                              <div className="foodImgContainer">
                                <img className="foodImg" src={
                                  imageId ? (food_img_url + imageId) : "https://www.pngkey.com/png/full/114-1144514_foodlogo-question-mark-food-question-mark-png.png"
                                } alt="food image" />
                              </div>
                              <button className="add">Add</button>
                              {/* <div className="added">
                                <button className="minus">-</button>
                                <div className="count">1</div>
                                <button className="plus">+</button>
                              </div> */}
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              ) : null;
            })
          }
        </div>
      </div>
    </>
  )
}

export default FoodCard;