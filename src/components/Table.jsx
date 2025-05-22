import React from "react";

const Table = (props) => {
  const { productData } = props;
  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-head">
          <tr className="column-row">
            <th className="column-data">Title</th>
            <th className="column-data">Category</th>
            <th className="column-data">Price</th>
            <th className="column-data">Rating</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {productData?.map((item) => {
            const { title, price, category, rating, id } = item;
            return (
              <tr className="row" key={id}>
                <td className="row-data">{title}</td>
                <td className="row-data">{category}</td>
                <td className="row-data">{price}</td>
                <td className="row-data">{rating.rate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
