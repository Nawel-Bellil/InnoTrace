// models/Machine.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const machineSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Machine name or identifier
  type: { type: String}, // e.g., 'stamping_press', 'welding_robot', 'AGV'
  status: { type: String, enum: ['operational', 'maintenance', 'error'], default: 'operational' }, // Machine status
  location: { type: String }, // Optional, where the machine is located in the factory
  lastMaintenance: { type: Date }, // When the machine was last maintained
}, { timestamps: true });

const Machine = mongoose.model('Machine', machineSchema);
module.exports = Machine;
