import React, { useState } from "react";
import { Restaurants } from "./Restaurants";
import Shimmer from "./Shimmer";
import useRestaurant from "../commonUtils/useRestaurant";

export const Body = () => {
  let [searchText, setSearchText] = useState("");

  const [resData, filteredRes] = useRestaurant();

  if (resData.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <h2 style={{ margin: "10px" }}>Restaurants with online food delivery</h2>
      <div className="body-container">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              id="search-input"
              className="search-input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="search-btn style-btn"
              onClick={() => {
                const filteredRestaurants = resData.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                filteredRestaurants.length !== 0
                  ? setFilteredRes(filteredRestaurants)
                  : "";
                console.log(resData);
              }}
            >
              Search
            </button>
          </div>
          <div className="top-rated-restaurants">
            <button
              id="top-rated-btn"
              onClick={() => {
                const topRatedRestaurants = resData.filter(
                  (restaurant) => restaurant.info.avgRating > 4
                );
                setFilteredRes(topRatedRestaurants);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>

        <Restaurants resData={filteredRes} />
      </div>
    </>
  );
};
