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
router.post("/", (req, res) => {
  const { title, description } = req.body;
  new Sticky(req.body)
    .save()
    .then(sticky => {
      return res.status(201).json(sticky);
    })
    .catch(err => {
      return res.status(400).json({ error: "Sticky could not be created." });
    });
});

// Delete---
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Sticky.findByIdAndDelete(id)
    .then(sticky => {
      return res.status(200).json(sticky);
    })
    .catch(err => {
      return res.status(404).json({ error: "Sticky could not be deleted." });
    });
});

// Update---
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  Sticky.findByIdAndUpdate(id, req.body)
    .then(sticky => {
      return res.status(200).json(sticky);
    })
    .catch(err => {
      return res.status(400).json({ error: "Sticky could not be updated." });
    });
});

// Export
module.exports = router;
