const mongoose = require("mongoose");

const DeliverySchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  deliveryman: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["assigned", "in-progress", "completed", "cancelled"],
    default: "assigned",
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Delivery", DeliverySchema);
