const express = require('express');
const router = express.Router();
const { scheduleTasks } = require('../controllers/taskScheduler');

// POST /api/tasks/schedule
router.post('/schedule', scheduleTasks);

module.exports = router;
