import React from "react";
import Search from "./Search";

const Header = ({ setSearchText }) => {
  return (
    <div className="Header">
      <h1 className="Header-title">My Todolist!</h1>
      <Search setSearchText={setSearchText} />
    </div>
  );
};

export default Header;
