// src/pages/ButcheriesPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";

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
      {butcheries.length > 0 ? (
        <ul>
          {butcheries.map((butchery) => (
            <li key={butchery._id}>
              <h2>{butchery.name}</h2>
              <p>{butchery.description}</p>
              {butchery.photo && (
                <img
                  src={`http://localhost:5000/uploads/${butchery.photo}`}
                  alt={butchery.name}
                />
              )}
              <p>Address: {butchery.address}</p>
              <p>City: {butchery.city}</p>
              <p>Postal Code: {butchery.postalCode}</p>
              <p>Country: {butchery.country}</p>
              <p>Phone Number: {butchery.phoneNumber}</p>
              <p>Email: {butchery.email}</p>
              <p>
                Website:{" "}
                <a
                  href={butchery.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {butchery.website}
                </a>
              </p>
              <p>Opening Hours: {butchery.openingHours}</p>
              <p>Halal: {butchery.halal ? "Yes" : "No"}</p>
              <p>Beef: {butchery.beef ? "Available" : "Not Available"}</p>
              <p>Chicken: {butchery.chicken ? "Available" : "Not Available"}</p>
              <p>Lamb: {butchery.lamb ? "Available" : "Not Available"}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No butcheries available.</p>
      )}
    </div>
  );
};

export default ButcheriesPage;
