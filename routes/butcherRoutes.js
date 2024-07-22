const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  createButcher,
  getButchers,
  getButcher,
  updateButcher,
  deleteButcher,
} = require("../controllers/butcherController");
const authMiddleware = require("../middleware/authMiddleware");

// Configuration de multer pour le téléchargement des fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Routes pour les opérations CRUD sur les boucheries
router.post(
  "/",
  authMiddleware(["admin"]),
  upload.single("photo"),
  createButcher
);
router.get("/", getButchers);
router.get("/:id", getButcher);
router.put(
  "/:id",
  authMiddleware(["admin"]),
  upload.single("photo"),
  updateButcher
);
router.delete("/:id", authMiddleware(["admin"]), deleteButcher);

module.exports = router;
