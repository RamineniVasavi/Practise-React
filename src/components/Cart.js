import { useDispatch, useSelector } from "react-redux";
import ListItem from "./Itemlist";
import { clearItem } from "../utils/cartSlice";
const Cart = () =>{
   const dispatch=useDispatch();
   const Clearcart=()=>{
    dispatch(clearItem());
   }
    const cartitems=useSelector((store)=>store.cart.items);
 return <div className="text-center my-10 px-10"> 
 <div className="flex text-center">
    <h1 className="text-2xl font-bold pr-5 pl-[500px] pb-5">Cart</h1>
    <button onClick={Clearcart} className=" px-2 py-1 h-10 bg-black text-white border border-black  rounded-lg "> clear cart</button>
    </div>
    <div className="w-6/12 m-auto">
    <ListItem items={cartitems}/>
    </div>
    </div>
}

export default Cart;