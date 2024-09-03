import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
 const ListItem =({items}) =>{
    console.log(items);
const dispatch =useDispatch();
const Addtocart= (i) =>{
  // dispatch an action 
dispatch(addItem(i));
};
return <div>
    {items.map((item)=>(
        <div data-testid="fooditem" className=" flex border-b-2 py-2 border-gray-400"  key={item.card.info.id} >
          <div className="w-8/12">
            <div className="text-left">{item.card.info.category}</div>
            <div className="text-left">₹{item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100}</div>
            <div className="text-left text-xs">{item.card.info.description}</div>
          
          </div>
          <div className="w-4/12 p-1">
          <div className="absolute">
        <button onClick={()=>{Addtocart(item)}} className="border bg-black text-white mx-16 border-black px-2 py-1">Add +</button>
        </div>
          <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ item.card.info.imageId}/>
       </div></div>
    ))}
</div>
 }
 export default ListItem;