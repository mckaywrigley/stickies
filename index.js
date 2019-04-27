// Imports
const express = require("express");
const cors = require("cors");

// Initialize
const app = express();
app.use(cors());

// Routes

// Middleware
app.use(express.json());

// Use Routes

// Run Server
app.listen(4000, () => {
  console.log("Server running.");
});
