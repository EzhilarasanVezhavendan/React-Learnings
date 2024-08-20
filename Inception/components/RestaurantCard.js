const RestaurantCard = ({
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="res-card">
        <img className="res-logo" src="https://www.anifabiriyani.com/meta/biriyani-spl.webp" alt="Img 404" />
        <h2>{name}</h2>
        <h5>{cuisines.join(", ")}</h5>
        <h6>{area}</h6>
        <span>
          <h4
            style={
              avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
            }
          >
            <i className="fa-solid fa-star"></i>
            {avgRating}
          </h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
  
      </div>
    );
  }
  export default RestaurantCard;