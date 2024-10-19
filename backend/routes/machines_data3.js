const express=require("express");
const isUserManager=require("../middlewares/isUserManager.js");



const route=express.Router();


route.post('/:machineId', async (req, res) => {
    const { machineId } = req.params;
    const sensorData = req.body; // the sensor data comes in the body

    console.log(`machine is ${machineId}`);
    console.log(req.body)

    try {
        // Here, you can handle the incoming sensor data
        console.log(`Received data for machine ${machineId}:`, sensorData);

        // // Optionally, you can update the machine data in MongoDB if needed
        // await Machine.updateOne({ machineId }, { $set: { ...sensorData } });

        res.status(200).json({ message: 'Data received successfully!' });
    } catch (error) {
        console.error('Error processing machine data:', error);
        res.status(500).json({ message: 'Error processing machine data', error });
    }
});


module.exports=route