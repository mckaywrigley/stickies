// Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Initialize
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// Use Routes
app.use("/api/stickies", stickyRoutes);

// PORT
const port = process.env.PORT || 5000;

// Run Server
app.listen(port, () => {
  console.log("Server running.");
});
