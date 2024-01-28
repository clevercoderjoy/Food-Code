import { useState } from "react";
import FoodCard from "../../components/foodCard/FoodCard";
import ShimmerMenu from './../../components/shimmer/shimmerMenu/ShimmerMenu';

const FoodMapper = ({ menu }) => {
  const [accordionOpen, setAccordionOpen] = useState(0);

  const handleAccordionToggle = (index) => {
    setAccordionOpen(accordionOpen === index ? null : index)
  }

  return (
    <>
      {menu ? (<FoodCard foodItems={menu} accordionOpen={accordionOpen} onAccordionToggle={handleAccordionToggle} />) : (<ShimmerMenu />)}
    </>
  );
}

export default FoodMapper;
