// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true, min: 5, max: 20, unique: true },
    password: { type: String, required: true, min: 6 },
    email: { type: String, max: 50 },
    profilePictureUrl: { type: String }
  },
  {
    timestamps: true,
  },
);

// Compile model from schema
module.exports = mongoose.model('User', UserSchema);
