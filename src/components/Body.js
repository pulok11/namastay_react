import RestaurantCard from "./RestaurantCard";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import { API_URL } from "../../utils/constants";
import { useEffect, useState } from "react";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filterList, setFilterList] = useState("");
  const [searchTest, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  //let restList = dataList
  const fetchData = async () => {

    try{
        const data = await fetch(API_URL);
        const json = await data.json();
        // console.log(json);
        // setRestList(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestList(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilterList(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    }
    catch(error){
        console.log("Some thing going wrong")
    }
   
  };

  // console.log(restList);

  return restList.length === 0 ? (
    <RestaurantCardShimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-area">
          <input
            type="text"
            placeholder="Search"
            value={searchTest}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterValue = restList.filter((res) =>
                res.info.name.toLowerCase().includes(searchTest.toLowerCase())
              );
              setFilterList(filterValue);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filterList = restList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setRestList(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterList.map((Resturant) => (
          <RestaurantCard key={Resturant.info.id} restData={Resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
