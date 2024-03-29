import ShimmerHome from "../../components/shimmer/shimmerHome/shimmerHome";
import RestaurantCard from './../../components/restaurantCard/RestaurantCard';

const RestaurantMapper = ({ restaurants }) => {
  const shimmerCardCount = Array.from({ length: 10 }, () => "");
  return (
    <>
      <div className="restaurantCards flex flex-wrap items-center justify-center">
        {
          restaurants?.length > 0 ?
            (restaurants?.map((restaurant) => <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />)) : (shimmerCardCount.map((card, index) => <ShimmerHome key={index} />))
        }
      </div>
    </>
  );
}

export default RestaurantMapper;
