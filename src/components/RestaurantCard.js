import { FOOD_LOGO } from '../utils/constants';
import { CONS_URL } from '../utils/constants'
const stylecard={
    backgroundColor:"#f0f0f0"
}
const RestaurantCard= (props) =>{
    const { resData }=props;
     return (
         <div className="res-card" style={stylecard}>
         <img className="food-logo" alt="biryani" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ props.resData.info.cloudinaryImageId}/>
         {/* <img className="food-logo" alt="biryani" src={FOOD_LOGO}/>
         <h3>{resData.name}</h3>
         <h4>{resData.cuisines.join(" ,")}</h4>
         <h4>{resData.avgRating} star</h4>
         <h4>{resData.costForTwo}</h4> */}
         <h3>{resData.info.name}</h3>
         <h4>{resData.info.cuisines.join(" , ")}</h4>
         <h4>{resData.info.avgRating} star</h4>
         <h4>{resData.info.costForTwo}</h4>
         </div>
     )
 }
 export default RestaurantCard;