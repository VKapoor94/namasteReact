import { CDNURL } from "../utils/constant";
export default RestaurantCard=(props)=>{
    const {arr} =props;
    const {resname,cuisine,star,time} =arr;
    return(
      <div className="res-card">
        <img className="res-logo" alt="res-logo" src={CDNURL}></img>
        <h3>{resname}</h3>
        <h4>{cuisine}</h4>
        <h4>{star}</h4>
        <h4>{time}</h4>
  
      </div>
    )
  }