const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productionSchema = new Schema({
  productId: {
    type: String,
    required: true, // Use the productId from the Product model
  },
  productionLine: {
    type: String, // e.g., 'Vehicle Assembly Line', 'Engine Assembly Line'
    required: true,
  },
  requiredQuantity: {
    type: Number,
    required: true, // Total number of units to be produced
  },
  successfulQuantity: {
    type: Number,
    default: 0, // Count of successfully produced units
  },
  defectiveQuantity: {
    type: Number,
    default: 0, // Count of defective units
  },
  defectiveMachine: {
    type: Schema.Types.ObjectId,
    ref: 'Machine', // Machine where a defect was detected
  },
  defectDetectionStep: {
    type: String, // e.g., 'Welding', 'Painting'
  },
  startTime: {
    type: Date,
    required: true, // When the production started
  },
  endTime: {
    type: Date, // When the production ended
  },
  scheduledStartTime: {
    type: Date, // When the production is scheduled to start
    required: true,
  },
  scheduledEndTime: {
    type: Date, // When the production is scheduled to end
    required: true,
  },
  status: {
    type: String,
    enum: ['In Progress', 'Completed', 'Halted'], // Production status
    default: 'In Progress',
  },
  shiftId: { type: Schema.Types.ObjectId, ref: 'Shift' }, // Reference to the Shift model
  assignedTeam: {
    type: String, // Optional: to assign a specific team
  },
});

module.exports = mongoose.model('Production', productionSchema);
