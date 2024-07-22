require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
