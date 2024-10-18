const express = require('express');
const router = express.Router();
const alert = require('../controllers/alert');

// Create a new alert
router.post('/', alert.createAlert);

// Get all alerts
router.get('/', alert.getAlerts);

// Get an alert by ID
router.get('/:id', alert.getAlertById);

// Update an alert by ID
router.put('/:id', alert.updateAlert);

// Delete an alert by ID
router.delete('/:id', alert.deleteAlert);

module.exports = router;
