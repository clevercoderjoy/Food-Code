import { useEffect, useState } from 'react';
import FilterButtons from '../../components/filterButtons/FilterButtons';
import RestaurantMapper from '../../components/restaurantMapper/RestaurantMapper';
import SearchBar from '../../components/searchBar/SearchBar';
import { res_url } from "../../utils/constants";

const Home = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState();
  const [resData, setResData] = useState();

  const fetchResData = async () => {
    try
    {
      const response = await fetch(res_url);
      const data = await response.json();
      const apiResData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setResData(apiResData);
      setFilteredRestaurants(apiResData);
      console.log(apiResData)
    }
    catch (error)
    {
      console.log("Error: ", error);
    }
  };

  useEffect(() => { fetchResData() }, [])

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
      <SearchBar onSearch={handleSearchedRestaurants} />
      <FilterButtons filterByStars={filterRestaurantsByRating} />
      <RestaurantMapper restaurants={filteredRestaurants} />
    </>
  )
}

export default Home;