import React from "react";
import "./index.css";
import Dashboard from "./components/Dashboard";
import Wishlist from "./components/Wishlist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WishListContextProvider } from "./utils/wishListContext";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/wishList",
      element: <Wishlist />,
    },
  ]);

  return (
    <WishListContextProvider>
      <RouterProvider router={appRouter} />
    </WishListContextProvider>
  );
};

export default App;
