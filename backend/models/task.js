// models/Task.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new mongoose.Schema(
  {
    machine: { type: Schema.Types.ObjectId, ref: "Machine", required: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: "User", required: true },
    taskType: {
      type: String,
      enum: ["maintenance", "repair", "inspection"],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "canceled"],
      default: "pending",
    },
    scheduledAt: { type: Date, required: true },
    completedAt: { type: Date },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
