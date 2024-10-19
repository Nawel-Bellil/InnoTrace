const cron = require('node-cron');
const { scheduleTasks } = require('../services/taskService');

// Schedule task every hour (you can change the interval as needed)
cron.schedule('0 * * * *', async () => {
    try {
        await scheduleTasks();
        console.log('Tasks scheduled successfully.');
    } catch (error) {
        console.error('Error scheduling tasks:', error.message);
    }
});
