import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../index.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Suggestion from "./components/Suggestion/Suggestion";
//import About from "./components/About/About";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
const About = lazy(() => import("./components/About/About"));

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      ,
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/suggestion",
        element: <Suggestion />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // Render method is used to convert the ReactElemnt HTML structure for DOM
