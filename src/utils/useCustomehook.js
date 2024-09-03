import { useEffect, useState } from "react";

const useCustomehook= ()=>{
    const [myinfo,setMyinfo]=useState('');
useEffect(()=>{
    fetchData();
},[]);
const fetchData =async ()=>{
    const data= await fetch("https://api.github.com/users/RamineniVasavi");
    const json=await data.json();
 setMyinfo(json);
 console.log(json.name);
};
return myinfo;
};
export default useCustomehook;