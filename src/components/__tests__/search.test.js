import {  fireEvent, render,screen } from '@testing-library/react';
import { act } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import appstore from '../../utils/appStore';
import Body from '../Body';
import ReactDom from 'react-dom';
import {findBy} from 'react-dom/test-utils';
// const { Simulate } = require("react-dom/test-utils");
import mockswiggy from '../mockdata/mockswiggy.json';

global.fetch=jest.fn(()=>{
  return Promise.resolve({
    json:()=>Promise.resolve(mockswiggy)
    
  })
});

it("Search testing ", async()=>{
 await act(async()=>
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    )
 )
   const searchbtn=screen.getByRole("button",{ name: "Search"});
  const searchinput=screen.getByTestId("searchinput");
  fireEvent.change(searchinput,{target:{value:"burger"}});
  fireEvent.click(searchbtn);
  const cards=screen.getAllByTestId("rescard");
  expect(cards.length).toBe(8);

});
