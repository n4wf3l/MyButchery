// src/pages/DashboardPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleAddButchery = () => {
    navigate("/addbutchery");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={handleAddButchery}>Add Butchery</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
        risus ut aliquam vehicula.
      </p>
    </div>
  );
};

export default DashboardPage;
