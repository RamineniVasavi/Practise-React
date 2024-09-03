import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";
const ResMenu=() =>{
 const {resId}=useParams();
   const [singledata, setSingledata]=useState([]);
   const [category,setCategory] = useState([]);
   const [accindex, setAccindex]=useState(null);
   const [expandedstate, setexpandedstate]=useState(false);
   useEffect(()=>{
    Fetchdata()
    },[]);
   
   const Fetchdata =async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=748065&catalog_qa=undefined&submitAction=ENTER");
    const json=await data.json();
    setSingledata(json);
    console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
   const categories= json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   console.log(categories);
   setCategory(categories);
}

    return (
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">Burger King</h1>
          {category.map((c ,index)=>(
            <ResCategory key={c?.card?.card.title} data={c?.card?.card} 
            showitems={accindex==index?true:false} // true will show expanded accordion
            accordionstate={()=>{
              setAccindex(index);
              // if(index==accindex && expandedstate){
              //   setexpandedstate(false);
              // }
              // else if(index==accindex && !expandedstate){
              //   setexpandedstate(true);
              // }
              // else{
              //   setexpandedstate(false);
              // }
             // {index==accindex?setexpandedstate(false):setexpandedstate(true)}
            }} // call back function get called from rescategory component and set index accordion to open
            />
          ))}
           
        </div>
    )
}
export default ResMenu;