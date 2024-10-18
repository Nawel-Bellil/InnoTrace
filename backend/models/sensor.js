// models/Sensor.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const sensorSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., 'temperature', 'vibration', 'energy'
  value: { type: Number, required: true }, // Last recorded value
  unit: { type: String }, // Unit of measurement (e.g., 'Celsius', 'Hz', 'kWh')
  machine: { type: Schema.Types.ObjectId, ref: 'Machine' }, // Reference to the machine this sensor is attached to
  status: { type: String, enum: ['active', 'inactive', 'error'], default: 'active' }, // Sensor status
  timestamp: { type: Date, default: Date.now }, // When the data was last recorded
}, { timestamps: true });

const Sensor = mongoose.model('Sensor', sensorSchema);
module.exports = Sensor;
