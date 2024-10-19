const cron = require('node-cron');
const { scheduleTasks } = require('../services/taskService');

// Schedule task every 6 hours
cron.schedule('0 */6 * * *', async () => {
    try {
        await scheduleTasks();
        console.log('Tasks scheduled successfully.');
    } catch (error) {
        console.error('Error scheduling tasks:', error.message);
    }
});
