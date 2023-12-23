import { useEffect, useState } from 'react';
import { res_url } from "../../utils/constants";
import FilterButtons from '../filterButtons/FilterButtons';
import Restaurant from '../restaurant/Restaurant';
import SearchBar from '../searchBar/SearchBar';

const Main = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState();
  const [resData, setResData] = useState();


  function findRestaurants(obj, count = { occurrences: 0 }) {
    // Check if the input is an object
    if (typeof obj !== 'object' || obj === null)
    {
      return null; // Return null if the input is not an object
    }
    // Iterate through the object's keys
    for (const key in obj)
    {
      if (key === 'restaurants')
      {
        count.occurrences++; // Increment the count if the key is 'restaurants'

        if (count.occurrences === 2)
        {
          return obj[key]; // Return the value of 'restaurants' if it's the second occurrence
        }
      }
      // Recursively search nested objects
      if (typeof obj[key] === 'object' && obj[key] !== null)
      {
        const result = findRestaurants(obj[key], count);
        if (result !== null)
        {
          return result; // Return the value if found in nested objects
        }
      }
    }
    return null; // Return null if the key 'restaurants' is not found for the second time
  }

  const fetchResData = async () => {
    try
    {
      const response = await fetch(res_url);
      const data = await response.json()
      const restaurants = await findRestaurants(data.data);
      console.log("restaurants", restaurants)
      const apiResData = restaurants;
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