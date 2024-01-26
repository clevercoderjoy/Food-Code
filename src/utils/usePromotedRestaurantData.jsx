const usePromotedRestaurantData = (restaurantData) => {
  const uniqueRandomNumbers = new Set();
  const uniqueCount = 6;
  const maxLimit = 15;
  const minLimit = 0;
  const getRandomNumbers = () => {
    while (uniqueRandomNumbers.size < uniqueCount)
    {
      const randomNumber = Math.floor((Math.random() * maxLimit - minLimit + 1));
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