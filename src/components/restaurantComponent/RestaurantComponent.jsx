import { resObj } from '../../data/resData';
import RestaurantCardComponent from '../restaurantCardComponent/RestaurantCardComponent';
import "./restaurantComponent.css";


const RestaurantComponent = () => {

  return (
    <>
      <div className="restaurantCards">
        {
          resObj.map((restaurant) => <RestaurantCardComponent key={restaurant.info.id} resData={restaurant} />)
        }
      </div>
    </>
  );
}

export default RestaurantComponent;
