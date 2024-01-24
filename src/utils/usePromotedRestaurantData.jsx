const usePromotedRestaurantData = (restaurantData) => {
  const uniqueRandomNumbers = new Set();

  const getRandomNumbers = () => {
    while (uniqueRandomNumbers.size < 6)
    {
      const randomNumber = Math.floor((Math.random() * 6 - 0 + 1));
      uniqueRandomNumbers.add(randomNumber);
    }
    return Array.from(uniqueRandomNumbers);
  }
  const randomRestaurantIndex = getRandomNumbers();

  const updatedRestaurantData = restaurantData?.map((restaurant, index) => {
    const isPromoted = randomRestaurantIndex.includes(index);
    return {
      ...restaurant,
      info: {
        ...restaurant.info,
        promoted: isPromoted
      }
    }
  })
  return updatedRestaurantData;
}

export default usePromotedRestaurantData;