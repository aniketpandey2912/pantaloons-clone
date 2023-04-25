import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Kids from "../Pages/Kids";
import HomeDecor from "../Pages/HomeDecor";
import Brands from "../Pages/Brands";
import Cart from "../Pages/Cart";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Accessories from "../Pages/Accessories";
import WishList from "../Pages/WishList";
import UserAccount from "../Pages/UserAccount";

type routesProps = {
  path: string;
  element: any;
};

const routes: routesProps[] = [
  { path: "/", element: <Home /> },
  { path: "/women", element: <Women /> },
  { path: "/men", element: <Men /> },
  { path: "/kids", element: <Kids /> },
  { path: "/homedecor", element: <HomeDecor /> },
  { path: "/accessories", element: <Accessories /> },
  { path: "/brands", element: <Brands /> },
  { path: "/cart", element: <Cart /> },
  { path: "/wishlist", element: <WishList /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/useraccount", element: <UserAccount /> },
];

const AllRoutes = () => {
  return (
    <Routes>
      {routes?.map((el) => (
        <Route key={el.path} path={el.path} element={el.element} />
      ))}
    </Routes>
  );
};

export default AllRoutes;
