// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware("client"), createOrder);
router.get("/", authMiddleware(["client", "admin"]), getOrders);
router.put("/:id", authMiddleware(["admin", "deliveryman"]), updateOrderStatus);

module.exports = router;
