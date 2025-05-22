import React, { useEffect, useState } from "react";

const LeftSection = (props) => {
  const { handleCategory, category } = props;
  const [categoryData, setCategoryData] = useState();

  const getCategoryData = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    setCategoryData(data);
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  const handleClick = (item) => {
    handleCategory(item);
  };

  return (
    <div className="left-section">
      <ul className="nav-bar">
        {categoryData?.map((item, index) => {
          return (
            <li
              key={index}
              className={[`nav-item ${item == category && "nav-item-active"}`]
                .filter(Boolean)
                .join()}
              onClick={() => handleClick(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSection;
