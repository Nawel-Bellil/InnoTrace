// models/EnergyLog.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const energyLogSchema = new mongoose.Schema({
  machine: { type: Schema.Types.ObjectId, ref: 'Machine', required: true },
  energyUsage: { type: Number, required: true },
  recordedAt: { type: Date, default: Date.now },
}, { timestamps: true });

const EnergyLog = mongoose.model('EnergyLog', energyLogSchema);
module.exports = EnergyLog;


/*monitor performnce in real-time
-energy consumption patterns
-peak usage identification
-optimize energy cost */