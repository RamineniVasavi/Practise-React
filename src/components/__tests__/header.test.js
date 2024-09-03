import { fireEvent, render,screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../Header';
import appstore from '../../utils/appStore';

afterAll(()=>{
    console.log("After all");
})
afterEach(()=>{
    console.log("After each");
})
beforeAll(()=>{
    console.log("before All");
})
beforeEach(()=>{
    console.log("before each");
})

it("header has a login button",()=>{
   render(
    // to access link
     <BrowserRouter> 
     {/* to access redux store */}
    <Provider store={appstore}>
        <Header/>
    </Provider>
    </BrowserRouter>
   )

   const login=screen.getByRole('button',{name:'Login'});
   expect(login).toBeInTheDocument()
});
it("Header consists of cart text",()=>{
    render(
        // to access link
         <BrowserRouter> 
         {/* to access redux store */}
        <Provider store={appstore}>
            <Header/>
        </Provider>
        </BrowserRouter>
       )
    
       const login=screen.getByText(/Cart/);
       expect(login).toBeInTheDocument()
});

it("click on login button should change to logout",()=>{
 render(
     // to access link
     <BrowserRouter> 
     {/* to access redux store */}
    <Provider store={appstore}>
        <Header/>
    </Provider>
    </BrowserRouter>
 );
 const Loginbutton=screen.getByRole("button",{ name : "Login"});
 fireEvent.click(Loginbutton);
 const logoutbutton = screen.getByRole("button",{ name : "Logout"});
 expect(logoutbutton).toBeInTheDocument();
});