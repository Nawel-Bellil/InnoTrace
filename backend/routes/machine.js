const express = require('express');
const router = express.Router();
const machine = require('../controllers/machine');
const isUserManager=require("../middlewares/isUserManager")
const {addMachine}=require('../controllers/machineController')

// Create a new machine
router.post('/add_machine',isUserManager,addMachine);

// Get all machines
router.get('/', machine.getMachines);

// Get a machine by ID
router.get('/:id', machine.getMachineById);

// Update a machine by ID
router.put('/:id', machine.updateMachine);

// Delete a machine by ID
router.delete('/:id', machine.deleteMachine);

module.exports = router;
