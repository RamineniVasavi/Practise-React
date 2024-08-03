import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Errors from "./components/Errors";
import { createBrowserRouter ,RouterProvider, Outlet} from "react-router-dom";
import ResMenu from "./components/ResMenu";
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
    return (
        <div className="app">
         <Header/>
        <Outlet />
        </div>
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
            element:<Contactus/>
        },
        {
            path:"/restaurants/:resId",
            element:<ResMenu />,
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