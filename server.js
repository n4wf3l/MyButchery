const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Créer une application Express
const app = express();

// Utiliser le middleware
app.use(bodyParser.json());
app.use(cors());

// Importer les routes
const butcherRoutes = require("./routes/butcherRoutes");

// Utiliser les routes
app.use("/api/butcheries", butcherRoutes);

// Connexion à MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/mybutchery", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Démarrer le serveur
const server = app.listen(5000, () => {
  console.log("Server running on port 5000");
});
