const mongoose = require('mongoose');
const { Schema } = mongoose;

const sensorSchema = new Schema({
  type: { type: String, required: true }, // e.g., 'temperature', 'vibration', 'energy'
  unit: { type: String }, // Unit of measurement (e.g., 'Celsius', 'Hz', 'kWh')
  status: { type: String, enum: ['active', 'inactive', 'error'], default: 'active' }, // Sensor status
  machineId: { type: Schema.Types.ObjectId, ref: 'Machine' } // Foreign key to Machine
}, { timestamps: true });

const Sensor = mongoose.model('Sensor', sensorSchema);
module.exports = Sensor;
