const Machine = require('../models/Machine');
const Task = require('../models/Task');
const User = require('../models/user');

// Helper function to assign a user to a task
const assignUserToTask = async () => {
    try {
        const availableUsers = await User.find({ role: 'operator' }); // Only operators perform tasks
        if (availableUsers.length === 0) {
            throw new Error('No available users to assign tasks.');
        }

        // Logic to assign a random user from the available operators
        const selectedUser = availableUsers[Math.floor(Math.random() * availableUsers.length)];
        return selectedUser;
    } catch (error) {
        throw new Error(`Error in user assignment: ${error.message}`);
    }
};

// Function to schedule tasks based on machine status and create tasks if necessary
exports.scheduleTasks = async () => {
    try {
        // Fetch all machines and populate their sensors
        const machines = await Machine.find().populate('sensors');

        for (const machine of machines) {
            // Check for maintenance tasks
            if (machine.status === 'maintenance') {
                await handleTaskScheduling(machine, 'maintenance');
            }

            // Check for repair tasks
            if (machine.status === 'error') {
                await handleTaskScheduling(machine, 'repair');
            }

            // Check for canceled tasks and reschedule
            await rescheduleCanceledTasks(machine);
        }
    } catch (error) {
        console.error('Error scheduling tasks:', error.message);
    }
};

// Helper function to handle task scheduling
const handleTaskScheduling = async (machine, taskType) => {
    try {
        const existingTask = await Task.findOne({ machine: machine._id, taskType, status: 'pending' });

        if (!existingTask) {
            const assignedUser = await assignUserToTask();
            const newTask = new Task({
                machine: machine._id,
                assignedTo: assignedUser._id,
                taskType,
                status: 'pending',
                scheduledAt: new Date(),
            });
            await newTask.save();
            console.log(`Scheduled new ${taskType} task for machine: ${machine.name}`);
        } else {
            console.log(`${taskType.charAt(0).toUpperCase() + taskType.slice(1)} task for machine: ${machine.name} already exists.`);
        }
    } catch (error) {
        console.error(`Error scheduling ${taskType} task for machine ${machine.name}:`, error.message);
    }
};

// Function to reschedule canceled tasks
// Function to reschedule canceled tasks
const rescheduleCanceledTasks = async (machine) => {
    try {
        const canceledTasks = await Task.find({ machine: machine._id, status: 'canceled' });

        for (const task of canceledTasks) {
            // Create a new task to replace the canceled one
            const assignedUser = await assignUserToTask();
            const newTask = new Task({
                machine: machine._id,
                assignedTo: assignedUser._id,
                taskType: task.taskType, // Use the same task type as the canceled task
                status: 'pending',
                scheduledAt: new Date(),
            });
            await newTask.save();

            // Update the status of the canceled task to 'replaced'
            task.status = 'replaced'; // Or keep it 'canceled'
            await task.save();

            console.log(`Rescheduled ${task.taskType} task for machine: ${machine.name}, replacing canceled task.`);
        }
    } catch (error) {
        console.error(`Error rescheduling canceled tasks for machine ${machine.name}:`, error.message);
    }
};
