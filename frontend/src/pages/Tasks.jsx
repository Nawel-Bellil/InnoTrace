import React, { useState } from 'react';
import tasksData from '../tasks_data';  // Importing the tasks data

const Tasks = () => {
    const [tasks, setTasks] = useState(tasksData);  // State for managing tasks
    const [showModal, setShowModal] = useState(false);  // Modal visibility
    const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'Low', people: '' });

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
            status: "To Do",  // Default status
            priority: newTask.priority,
            title: newTask.title,
            description: newTask.description,
            people: newTask.people.split(',').map(person => person.trim())  // Array of people
        };
        setTasks([...tasks, newTaskObject]); // Update state with the new task
        setShowModal(false);  // Close modal after adding task
        setNewTask({ title: '', description: '', priority: 'Low', people: '' });  // Reset form
    };

    return (
        <div className="p-5">
            <h1 className="text-4xl font-bold mb-8">Explore Tasks</h1>

            {/* Add Task Button */}
            <div className="flex justify-between mb-4">
                <button 
                    className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-400 transition"
                    onClick={() => setShowModal(true)}
                >
                    <i className="fas fa-plus"></i> Add Task
                </button>
            </div>

            {/* Task Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* To Do Column */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">To Do</h2>
                    {tasks.filter(task => task.status === "To Do").map(task => (
                        <div key={task.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
                            <h3 className="text-lg font-bold">{task.title}</h3>
                            <p className="text-sm text-gray-600">{task.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className={`text-sm font-medium ${task.priority === 'High' ? 'text-red-500' : 'text-yellow-500'}`}>
                                    {task.priority} Priority
                                </span>
                                <span className="text-sm text-gray-500">Assigned to: {task.people.join(', ')}</span>
                            </div>
                            {/* Mark as Done Button */}
                            <button 
                                className="mt-4 bg-green-500 text-white p-2 rounded shadow hover:bg-green-400 transition"
                                onClick={() => markAsDone(task.id)}
                            >
                                Mark as Done
                            </button>
                        </div>
                    ))}
                </div>

                {/* Done Column */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Done</h2>
                    {tasks.filter(task => task.status === "Done").map(task => (
                        <div key={task.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
                            <h3 className="text-lg font-bold">{task.title}</h3>
                            <p className="text-sm text-gray-600">{task.description}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-sm font-medium text-green-600">Completed</span>
                                <span className="text-sm text-gray-500">Assigned to: {task.people.join(', ')}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Adding Task */}
            {showModal && (
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
                        <select
                            value={newTask.priority}
                            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                            className="block w-full mb-2 p-2 border rounded"
                        >
                            <option value="Low">Low Priority</option>
                            <option value="High">High Priority</option>
                        </select>
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
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Tasks;
