import { useState } from 'react';
import { resObj } from '../../utils/resData';
import FilterButtons from '../filterButtons/FilterButtons';
import Restaurant from '../restaurant/Restaurant';
import SearchBar from '../searchBar/SearchBar';

const Main = () => {

  const [filteredRestaurants, setFilteredRestaurants] = useState(resObj);

  const filterRestaurantsByRating = (filterByStars) => {
    switch (filterByStars)
    {
      case 5:
        filterRestaurants(5);
        break;
      case 4:
        filterRestaurants(4);
        break;
      case 3:
        filterRestaurants(3);
        break;
      case 0:
        filterRestaurants(0);
        break;
    }
  }

  const filterRestaurants = (star) => {
    const filteredItems = resObj.filter((res) => res.info.avgRating >= star && res.info.avgRating <= star + 1);
    star === 0 ? setFilteredRestaurants(resObj) : setFilteredRestaurants(filteredItems);
  }
  
  return (
    <>
      <SearchBar />
      <FilterButtons filterByStars={filterRestaurantsByRating} />
      <Restaurant restaurants={filteredRestaurants} />
      
    </>
  )
}

export default Main;