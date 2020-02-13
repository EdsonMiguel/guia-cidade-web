import React from "react";
import "./header.css";

const Header = props => {
  const { title } = props;
  return (
    <header className="header">
      <h1>{title}</h1>
      <button></button>
    </header>
  );
};

export default Header;
