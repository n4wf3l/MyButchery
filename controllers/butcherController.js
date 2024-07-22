const Butcher = require("../models/Butcher");

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
    res.status(500).json({ message: error.message });
  }
};

const getButchers = async (req, res) => {
  try {
    const butchers = await Butcher.find();
    res.status(200).json(butchers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getButcher = async (req, res) => {
  try {
    const butchery = await Butcher.findById(req.params.id);
    if (!butchery)
      return res.status(404).json({ message: "Butchery not found" });
    res.status(200).json(butchery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
    const photo = req.file ? req.file.filename : null;

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

    if (!updatedButcher)
      return res.status(404).json({ message: "Butchery not found" });
    res.status(200).json(updatedButcher);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteButcher = async (req, res) => {
  try {
    const deletedButcher = await Butcher.findByIdAndDelete(req.params.id);
    if (!deletedButcher)
      return res.status(404).json({ message: "Butchery not found" });
    res.status(200).json({ message: "Butchery deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createButcher,
  getButchers,
  getButcher,
  updateButcher,
  deleteButcher,
};
