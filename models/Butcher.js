const mongoose = require("mongoose");

const butcherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  postalCode: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String },
  openingHours: { type: String, required: true },
  halal: { type: Boolean, required: true },
  beef: { type: Boolean, required: true },
  chicken: { type: Boolean, required: true },
  lamb: { type: Boolean, required: true },
  photo: { type: String, required: true },
});

module.exports = mongoose.model("Butcher", butcherSchema);
