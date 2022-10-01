// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const EventSchema = new Schema(
  {
    topic: { type: String, required: true },
    hostTime: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String, max: 500 },
    createdBy: { type: String, required: true },
    industy: { type: String, required: true },
    likedBy: { type: [String] }
  },
  {
    timestamps: true,
  },
);

// Compile model from schema
module.exports = mongoose.model('Event', EventSchema);