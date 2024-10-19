const express = require('express');
const router = express.Router();
const sensor = require('../controllers/sensor');

// Create a new sensor
router.post('/', sensor.createSensor);

// Get all sensors
router.get('/', sensor.getSensors);

// Get a sensor by ID
router.get('/:id', sensor.getSensorById);

// Update a sensor by ID
router.put('/:id', sensor.updateSensor);

// Delete a sensor by ID
router.delete('/:id', sensor.deleteSensor);

module.exports = router;
