// seedAdmin.js
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

const adminData = {
  name: "Admin",
  email: "admin@hotmail.com",
  password: "password", // Mot de passe en clair
  role: "admin",
};

async function seedAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Vérifiez si un administrateur existe déjà
    const existingAdmin = await User.findOne({ email: adminData.email });
    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    // Créez un nouvel utilisateur admin
    const admin = new User(adminData);
    await admin.save();
    console.log("Admin user created");
  } catch (error) {
    console.error("Error seeding admin user:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedAdmin();
