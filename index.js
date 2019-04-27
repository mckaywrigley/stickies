// Imports
const express = require("express");
const cors = require("cors");

// Initialize
const app = express();
app.use(cors());

// Routes
const stickyRoutes = require("./routes/stickyRoutes");

// Middleware
app.use(express.json());

// Use Routes
app.use("/api/stickies", stickyRoutes);

// Run Server
app.listen(4000, () => {
  console.log("Server running.");
});
