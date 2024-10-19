const express = require('express');
const router = express.Router();
const production = require('../controllers/production');

// Middleware for authentication/authorization
const { authenticate, authorize } = require('../middleware/auth');

// Admin routes
router.post('/schedule', authenticate, authorize('admin'), production.scheduleProduction); // Schedule a new production
router.get('/scheduled', authenticate, authorize('admin'), production.getScheduledProductions); // Get all scheduled productions
router.put('/start/:id', authenticate, authorize('admin'), production.startProduction); // Start a production
router.put('/update/:id', authenticate, authorize('admin'), production.updateScheduledProduction); // Update a scheduled production

module.exports = router;
