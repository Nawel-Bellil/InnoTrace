const mongoose = require('mongoose');
const { Schema } = mongoose;

const shiftSchema = new Schema({
  shiftName: { type: String, required: true }, // e.g., 'Morning Shift', 'Night Shift'
  startTime: { type: Date, required: true }, // Shift start time
  endTime: { type: Date, required: true }, // Shift end time
}, { timestamps: true });

const Shift = mongoose.model('Shift', shiftSchema);
module.exports = Shift;
