import { useState } from "react";
import { CONS_URL } from "../utils/constants"
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
                <li >Home</li>
                <li >About us</li>
                <li >Contact us</li>
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