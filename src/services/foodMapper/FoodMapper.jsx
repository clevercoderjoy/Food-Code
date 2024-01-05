import FoodCard from "../../components/foodCard/FoodCard";
import ShimmerMenu from './../../components/shimmer/shimmerMenu/ShimmerMenu';
import "./foodMapper.css";

const FoodMapper = ({ menu }) => {

  return (
    <>
      {menu ? (<FoodCard foodItems={menu} />) : (<ShimmerMenu />)}
    </>
  );
}

export default FoodMapper;
