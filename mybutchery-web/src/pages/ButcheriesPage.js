// src/pages/ButcheriesPage.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ButcheriesPage = () => {
  const [butcheries, setButcheries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/butcheries")
      .then((response) => {
        setButcheries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Our Butcheries</h1>
      <ul>
        {butcheries.map((butchery) => (
          <li key={butchery._id}>
            <h2>{butchery.name}</h2>
            <img
              src={`http://localhost:5000/uploads/${butchery.photo}`}
              alt={butchery.name}
              style={{ width: "100px" }}
            />
            <p>{butchery.city}</p>
            <Link to={`/butcheries/${butchery._id}`}>Voir Plus</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButcheriesPage;
