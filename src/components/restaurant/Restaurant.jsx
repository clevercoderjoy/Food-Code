import RestaurantCard from "../restaurantCard/RestaurantCard";
import Shimmer from "../shimmer/shimmer";
import "./restaurant.css";


const Restaurant = ({ restaurants }) => {
  const shimmerCardCount = Array.from({ length: 10 }, () => "");
  return (
    <>
      <div className="restaurantCards">
        {
          restaurants?.length > 0 ?
            (restaurants?.map((restaurant) => <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />)) : (shimmerCardCount.map((card, index) => <Shimmer key={index} />))
        }
      </div>
    </>
  );
}

export default Restaurant;
