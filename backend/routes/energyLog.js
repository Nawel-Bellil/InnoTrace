const express = require('express');
const router = express.Router();
const energyLog = require('../controllers/energyLog');

// Create a new energy log
router.post('/', energyLog.createEnergyLog);

// Get all energy logs
router.get('/', energyLog.getEnergyLogs);

// Get an energy log by ID
router.get('/:id', energyLog.getEnergyLogById);

// Update an energy log by ID
router.put('/:id', energyLog.updateEnergyLog);

// Delete an energy log by ID
router.delete('/:id', energyLog.deleteEnergyLog);

module.exports = router;
