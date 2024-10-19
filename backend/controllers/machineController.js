const { response } = require('express');
const Machine = require('../models/machine'); // Assuming Machine model is in models folder
const axios = require('axios');


const backendUrl = process.env.BACKEND_URL;
const externalAPI=process.env.EXTERNALAPI;
const addMachine=async (req, res) => {
    const { machineId,location,type } = req.body;

    try {
        // Subscribe to the machine via the external API

        const callbackUrl = `${backendUrl}/machines_data3/${machineId}`;

        
        const response = await axios.post(`${externalAPI}`, {
            machine: machineId,
            callback_url: callbackUrl
        });

        console.log('Subscribed successfully:', response.data);
 
        // Save the machine details to MongoDB
        const machine = new Machine({
            name: machineId,
            type: type,
            location: location,
            status: 'operational', // Assuming new machines are operational by default
            lastMaintenance: new Date() // Or handle this based on the input or default value
        });

        await machine.save();

        // Respond with success
        res.status(200).json({ message: 'Machine added and subscribed successfully!', machine });
    } catch (error) {
        console.error('Error adding and subscribing machine:');
        const errormessage=error.response.data || error // in case it's fetching the api error we display it
        res.status(500).json({ message: 'Error adding and subscribing machine', error:errormessage });
    }
}
 

module.exports={
    addMachine
}