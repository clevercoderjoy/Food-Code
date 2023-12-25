import { useEffect, useState } from 'react';
import { res_url } from "../../utils/constants";
import FilterButtons from '../filterButtons/FilterButtons';
import Restaurant from '../restaurant/Restaurant';
import SearchBar from '../searchBar/SearchBar';

const Main = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState();
  const [resData, setResData] = useState();

  const fetchResData = async () => {
    try
    {
      const response = await fetch(res_url);
      const data = await response.json()
      const apiResData = data?.data?.cards[2]?.card.card?.gridElements?.infoWithStyle?.restaurants;
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
      <Restaurant restaurants={filteredRestaurants} />

    </>
  )
}

export default Main;