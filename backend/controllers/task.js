const Task = require('../models/task');
const User = require('../models/user'); 
const Machine = require('../models/machine'); 


// Create a new task
exports.createTask = async (req, res) => {
  const { machineId, userId, taskType, scheduledAt } = req.body;

  if (!machineId || !userId || !taskType || !scheduledAt) {
    return res.status(400).json({
      error: true,
      message: 'Please provide all required fields',
    });
  }

  try {
    // Verify if the machine exists
    const machine = await Machine.findById(machineId);
    if (!machine) {
      return res.status(404).json({
        error: true,
        message: `Machine with ID '${machineId}' not found.`,
      });
    }

    // Verify if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        error: true,
        message: `User with ID '${userId}' not found.`,
      });
    }

    // Create a new task
    const task = new Task({
      machine: machine._id,
      assignedTo: user._id,
      taskType,
      scheduledAt,
    });

    await task.save();

    return res.status(201).json({
      error: false,
      message: 'Task created successfully',
      task,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: 'Server error, please try again later.',
    });
  }
};

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('machine assignedTo');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('machine assignedTo');
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a task by ID
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
