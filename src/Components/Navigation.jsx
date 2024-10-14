import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" width="100px" />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <button>Get started</button>
    </div>
  );
};

export default Navigation;
