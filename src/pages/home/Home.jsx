import { useEffect, useState } from 'react';
import DataConnectivityStatus from '../../components/dataConnectivityStatus/DataConnectivityStatus';
import FilterButtons from '../../components/filterButtons/FilterButtons';
import SearchBar from '../../components/searchBar/SearchBar';
import RestaurantMapper from '../../services/restaurantMapper/RestaurantMapper';
import useRestaurantData from '../../utils/useRestaurantData';

const Home = () => {

  const resData = useRestaurantData();
  const [filteredRestaurants, setFilteredRestaurants] = useState(useRestaurantData());

  useEffect(() => {
    setFilteredRestaurants(resData);
  }, [resData]);

  const filterRestaurantsByRating = (filterByStarNumber) => {
    switch (filterByStarNumber)
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
    const filteredItems = resData?.filter((res) => res?.info?.avgRating >= star && res?.info?.avgRating < star + 1);
    star === 0 ? setFilteredRestaurants(resData) : setFilteredRestaurants(filteredItems);
  }

  const handleSearchedRestaurants = (searchText) => {
    if (searchText.trim() === '')
    {
      setFilteredRestaurants(resData);
    } else
    {
      const filteredItems = resData.filter((res) =>
        res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
      );
      setFilteredRestaurants(filteredItems);
    }
  }

  return (
    <>
      <DataConnectivityStatus />
      <SearchBar onSearch={handleSearchedRestaurants} />
      <FilterButtons filterByStars={filterRestaurantsByRating} />
      <RestaurantMapper restaurants={filteredRestaurants} />
    </>
  )
}

export default Home;