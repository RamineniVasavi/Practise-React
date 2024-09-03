import React, { lazy, Suspense,useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Errors from "./components/Errors";
import { createBrowserRouter ,RouterProvider, Outlet} from "react-router-dom";
import ResMenu from "./components/ResMenu";
const Contactus =lazy(()=>import("./components/Contactus"));
import Usecontext from "./utils/Usecontext";
import { Provider } from 'react-redux';
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// //using React
// // const heading= React.createElement("h1",{id:"heading",xyz:"abc"},"Hello from React");
// //using JSX
// const element="Hello by react element";
// const Heading= () => <h1 >Hello from jsx React component 1 </h1>;
// //component composition
// const Headin1 = () => (
//     <div>
//         <h2>{element}</h2>
//         {Heading()}
//         <Heading></Heading>
// <Heading/>
// <h1 id="heading">
//     Hello from jsx react component 2</h1>
//     </div>
// );


const Applayout= () => {
    const [name,setName]=useState('');

useEffect(()=>{
    const username={
        name:'VASAVI',
       }
       setName(username.name);
},[])
    return (

        <Provider store={appStore}>
         {/* To change context value */}
        <Usecontext.Provider value={{loggesuser :name,setName}}>
        <div className="app">
         <Header/>
        <Outlet />
        </div>
        </Usecontext.Provider>
        </Provider>
    );
};

const appRouter= createBrowserRouter([{
    path:"/",
    element:<Applayout />,
    children:[
        {
        path:"/",
        element:<Body />
        },
        {
            path:"/about",
            element:<About />
        },
        {
            path:"/contact",
            element:(<Suspense fallback={<h1>Loading....</h1>}>
                <Contactus/>
                </Suspense>)
        },
        {
            path:"/restaurants/:resId",
            element:<ResMenu />,
        },
        {
            path:"/cart",
            element:<Cart/>
        }
    ],
    errorElement:<Errors />,
},
// {
//     path:"/about",
//     element:<About />
// },
// {
//     path:"/contact",
//     element:<Contactus />
// },
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter} />);
//  root.render(heading);