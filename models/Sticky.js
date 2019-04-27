// Imports
const mongoose = require("mongoose");

// Initialize Schema
const Schema = mongoose.Schema;

// Create Schema
const StickySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Export
module.exports = Sticky = mongoose.model("sticky", StickySchema);
