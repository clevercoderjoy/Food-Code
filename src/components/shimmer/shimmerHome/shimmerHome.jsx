import { ShimmerButton, ShimmerText, ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";
import "./shimmerHome.css";


const Shimmer = () => {
  return (
    <>
      <div className="shimmerRestaurantContainer">
        <div className="shimmerRestaurantImgContainer">
          <ShimmerThumbnail className="shimmerRestaurantImg" height={150} rounded />
        </div>
        <div className="shimmerRestaurantDetailsContainer">
          <div className="shimmerRestaurantName">
            <ShimmerTitle className="shimmerRestaurantName" line={1} gap={10} />
          </div>
          <ShimmerText line={1} gap={10} />
          <div className="shimmerRestaurantCuisines">
            <ShimmerText line={3} gap={10} />
          </div>
        </div>
        <button className="shimmerView">
          <ShimmerButton size="md" variant="primary" />
        </button>
      </div >
    </>
  );
}

export default Shimmer;
