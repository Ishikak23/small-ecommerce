import React from "react";
import { useWishListContext } from "../utils/wishListContext";

const Wishlist = () => {
  const { wishListData } = useWishListContext();
  console.log("wishListData", wishListData);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <h1 style={{ textAlign: "center" }}>WishList</h1>
      <ul className="wishlist">
        {wishListData?.map((item) => {
          return <li key={item.id}>{`${item.title} - ${item.price}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default Wishlist;
