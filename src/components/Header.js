import { useState } from "react";
import { CONS_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
    const [loginbutton, setLoginbutton]=useState("Login");
   console.log("toggle");
    return (
        <div className="nav">
            <div className="logo-container">
            <img className="logo" src={CONS_URL} />
            </div>
            <div className="list-nav">
             <ul>
                <li ><Link to="/">Home</Link></li>
                <li ><Link to="/about">About us</Link></li>
                <li ><Link to="/contact">Contact us</Link></li>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                    loginbutton=="Login" ? setLoginbutton("Logout"): setLoginbutton("Login");
                }}>{loginbutton}</button>
             </ul>
             </div>
        </div>
    )
}
export default Header;