import "./foodCard.css";

const FoodCard = ({ foodItems }) => {
  console.log(foodItems);
  console.log(foodItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
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
          <div className="offerHeader">Special Offers For You</div>
          <div className="offerCarousels">
            {
              foodItems?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.offers.map((offer) => <div className="offerCarousel" key={offer?.resId}>{offer?.info?.header}</div>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodCard;