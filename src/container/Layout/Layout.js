import React from "react";
import "../../App.css";
import Header from "../../components/header/Header";

const Layout = ({ children }) => {
  const menu = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/movies",
      name: "Movies",
    },
    {
      path: "products",
      name: "Products",
    },
  ];
  return (
    <div className="App">
      <Header menu={menu} />
      {children}
    </div>
  );
};

export default Layout;
