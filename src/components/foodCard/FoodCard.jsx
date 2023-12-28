import { useParams } from 'react-router-dom';
import "./foodCard.css";

const FoodCard = ({ menu }) => {
  const { resId } = useParams();
  // console.log(resId);
  // console.log(menu?.data?.cards[0]?.card?.card?.info?.id);
  return (
    <>
      <h1>food card component</h1>
      <h2>restaurant name</h2>
      <div>res image</div>
      <div>res description</div>
      <div>
        <span>food item</span>
        <span>
          <span>food img</span>
          <span>- food item count +</span>
        </span>
        <br />
        {menu?.data?.cards[0]?.card?.card?.info?.id}
      </div>
    </>
  )
}

export default FoodCard;