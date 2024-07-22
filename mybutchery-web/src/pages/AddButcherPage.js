import React, { useState } from "react";
import axios from "axios";
import AuthService from "../services/authService";

const AddButcherPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
    phoneNumber: "",
    email: "",
    website: "",
    openingHours: "",
    halal: false,
    beef: false,
    chicken: false,
    lamb: false,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const butcherData = new FormData();
    for (const key in formData) {
      butcherData.append(key, formData[key]);
    }

    const currentUser = AuthService.getCurrentUser();

    if (currentUser && currentUser.token) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/butcheries",
          butcherData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${currentUser.token}`,
            },
          }
        );
        console.log(response.data);
        // Rediriger ou afficher un message de succès
      } catch (error) {
        console.error(
          "Error in Axios request:",
          error.response ? error.response.data : error.message
        );
      }
    } else {
      console.error("No user token found");
    }
  };

  return (
    <div>
      <h2>Add Butchery</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Opening Hours</label>
          <input
            type="text"
            name="openingHours"
            value={formData.openingHours}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Halal</label>
          <input
            type="checkbox"
            name="halal"
            checked={formData.halal}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Beef</label>
          <input
            type="checkbox"
            name="beef"
            checked={formData.beef}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Chicken</label>
          <input
            type="checkbox"
            name="chicken"
            checked={formData.chicken}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Lamb</label>
          <input
            type="checkbox"
            name="lamb"
            checked={formData.lamb}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Butchery</button>
      </form>
    </div>
  );
};

export default AddButcherPage;
