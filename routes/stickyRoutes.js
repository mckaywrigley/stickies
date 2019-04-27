// Imports
const express = require("express");

// Initialize Router
const router = express.Router();

// Sticky Model
const Sticky = require("../models/Sticky");

// Middleware

// ---Endpoints---

// Read---

// Gets all stickies.
router.get("/", (req, res) => {
  Sticky.find()
    .then(stickies => {
      return res.status(200).json(stickies);
    })
    .catch(err => {
      return res.status(404).json({ error: "Stickies could not be found." });
    });
});

// Gets a single sticky.
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Sticky.findById(id)
    .then(sticky => {
      return res.status(200).json(sticky);
    })
    .catch(err => {
      return res.status(404).json({ error: "Sticky could not be found." });
    });
});

// Create---

// Delete---

// Update---

// Export
module.exports = router;
