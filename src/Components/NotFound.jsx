import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const NotFound = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  return (
    <div>
      <h2>404 | Page not found</h2>
      <br />
      <button onClick={() => navigate("/")}>Go to homepage</button>{" "}
      {/* Navigate to homepage */}
    </div>
  );
};

export default NotFound;
