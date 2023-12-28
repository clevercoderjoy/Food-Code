import ShimmerHome from "../../components/shimmer/shimmerHome/shimmerHome";
import RestaurantCard from './../../components/restaurantCard/RestaurantCard';
import "./restaurantMapper.css";


const RestaurantMapper = ({ restaurants }) => {
  const shimmerCardCount = Array.from({ length: 10 }, () => "");
  return (
    <>
      <div className="restaurantCards">
        {
          restaurants?.length > 0 ?
            (restaurants?.map((restaurant) => <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />)) : (shimmerCardCount.map((card, index) => <ShimmerHome key={index} />))
        }
      </div>
    </>
  );
}

export default RestaurantMapper;
