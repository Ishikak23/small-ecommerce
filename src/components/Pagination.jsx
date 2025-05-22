import React, { useState } from "react";

const Pagination = (props) => {
  const { totalData, dataPerPage, handlePagination } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(totalData / dataPerPage);
  const pageArray = Array.from({ length: totalPage }, (_, index) => index + 1);
  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        {pageArray.map((item) => (
          <li
            key={item}
            className={[
              `pagination-item ${
                item == currentPage && "pagination-item--active"
              }`,
            ]
              .filter(Boolean)
              .join("")}
            onClick={() => {
              setCurrentPage(item);
              handlePagination(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
