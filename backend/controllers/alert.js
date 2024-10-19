const Alert = require('../models/Alert');

// Create a new alert
exports.createAlert = async (req, res) => {
  try {
    const alert = new Alert(req.body);
    await alert.save();
    res.status(201).json(alert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all alerts
exports.getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find().populate('machine');
    res.status(200).json(alerts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single alert by ID
exports.getAlertById = async (req, res) => {
  try {
    const alert = await Alert.findById(req.params.id).populate('machine');
    if (!alert) return res.status(404).json({ message: 'Alert not found' });
    res.status(200).json(alert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an alert by ID
exports.updateAlert = async (req, res) => {
  try {
    const alert = await Alert.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!alert) return res.status(404).json({ message: 'Alert not found' });
    res.status(200).json(alert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an alert by ID
exports.deleteAlert = async (req, res) => {
  try {
    const alert = await Alert.findByIdAndDelete(req.params.id);
    if (!alert) return res.status(404).json({ message: 'Alert not found' });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
