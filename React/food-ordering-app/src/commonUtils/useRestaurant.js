import { useState, useEffect } from "react";
import { RESTAURANT_DATA } from "./constants";

const useRestaurant = () => {
  let [resData, setResData] = useState([]);
  let [filteredRes, setFilteredRes] = useState([]);

  const fetchApiData = async () => {
    const data = await fetch(RESTAURANT_DATA);

    let jsonData = await data.json();
    setResData(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    setFilteredRes(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return [resData, filteredRes];
};

export default useRestaurant;
