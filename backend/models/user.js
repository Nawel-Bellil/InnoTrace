// models/User.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["manager", "operator", "user"],
    },
    assignedMachines: [{ type: Schema.Types.ObjectId, ref: "Machine" }], // Operators and Supervisors may have assigned machines
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
