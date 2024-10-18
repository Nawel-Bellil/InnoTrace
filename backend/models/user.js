const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["manager", "operator", "operatorSupervisor"],
      required: true,
    },
    assignedMachines: [{ type: Schema.Types.ObjectId, ref: "Machine" }],
    assignedShifts: [{ type: Schema.Types.ObjectId, ref: "Shift" }] // Added field for assigned shifts
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
