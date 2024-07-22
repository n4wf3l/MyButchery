// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware("butcher"), createProduct);
router.get("/", authMiddleware(), getProducts);
router.get("/:id", authMiddleware(), getProductById);
router.put("/:id", authMiddleware("butcher"), updateProduct);
router.delete("/:id", authMiddleware("butcher"), deleteProduct);

module.exports = router;
