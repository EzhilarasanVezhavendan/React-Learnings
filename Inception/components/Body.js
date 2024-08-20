import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/constant";
const Body = () => {
    return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
      {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
        
      </div>
    </div>
    );
  }
  export default Body;