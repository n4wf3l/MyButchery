// models/Order.js
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  ],
  total: { type: Number, required: true },
  deliveryFee: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "delivered", "cancelled"],
    default: "pending",
  },
  deliveryman: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);
