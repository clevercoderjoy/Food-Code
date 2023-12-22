import axios from "axios";
import { useEffect, useState } from 'react';
import { res_url } from '../../utils/constants';
import FilterButtons from '../filterButtons/FilterButtons';
import Restaurant from '../restaurant/Restaurant';
import SearchBar from '../searchBar/SearchBar';

const Main = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState();
  const [resData, setResData] = useState();


  const fetchResData = async () => {
    try
    {
      const data = axios.get(res_url);
      const apiResData = (await data)?.data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      console.log(apiResData)
      setResData(apiResData);
      setFilteredRestaurants(apiResData);
    }
    catch (error)
    {
      console.log("Error: ", error);
    }
  };

  useEffect(() => { fetchResData() }, [])

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
    const filteredItems = resData?.filter((res) => res?.info?.avgRating >= star && res?.info?.avgRating < star + 1);
    star === 0 ? setFilteredRestaurants(resData) : setFilteredRestaurants(filteredItems);
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