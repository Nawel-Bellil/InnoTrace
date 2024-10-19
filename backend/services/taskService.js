const Machine = require('../models/Machine');
const Task = require('../models/task');
const User = require('../models/user');
const Alert = require('../models/alert');

// Helper function to assign a user to a task
const assignUserToTask = async (taskType) => {
    try {
        const availableUsers = await User.find({ role: 'operator' }); // Only operators perform tasks
        if (availableUsers.length === 0) {
            throw new Error('No available users to assign tasks.');
        }

        // Logic to assign the least busy user or random user
        let selectedUser = availableUsers[Math.floor(Math.random() * availableUsers.length)];
        return selectedUser;
    } catch (error) {
        throw new Error(`Error in user assignment: ${error.message}`);
    }
};

// Function to schedule tasks based on machine status and create tasks if necessary
exports.scheduleTasks = async () => {
    try {
        // Fetch all machines
        const machines = await Machine.find().populate('sensors');

        for (let machine of machines) {
            if (machine.status === 'maintenance') {
                // Check if the machine already has a maintenance task scheduled
                const existingTask = await Task.findOne({ machine: machine._id, taskType: 'maintenance', status: 'pending' });

                if (!existingTask) {
                    // No existing maintenance task, create a new one
                    const assignedUser = await assignUserToTask('maintenance');
                    const newTask = new Task({
                        machine: machine._id,
                        assignedTo: assignedUser._id,
                        taskType: 'maintenance',
                        status: 'pending',
                        scheduledAt: new Date(), 
                    });
                    await newTask.save();
                    console.log(`Scheduled new maintenance task for machine: ${machine.name}`);
                } else {
                    console.log(`Maintenance task for machine: ${machine.name} already exists.`);
                }
            }

            // Example: Similar logic for error or inspection
            if (machine.status === 'error') {
                const existingTask = await Task.findOne({ machine: machine._id, taskType: 'repair', status: 'pending' });

                if (!existingTask) {
                    const assignedUser = await assignUserToTask('repair');
                    const newTask = new Task({
                        machine: machine._id,
                        assignedTo: assignedUser._id,
                        taskType: 'repair',
                        status: 'pending',
                        scheduledAt: new Date(),
                    });
                    await newTask.save();
                    console.log(`Scheduled new repair task for machine: ${machine.name}`);
                } else {
                    console.log(`Repair task for machine: ${machine.name} already exists.`);
                }
            }
        }
    } catch (error) {
        console.error('Error scheduling tasks:', error.message);
    }
};


//fetch available with operator role
// checking machine status to specify tasks : maintenance/ repair
//fetch random users and assign tasks 