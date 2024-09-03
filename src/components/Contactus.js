import { useEffect } from 'react';
import useCustomehook from '../utils/useCustomehook';
import Userclass from './Userclass';
const Contactus = () => {
          //using custom hook to make component as single responsible
          const data=useCustomehook();
          console.log(data);
   const {name,location,avatar_url}=data;
  return (
    <div>
      <h1>Contact us page</h1>
      <Userclass name={name} location={location} avatar_url={avatar_url}/>
    </div>
  )
}

export default Contactus;
