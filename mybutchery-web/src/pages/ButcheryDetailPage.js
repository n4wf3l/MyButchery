// src/pages/ButcheryDetailPage.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ButcheryDetailPage = () => {
  const { id } = useParams();
  const [butchery, setButchery] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/butcheries/${id}`)
      .then((response) => {
        setButchery(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!butchery) return <div>Loading...</div>;

  return (
    <div>
      <h2>{butchery.name}</h2>
      <p>{butchery.description}</p>
      <img
        src={`http://localhost:5000/${butchery.photo}`}
        alt={butchery.name}
      />
      <p>
        <strong>Address:</strong> {butchery.address}
      </p>
      <p>
        <strong>City:</strong> {butchery.city}
      </p>
      <p>
        <strong>Postal Code:</strong> {butchery.postalCode}
      </p>
      <p>
        <strong>Country:</strong> {butchery.country}
      </p>
      <p>
        <strong>Phone Number:</strong> {butchery.phoneNumber}
      </p>
      <p>
        <strong>Email:</strong> {butchery.email}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={butchery.website}>{butchery.website}</a>
      </p>
      <p>
        <strong>Opening Hours:</strong> {butchery.openingHours}
      </p>
      <p>
        <strong>Halal:</strong> {butchery.halal ? "Yes" : "No"}
      </p>
      <p>
        <strong>Beef:</strong> {butchery.beef ? "Available" : "Not Available"}
      </p>
      <p>
        <strong>Chicken:</strong>{" "}
        {butchery.chicken ? "Available" : "Not Available"}
      </p>
      <p>
        <strong>Lamb:</strong> {butchery.lamb ? "Available" : "Not Available"}
      </p>
    </div>
  );
};

export default ButcheryDetailPage;
