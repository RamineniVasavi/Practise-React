import { render,screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import Mockdata from '../mockdata/rescardmock.json'
import '@testing-library/jest-dom';
it("restaurant card mock",()=>{
 render(<RestaurantCard resData={Mockdata}/>);
 const name=screen.getByText("Veg Junction");
expect(name).toBeInTheDocument();
});