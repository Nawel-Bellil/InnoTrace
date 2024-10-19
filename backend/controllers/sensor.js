const Sensor = require("../models/Sensor");

// Create a sensor
exports.createSensor = async (req, res) => {
  try {
    const { type, unit, status, machineId } = req.body;

    // Check if a valid machineId is provided
    const machine = await Machine.findById(machineId);
    if (!machine) {
      return res.status(404).json({ message: "Machine not found" });
    }

    const sensor = new Sensor({ type, unit, status, machineId });
    await sensor.save();

    // Add sensor to the machine's sensors array
    machine.sensors.push(sensor._id);
    await machine.save();

    res.status(201).json(sensor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Get all sensors
exports.getSensors = async (req, res) => {
  try {
    const sensors = await Sensor.find().populate("machineId");
    res.status(200).json(sensors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a sensor by ID
exports.getSensorById = async (req, res) => {
  try {
    const sensor = await Sensor.findById(req.params.id).populate("machineId");
    if (!sensor) {
      return res.status(404).json({ message: "Sensor not found" });
    }
    res.status(200).json(sensor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a sensor by ID
exports.updateSensor = async (req, res) => {
  try {
    const { machineId } = req.body;

    // If machineId is being updated, validate the new machine
    if (machineId) {
      const machine = await Machine.findById(machineId);
      if (!machine) {
        return res.status(404).json({ message: "Machine not found" });
      }
    }

    const sensor = await Sensor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!sensor) {
      return res.status(404).json({ message: "Sensor not found" });
    }

    res.status(200).json(sensor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a sensor by ID
exports.deleteSensor = async (req, res) => {
  try {
    const sensor = await Sensor.findById(req.params.id);
    if (!sensor) {
      return res.status(404).json({ message: "Sensor not found" });
    }

    // Remove sensor from the associated machine's sensors array
    await Machine.findByIdAndUpdate(sensor.machineId, {
      $pull: { sensors: sensor._id },
    });

    await sensor.remove();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
