import { FOOD_LOGO } from '../utils/constants';
import { CONS_URL } from '../utils/constants'
const stylecard={
    backgroundColor:"#f0f0f0"
}
const RestaurantCard= (props) =>{
    const { resData }=props;
     return (
         <div data-testid="rescard" className="m-4 p-4 w-[200px] rounded-lg hover:border border-black" style={stylecard}>
         <img className="rounded-lg" alt="biryani" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ props.resData.info.cloudinaryImageId}/>
         {/* <img className="food-logo" alt="biryani" src={FOOD_LOGO}/>
         <h3>{resData.name}</h3>
         <h4>{resData.cuisines.join(" ,")}</h4>
         <h4>{resData.avgRating} star</h4>
         <h4>{resData.costForTwo}</h4> */}
         <h3 className='font-bold py-2 text-lg'>{resData.info.name}</h3>
         <h4>{resData.info.cuisines.join(" , ")}</h4>
         <h4>{resData.info.avgRating} star</h4>
         <h4>{resData.info.costForTwo}</h4>
         </div>
     )
 }
// higher order functions- take component and return component
 export const Promotedcard= (resstaurantcard)=>{
    return (props)=>{
        return (
            <div>
                <label className='absolute bg-black text-white m-2 px-2 py-2 rounded-lg'>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
 }
 export default RestaurantCard;