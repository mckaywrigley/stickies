// Imports
const mongoose = require("mongoose");

// Initialize Schema
const Schema = mongoose.Schema;

// Create Schema
const StickySchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

// Export
module.exports = Sticky = mongoose.model("sticky", StickySchema);
