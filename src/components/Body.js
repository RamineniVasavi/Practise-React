import ResCard,{ Promotedcard } from "./RestaurantCard";
import React from "react";
import ReactDOM from "react-dom/client";
import grdlist from "../utils/mockdata";
import Shimmer from "./Shimmer";
import restaurants from "../utils/swiggymockdata";
import { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus"; 
import Usecontext from "../utils/Usecontext";
const Body= () =>{
    const [searchtext,setSearchtext]=useState("");   
    const [stateData, setStateData]= useState([]);
    const [updatedlist, setUpdatedlist]= useState([]);
    const { loggesuser, setName }=useContext(Usecontext);
   // Promotecard component  has new promoted label component inside it 
    const Promotecard=Promotedcard(ResCard);
    useEffect(()=>{
      fetchData();
    },[]);
    const fetchData= async () =>{
     const data= await fetch(
 "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setStateData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setUpdatedlist(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
const onlinestatus=useOnlinestatus();
if(onlinestatus===false){
    return <h1>you are offline. please check your internet connectivity. </h1>;
}
      return  updatedlist?.length== 0 ? (<Shimmer/>) : (
  <div className="body">
            <div className="flex">
                <div className="m-4 p-4 py-0.5">
               <input className="border border-solid border-black" type="textbox" aria-label="search" value={searchtext} onChange={(e)=>{
                setSearchtext(e.target.value);console.log(searchtext);
                }}></input>
               <button className="border rounded-lg bg-gray-100 border-black border-solid ml-4 px-3 py-0.5 " onClick={()=>{
                const matchlist=stateData.filter(res=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                setUpdatedlist(matchlist)}}>Search</button>
               </div>
            <div>
            { <button className="p-4 py-0.5 m-4 rounded-lg bg-gray-100 border border-solid border-black" onClick={()=>
                {
                    const updatedList= stateData.filter(res=>res.info.avgRating>4);
                    setUpdatedlist(updatedList);
                }
                }
                >Top Rated Restaurants  </button> }
               User Name : 
            </div>
            {/* on change the context value will also change */}
             <input className="border border-solid border-black mt-5 h-6" type="textbox" aria-label="search"
                 value={loggesuser} data-testid="searchinput"
                 onChange={(e)=>{
                setName(e.target.value);
                }}></input>
            </div>
       <div className="flex flex-wrap">
        
           {updatedlist?.map((restaurant) => (
            <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
               {restaurant.info.avgRating>4.2?
                (<Promotecard resData={restaurant} />):
                (<ResCard key={restaurant.info.id} resData={restaurant} />
                )}
                
            </Link>
            ))}
           
        </div>
        </div>
    );
};
export default Body;