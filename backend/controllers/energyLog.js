const EnergyLog = require('../models/energyLog');

// Create a new energy log
exports.createEnergyLog = async (req, res) => {
  try {
    const energyLog = new EnergyLog(req.body);
    await energyLog.save();
    res.status(201).json(energyLog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all energy logs
exports.getEnergyLogs = async (req, res) => {
  try {
    const energyLogs = await EnergyLog.find().populate('machine');
    res.status(200).json(energyLogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single energy log by ID
exports.getEnergyLogById = async (req, res) => {
  try {
    const energyLog = await EnergyLog.findById(req.params.id).populate('machine');
    if (!energyLog) return res.status(404).json({ message: 'Energy log not found' });
    res.status(200).json(energyLog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an energy log by ID
exports.updateEnergyLog = async (req, res) => {
  try {
    const energyLog = await EnergyLog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!energyLog) return res.status(404).json({ message: 'Energy log not found' });
    res.status(200).json(energyLog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an energy log by ID
exports.deleteEnergyLog = async (req, res) => {
  try {
    const energyLog = await EnergyLog.findByIdAndDelete(req.params.id);
    if (!energyLog) return res.status(404).json({ message: 'Energy log not found' });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
