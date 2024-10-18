// models/Alert.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const alertSchema = new mongoose.Schema({
  machine: { type: Schema.Types.ObjectId, ref: 'Machine', required: true },
  message: { type: String, required: true },
  level: { type: String, enum: ['info', 'warning', 'critical'], required: true },
  resolved: { type: Boolean, default: false },
}, { timestamps: true });

const Alert = mongoose.model('Alert', alertSchema);
module.exports = Alert;
