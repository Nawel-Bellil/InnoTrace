import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import machinesData from '../constants/data_machin';  // Replace with your data source

const Machines = () => {
    const [machines, setMachines] = useState(machinesData);  // State for managing machines
    const [searchTerm, setSearchTerm] = useState('');  // State for filtering
    const [showAddModal, setShowAddModal] = useState(false);  // Add machine modal
    const [showDeleteModal, setShowDeleteModal] = useState({ visible: false, machineId: null });  // Delete confirmation modal
    const [newMachine, setNewMachine] = useState({
        machine_id: '', 
        force_applied: '', 
        cycle_time: '', 
        temperature: '', 
        vibration_level: '', 
        cycle_count: '', 
        oil_pressure: '', 
        die_alignment: '', 
        sheet_thickness: '', 
        power_consumption: '', 
        noise_level: '', 
        lubrication_flow_rate: '', 
        timestamp: ''
    });
    const [selectedMachine, setSelectedMachine] = useState(null);  // To hold the clicked machine data

    // Handle search functionality
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Filter machines by search term
    const filteredMachines = machines.filter(machine => 
        machine.machine_id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Add machine functionality
    const handleAddMachine = () => {
        const newMachineObject = { ...newMachine };
        setMachines([...machines, newMachineObject]);
        setShowAddModal(false);  // Close modal
        setNewMachine({
            machine_id: '', 
            force_applied: '', 
            cycle_time: '', 
            temperature: '', 
            vibration_level: '', 
            cycle_count: '', 
            oil_pressure: '', 
            die_alignment: '', 
            sheet_thickness: '', 
            power_consumption: '', 
            noise_level: '', 
            lubrication_flow_rate: '', 
            timestamp: ''
        });  // Reset form
    };
    

    // Delete machine functionality
    const handleDeleteMachine = (machineId) => {
        const updatedMachines = machines.filter(machine => machine.machine_id !== machineId);
        setMachines(updatedMachines);
        setShowDeleteModal({ visible: false, machineId: null });
    };

    // Handle machine click to show stats
    const handleMachineClick = (machine) => {
        setSelectedMachine(machine);
    };

    return (
        <div className="p-5">
            <h1 className="text-4xl font-bold mb-8">Explore Machines</h1>

            {/* Search Bar */}
            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search Machine by ID"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="p-2 border rounded w-full md:w-1/2"
                />

                {/* Add Machine Button */}
                <button
                    className="ml-4 bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-400 transition"
                    onClick={() => setShowAddModal(true)}
                >
                    <i className="fas fa-plus"></i> Add Machine
                </button>
            </div>

            {/* Machine List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMachines.map(machine => (
                    <motion.div 
                        key={machine.machine_id} 
                        className="bg-white p-4 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-200" // Hover effect
                        onClick={() => handleMachineClick(machine)}  // Machine click
                        whileHover={{ scale: 1.05 }} // Framer Motion hover effect
                        initial={{ opacity: 0, scale: 0.8 }} // Initial animation when items appear
                        animate={{ opacity: 1, scale: 1 }} // Final state after animation
                        transition={{ duration: 0.3 }} // Animation duration
                    >
                        <h3 className="text-lg font-bold">{machine.machine_id}</h3>
                        <p className="text-sm text-gray-600">Force Applied: {machine.force_applied} tons</p>
                        {/* Add more machine properties here */}
                        <div className="mt-4 flex justify-between">
                            {/* Delete Button */}
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering machine click
                                    setShowDeleteModal({ visible: true, machineId: machine.machine_id });
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Add Machine Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Add New Machine</h2>
                        <input
                            type="text"
                            placeholder="Machine ID"
                            value={newMachine.machine_id}
                            onChange={(e) => setNewMachine({ ...newMachine, machine_id: e.target.value })}
                            className="block w-full mb-2 p-2 border rounded"
                        />
                        {/* More input fields for machine properties */}
                        <button
                            className="bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-400 transition"
                            onClick={handleAddMachine}
                        >
                            Add Machine
                        </button>
                        <button
                            className="ml-4 bg-red-500 text-white p-2 rounded shadow hover:bg-red-400 transition"
                            onClick={() => setShowAddModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal.visible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Delete Machine</h2>
                        <p>Are you sure you want to delete machine {showDeleteModal.machineId}?</p>
                        <button
                            className="bg-red-500 text-white p-2 rounded shadow hover:bg-red-400 transition"
                            onClick={() => handleDeleteMachine(showDeleteModal.machineId)}
                        >
                            Yes
                        </button>
                        <button
                            className="ml-4 bg-gray-500 text-white p-2 rounded shadow hover:bg-gray-400 transition"
                            onClick={() => setShowDeleteModal({ visible: false, machineId: null })}
                        >
                            No
                        </button>
                    </div>
                </div>
            )}

            {/* Machine Stats Modal */}
            {selectedMachine && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Machine Stats</h2>
                        <p><strong>Machine ID:</strong> {selectedMachine.machine_id}</p>
                        <p><strong>Force Applied:</strong> {selectedMachine.force_applied} tons</p>
                        <p><strong>Cycle Time:</strong> {selectedMachine.cycle_time} seconds</p>
                        <p><strong>Temperature:</strong> {selectedMachine.temperature} °C</p>
                        <p><strong>Vibration Level:</strong> {selectedMachine.vibration_level} mm/s</p>
                        <p><strong>Cycle Count:</strong> {selectedMachine.cycle_count}</p>
                        <p><strong>Oil Pressure:</strong> {selectedMachine.oil_pressure} bar</p>
                        <p><strong>Die Alignment:</strong> {selectedMachine.die_alignment}</p>
                        <p><strong>Sheet Thickness:</strong> {selectedMachine.sheet_thickness} mm</p>
                        <p><strong>Power Consumption:</strong> {selectedMachine.power_consumption} kWh</p>
                        <p><strong>Noise Level:</strong> {selectedMachine.noise_level} dB</p>
                        <p><strong>Lubrication Flow Rate:</strong> {selectedMachine.lubrication_flow_rate} ml/min</p>
                        <p><strong>Timestamp:</strong> {new Date(selectedMachine.timestamp).toLocaleString()}</p>

                        <button
                            className="mt-4 bg-gray-500 text-white p-2 rounded shadow hover:bg-gray-400 transition"
                            onClick={() => setSelectedMachine(null)}  // Close modal
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Machines;
