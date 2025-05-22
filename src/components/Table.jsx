import React from "react";
import { useWishListContext } from "../utils/wishListContext";

const Table = (props) => {
  const { productData, handleWishList } = props;
  const { wishListData } = useWishListContext();
  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-head">
          <tr className="column-row">
            <th className="column-data">Title</th>
            <th className="column-data">Category</th>
            <th className="column-data">Price</th>
            <th className="column-data">Rating</th>
            <th className="column-data">Action</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {productData?.map((item) => {
            const { title, price, category, rating, id } = item;
            const isWishListed =
              wishListData.findIndex((item) => item.id == id) != -1;
            console.log("isWishListed", isWishListed);
            return (
              <tr className="row" key={id}>
                <td className="row-data">{title}</td>
                <td className="row-data">{category}</td>
                <td className="row-data">{price}</td>
                <td className="row-data">{rating.rate}</td>
                <td
                  style={{ cursor: isWishListed ? "default" : "pointer" }}
                  onClick={() => {
                    if (!isWishListed) {
                      handleWishList(id);
                    }
                  }}
                  className={[
                    `row-data ${isWishListed && "row-data--wishListed"}`,
                  ]
                    .filter(Boolean)
                    .join("")}
                >
                  {isWishListed ? "❤️" : "🤍"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
