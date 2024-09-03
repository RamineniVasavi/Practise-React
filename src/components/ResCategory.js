import { useState } from "react"
import ListItem from "./Itemlist"
const ResCategory =({ data ,showitems,accordionstate})=>{
   // console.log(data);
   // lifting state up 
    const [toggle, setToggle]=useState(showitems);
   const onHandle=()=>{
    // if(showitems){
    //   setToggle(!toggle);
    //   console.log(toggle);
    // }
    // else{
    accordionstate();
   // }
    // if(toggle){
    //   setToggle(false);
    //   accordionstate();
    // }
    // else{
    // accordionstate();// calls the call back function
    // }
   }
    return <div>
          <div className=" w-6/12 p-4 bg-gray-100 text-center shadow-lg justify-between mx-auto my-4">
           <div className="flex justify-between" onClick={onHandle}>
            <span className="text-center font-bold">{data?.title} ({data.itemCards?.length})</span>
          <svg className="w-2.5 h-2.5 ms-3 mt-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path  className="stroke-current  stroke-2 round"  d="m1 1 4 4 4-4"/>
</svg>
</div>
  { showitems && <ListItem items={data.itemCards}/> }
          </div>
    </div>
}
export default ResCategory;