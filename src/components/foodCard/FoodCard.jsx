import "./foodCard.css";

const FoodCard = ({ foodItems }) => {
  // console.log(foodItems);
  console.log(foodItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const menuItems = foodItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const display = () => {
    const x = foodItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    x.map((xx, index) => { index !== 0 && index !== 7 && index !== 8 ? (console.log(xx.card.card.title)) : "" })
  }
  // display();
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
        <div className="menuItems">
          {
            menuItems.map((items, index) => {
              return (index !== 0 && index !== 7 && index !== 8) ? (
                <div className="categorizedItems" key={index}>
                  <div className="categoryTitle">{items?.card?.card?.title}</div>
                  <div className="categoryItems">
                    {
                      items?.card?.card?.itemCards.map((item) => {
                        const { name, description, imageId, isVeg, price, id } = item.card.info;
                        return (
                          <div className="foodItem" key={id}>
                            <div className="foodDetails">
                              <span className="foodIsVeg">{isVeg}</span>
                              <span className="foodName">{name}</span>
                              <span className="foodDescription">{description}</span>
                              <span className="foodPrice">{price}</span>
                            </div>
                            <br />
                            <div className="foodImg">imageId {imageId}</div>
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