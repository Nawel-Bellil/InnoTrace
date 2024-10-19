import React, { useState } from 'react';
import tasksData from '../constants/tasks_data';  // Importing the tasks data

const Tasks = () => {
    const [tasks, setTasks] = useState(tasksData);  // State for managing tasks
    const [showAddModal, setShowAddModal] = useState(false);  // Add task modal visibility
    const [showCancelModal, setShowCancelModal] = useState({ visible: false, taskId: null });  // Cancel confirmation modal
    const [newTask, setNewTask] = useState({ title: '', description: '', people: '' });

    // Function to mark a task as done
    const markAsDone = (taskId) => {
        const updatedTasks = tasks.map(task => 
            task.id === taskId ? { ...task, status: 'Done' } : task
        );
        setTasks(updatedTasks);
    };

    // Function to handle adding a new task
    const handleAddTask = () => {
        const newTaskObject = {
            id: tasks.length + 1,  // Incremental ID
            status: "Pending",  // Default status
            title: newTask.title,
            description: newTask.description,
            people: newTask.people.split(',').map(person => person.trim())  // Array of people
        };
        setTasks([...tasks, newTaskObject]); // Update state with the new task
        setShowAddModal(false);  // Close modal after adding task
        setNewTask({ title: '', description: '', people: '' });  // Reset form
    };

    // Function to cancel a task
    const handleCancelTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        setShowCancelModal({ visible: false, taskId: null });
    };

    return (
        <div className="p-5">
            <h1 className="text-4xl font-bold mb-8">Task Management</h1>

            {/* Add Task Button */}
            <div className="flex justify-between mb-4">
                <button 
                    className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-400 transition"
                    onClick={() => setShowAddModal(true)}
                >
                    <i className="fas fa-plus"></i> Add Task
                </button>
            </div>

            {/* Task Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pending Tasks */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Task scheduling</h2>
                    {tasks.filter(task => task.status === "Pending").map(task => (
                        <div key={task.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
                            <h3 className="text-lg font-bold">{task.title}</h3>
                            <p className="text-sm text-gray-600">{task.description}</p>
                            <div className="mt-4">
                                <span className="text-sm text-gray-500">Assigned to: {task.people.join(', ')}</span>
                            </div>
                            {/* Action Buttons */}
                            <div className="flex justify-between mt-4">
                                <button 
                                    className="bg-green-500 text-white p-2 rounded shadow hover:bg-green-400 transition"
                                    onClick={() => markAsDone(task.id)}
                                >
                                    Mark as Done
                                </button>
                                <button 
                                    className="bg-red-500 text-white p-2 rounded shadow hover:bg-red-400 transition"
                                    onClick={() => setShowCancelModal({ visible: true, taskId: task.id })}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Done Tasks */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Done</h2>
                    {tasks.filter(task => task.status === "Done").map(task => (
                        <div key={task.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
                            <h3 className="text-lg font-bold">{task.title}</h3>
                            <p className="text-sm text-gray-600">{task.description}</p>
                            <div className="mt-4">
                                <span className="text-sm text-gray-500">Assigned to: {task.people.join(', ')}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add Task Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full space-y-4">
                        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
                        <input
                            type="text"
                            placeholder="Title"
                            value={newTask.title}
                            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                            className="block w-full mb-2 p-2 border rounded"
                        />
                        <textarea
                            placeholder="Description"
                            value={newTask.description}
                            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                            className="block w-full mb-2 p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="People (comma-separated)"
                            value={newTask.people}
                            onChange={(e) => setNewTask({ ...newTask, people: e.target.value })}
                            className="block w-full mb-4 p-2 border rounded"
                        />
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-400 transition"
                                onClick={handleAddTask}
                            >
                                Add Task
                            </button>
                            <button
                                className="ml-4 bg-red-500 text-white p-2 rounded shadow hover:bg-red-400 transition"
                                onClick={() => setShowAddModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Cancel Confirmation Modal */}
            {showCancelModal.visible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full space-y-4">
                        <h2 className="text-xl font-semibold mb-4">Cancel Task</h2>
                        <p>Are you sure you want to cancel this task?</p>
                        <div className="flex justify-end">
                            <button
                                className="bg-red-500 text-white p-2 rounded shadow hover:bg-red-400 transition"
                                onClick={() => handleCancelTask(showCancelModal.taskId)}
                            >
                                Yes, Cancel
                            </button>
                            <button
                                className="ml-4 bg-gray-500 text-white p-2 rounded shadow hover:bg-gray-400 transition"
                                onClick={() => setShowCancelModal({ visible: false, taskId: null })}
                            >
                                No, Keep Task
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Tasks;
