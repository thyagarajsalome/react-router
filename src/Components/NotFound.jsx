// Components/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 | Page Not Found</h1>
      <br />

      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
