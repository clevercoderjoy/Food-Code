import RestaurantCard from "../restaurantCard/RestaurantCard";
import "./restaurant.css";


const Restaurant = ({ restaurants }) => {
  console.log(restaurants)
  return (
    <>
      <div className="restaurantCards">
        {
          restaurants?.length > 0 ?
            (restaurants?.map((restaurant) => <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />)) : <h2>Nothing to see here...</h2>
        }
      </div>
    </>
  );
}

export default Restaurant;
