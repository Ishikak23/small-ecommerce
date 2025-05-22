import { createContext, useContext, useState } from "react";

const WishListContext = createContext({});

export const WishListContextProvider = ({ children }) => {
  const [wishListData, setWishListData] = useState([]);

  return (
    <WishListContext.Provider value={{ wishListData, setWishListData }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishListContext = () => {
  return useContext(WishListContext);
};
