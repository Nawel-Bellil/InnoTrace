const express = require('express');
const router = express.Router();
const shift = require('../controllers/shift');

// Create a new shift
router.post('/', shift.createShift);

// Get all shifts
router.get('/', shift.getShifts);

// Get a shift by ID
router.get('/:id', shift.getShiftById);

// Update a shift by ID
router.put('/:id', shift.updateShift);

// Delete a shift by ID
router.delete('/:id', shift.deleteShift);

module.exports = router;
