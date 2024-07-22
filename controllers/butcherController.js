const Butcher = require("../models/Butcher");

// Créer une nouvelle boucherie
const createButcher = async (req, res) => {
  try {
    const {
      name,
      description,
      address,
      postalCode,
      city,
      country,
      phoneNumber,
      email,
      website,
      openingHours,
      halal,
      beef,
      chicken,
      lamb,
    } = req.body;

    const photo = req.file ? req.file.filename : null;

    const newButcher = new Butcher({
      name,
      description,
      photo,
      address,
      postalCode,
      city,
      country,
      phoneNumber,
      email,
      website,
      openingHours,
      halal,
      beef,
      chicken,
      lamb,
    });

    await newButcher.save();
    res.status(201).json(newButcher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir la liste de toutes les boucheries
const getButchers = async (req, res) => {
  try {
    const butchers = await Butcher.find();
    res.status(200).json(butchers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir les détails d'une seule boucherie par son ID
const getButcher = async (req, res) => {
  try {
    const butcher = await Butcher.findById(req.params.id);
    if (!butcher) {
      return res.status(404).json({ message: "Butchery not found" });
    }
    res.status(200).json(butcher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Mettre à jour une boucherie par son ID
const updateButcher = async (req, res) => {
  try {
    const {
      name,
      description,
      address,
      postalCode,
      city,
      country,
      phoneNumber,
      email,
      website,
      openingHours,
      halal,
      beef,
      chicken,
      lamb,
    } = req.body;

    const photo = req.file ? req.file.filename : req.body.photo;

    const updatedButcher = await Butcher.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        photo,
        address,
        postalCode,
        city,
        country,
        phoneNumber,
        email,
        website,
        openingHours,
        halal,
        beef,
        chicken,
        lamb,
      },
      { new: true }
    );

    if (!updatedButcher) {
      return res.status(404).json({ message: "Butchery not found" });
    }

    res.status(200).json(updatedButcher);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer une boucherie par son ID
const deleteButcher = async (req, res) => {
  try {
    const deletedButcher = await Butcher.findByIdAndDelete(req.params.id);
    if (!deletedButcher) {
      return res.status(404).json({ message: "Butchery not found" });
    }
    res.status(200).json({ message: "Butchery deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createButcher,
  getButchers,
  getButcher,
  updateButcher,
  deleteButcher,
};
