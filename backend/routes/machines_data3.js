const express=require("express");
const isUserManager=require("../middlewares/isUserManager.js");
const checkAlerts=require("../alghorithme/checkForAlerts.js")



const route=express.Router();


route.post('/:machineId', async (req, res) => {
    const { machineId } = req.params;
    const sensorData = req.body; // the sensor data comes in the body


    // Emit real-time sensor data to all connected clients
    req.io.emit('sensorData', { 
        data: sensorData 
    });

    

    const alertMessage=checkAlerts(sensorData);
    if(alertMessage){
        req.io.emit('alert', {
            message: alertMessage,
            machineId: machineId,
            sensorData: sensorData
        });
    }


    try {

        console.log(`Received data for machine ${machineId}:`, sensorData);

    
        // await Machine.updateOne({ machineId }, { $set: { ...sensorData } });

        res.status(200).json({ message: 'Data received successfully!' });
    } catch (error) {
        console.error('Error processing machine data:', error);
        res.status(500).json({ message: 'Error processing machine data', error });
    }
});


module.exports=route