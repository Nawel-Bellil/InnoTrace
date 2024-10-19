const Machine = require('../models/Machine');

// Create a new machine
// Create a new machine
exports.createMachine = async (req, res) => {
  try {
    const { name, type, status, location } = req.body;

    // Basic validation
    if (!name || !type || !status || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const machine = new Machine(req.body);
    await machine.save();
    res.status(201).json(machine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Get all machines
exports.getMachines = async (req, res) => {
  try {
    const machines = await Machine.find().populate('sensors');
    res.status(200).json(machines);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single machine by ID
exports.getMachineById = async (req, res) => {
  try {
    const machine = await Machine.findById(req.params.id).populate('sensors');
    if (!machine) return res.status(404).json({ message: 'Machine not found' });
    res.status(200).json(machine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a machine by ID
exports.updateMachine = async (req, res) => {
  try {
    const updatedMachine = await Machine.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!updatedMachine) return res.status(404).json({ message: 'Machine not found' });
    res.status(200).json(updatedMachine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Delete a machine by ID
exports.deleteMachine = async (req, res) => {
  try {
    const machine = await Machine.findById(req.params.id);

    if (!machine) {
      return res.status(404).json({ message: 'Machine not found' });
    }

    //delete the related sensors
    await Sensor.deleteMany({ machineId: machine._id });

    await machine.remove();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

