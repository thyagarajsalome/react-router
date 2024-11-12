// RootLayout.js
import React from "react";
import Navigation from "../Components/Navigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
