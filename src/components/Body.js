import ResCard from "./RestaurantCard";
import React from "react";
import ReactDOM from "react-dom/client";
import grdlist from "../utils/mockdata";
import Shimmer from "./Shimmer";
import restaurants from "../utils/swiggymockdata";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Body= () =>{
    const [searchtext,setSearchtext]=useState("");   
    const [ stateData, setStateData]= useState([]);
    const [updatedlist, setUpdatedlist]= useState([]);

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

      return  updatedlist.length== 0 ? (<Shimmer/>) : (
  <div className="body">
            <div className="search">
                <div className="search-value">
               <input type="textbox" aria-label="search" value={searchtext} onChange={(e)=>{
                setSearchtext(e.target.value);console.log(searchtext);
                }}></input>
               <button onClick={()=>{
                const matchlist=stateData.filter(res=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                setUpdatedlist(matchlist)}}>Search</button>
               </div>
            <div className="filter">
            { <button className="filter-btn" onClick={()=>
                {
                    const updatedList= stateData.filter(res=>res.info.avgRating>4);
                    setUpdatedlist(updatedList);
                }
                }
                >Top Rated Restaurants</button> }
               
            </div>
            </div>
       <div className="res-container">
        
           {updatedlist.map((restaurant) => (
            <Link class="Link" to={"/restaurants/"+restaurant.info.id}><ResCard key={restaurant.info.id} resData={restaurant} /></Link>
            ))}
           
        </div>
        </div>
    );
};
export default Body;