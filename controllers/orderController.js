// controllers/orderController.js
const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const { products, total, deliveryFee } = req.body;
  try {
    const order = new Order({
      client: req.user.userId,
      products,
      total,
      deliveryFee,
      status: "pending",
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ client: req.user.userId }).populate(
      "products"
    );
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    order.status = status;
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
