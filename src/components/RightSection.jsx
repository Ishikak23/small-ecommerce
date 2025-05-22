import React, { use, useEffect, useState } from "react";
import Table from "./Table";

const RightSection = (props) => {
  const { category, handleCategory } = props;
  const [productData, setProductData] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getProductData = async () => {
    let data;
    console.log(
      "category",
      category != null || category != undefined || category != ""
    );
    if (category != null || category != undefined) {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      data = await res.json();
    } else {
      const res = await fetch("https://fakestoreapi.com/products");
      data = await res.json();
    }
    setProductData(data);
  };

  useEffect(() => {
    getProductData();
  }, [category]);

  useEffect(() => {
    const data = productData?.filter((item) =>
      item.title.includes(searchValue)
    );
    setFilteredData(data);
  }, [searchValue]);

  useEffect(() => {
    getProductData();
  }, []);

  const categoryData = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const tableData = searchValue ? filteredData : productData;

  return (
    <div className="right-section">
      <div className="right-header">
        <h2>{`Product Details ${category ? category : ""}`}</h2>
        <div className="table-utils">
          <div className="filter-container">
            <select
              className="select"
              onChange={(event) => {
                handleCategory(event.target.value);
              }}
              value={category ? category : ""}
            >
              <option value="" disabled>
                Select an option
              </option>
              {categoryData?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="search-container">
            <input
              className="input"
              value={searchValue}
              onChange={handleSearchValue}
              placeholder="Search by Title"
            />
          </div>

          <button
            className="clear-button"
            onClick={() => {
              setSearchValue("");
              handleCategory(null);
            }}
          >
            Clear Selection
          </button>
        </div>
      </div>

      <Table productData={tableData} />
    </div>
  );
};

export default RightSection;
