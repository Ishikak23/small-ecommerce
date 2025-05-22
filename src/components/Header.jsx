import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/wishlist");
  };
  return (
    <div className="header-container">
      <h1 className="header">E - commerce</h1>
      <div>
        <button className="wishlist-button" onClick={handleClick}>
          ❤️ WishList
        </button>
      </div>
    </div>
  );
};

export default Header;
