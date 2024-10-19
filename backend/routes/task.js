const express = require('express');
const router = express.Router();
const task = require('../controllers/task');

// Create a new task
router.post('/', task.createTask);

// Get all tasks
router.get('/', task.getTasks);

// Get a task by ID
router.get('/:id', task.getTaskById);

// Update a task by ID
router.put('/:id', task.updateTask);

// Delete a task by ID
router.delete('/:id', task.deleteTask);

module.exports = router;
