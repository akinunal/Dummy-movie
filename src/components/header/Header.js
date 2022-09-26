import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ menu }) => {
  return (
    <nav className="navigation">
      {menu.map((link) => (
        <Link to={link.path}>{link.name}</Link>
      ))}
    </nav>
  );
};

export default Header;
