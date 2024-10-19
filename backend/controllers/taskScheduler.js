const { scheduleTasks } = require('../services/taskService');

exports.scheduleTasks = async (req, res) => {
    try {
        await scheduleTasks();
        res.status(200).send("Tasks successfully scheduled.");
    } catch (error) {
        res.status(500).send(`Task scheduling failed: ${error.message}`);
    }
};
