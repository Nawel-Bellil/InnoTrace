const express = require('express');
const router = express.Router();
const production = require('../controllers/production');

// Create a new production
router.post('/', production.createProduction);

// Get all productions
router.get('/', production.getProductions);

// Get a production by ID
router.get('/:id', production.getProductionById);

// Update a production by ID
router.put('/:id', production.updateProduction);

// Delete a production by ID
router.delete('/:id', production.deleteProduction);

module.exports = router;
