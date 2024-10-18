const Sensor = require('../models/Sensor');

// Create a sensor
exports.createSensor = async (req, res) => {
  try {
    const sensor = new Sensor(req.body);
    await sensor.save();
    res.status(201).json(sensor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all sensors
exports.getSensors = async (req, res) => {
  try {
    const sensors = await Sensor.find();
    res.status(200).json(sensors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a sensor by ID
exports.getSensorById = async (req, res) => {
  try {
    const sensor = await Sensor.findById(req.params.id);
    if (!sensor) {
      return res.status(404).json({ message: 'Sensor not found' });
    }
    res.status(200).json(sensor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a sensor by ID
exports.updateSensor = async (req, res) => {
  try {
    const sensor = await Sensor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!sensor) {
      return res.status(404).json({ message: 'Sensor not found' });
    }
    res.status(200).json(sensor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a sensor by ID
exports.deleteSensor = async (req, res) => {
  try {
    const sensor = await Sensor.findByIdAndDelete(req.params.id);
    if (!sensor) {
      return res.status(404).json({ message: 'Sensor not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
