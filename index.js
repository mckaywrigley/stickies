// Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Initialize
const app = express();
app.use(cors());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected."))
  .catch(err => console.log(err));

// Routes
const stickyRoutes = require("./routes/stickyRoutes");

// Middleware
app.use(express.json());

// Use Routes
app.use("/api/stickies", stickyRoutes);

// PORT
const port = process.env.PORT || 5000;

// Run Server
app.listen(port, () => {
  console.log("Server running.");
});
