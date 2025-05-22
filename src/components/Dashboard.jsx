import React, { useState } from "react";
import Header from "./Header";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  return (
    <div className="dashboard">
      <Header />
      <div className="body">
        <LeftSection
          handleCategory={setSelectedCategory}
          category={selectedCategory}
        />
        <RightSection
          category={selectedCategory}
          handleCategory={setSelectedCategory}
        />
      </div>
    </div>
  );
};
export default Dashboard;
