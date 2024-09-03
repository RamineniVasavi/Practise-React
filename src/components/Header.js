import { useState,useContext } from "react";
import { CONS_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import context from "../utils/Usecontext";
import { useSelector } from 'react-redux';
const Header = () => {
    const [loginbutton, setLoginbutton]=useState("Login");
   const onlinestatus=useOnlinestatus();
   const name=useContext(context);
//subscribing to the store using selector
   const cartitems= useSelector((store)=>store.cart.items);
    return (
        <div className="flex justify-between">
            <div className="logo-container">
            <img className="w-36 pl-4 mt-4" src={CONS_URL} />
            </div>
            <div className="flex items-center">
             <ul className="flex p-4 m-4 space-x-6">
                <li>Online status:{onlinestatus?" Active":" offline"}</li>
                <li ><Link to="/">Home</Link></li>
                <li ><Link to="/about">About us</Link></li>
                <li ><Link to="/contact">Contact us</Link></li>
                <li><Link to="/cart">Cart {cartitems.length}</Link></li>
                <li> {name.loggesuser}</li>
                <button className="login" onClick={()=>{
                    loginbutton=="Login" ? setLoginbutton("Logout"): setLoginbutton("Login");
                }}>{loginbutton}</button>
             </ul>
             </div>
        </div>
    )
}
export default Header;