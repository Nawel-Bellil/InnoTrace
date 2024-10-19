
// the sensor data shouldn't be between min and max , an alert will be made if it's not
const thresholds = {
    welding_robot_006: {
        weldTemperature: { min: 1500, max: 1800 },
        weldCurrent: { min: 120, max: 200 },
        weldVoltage: { min: 24, max: 35 },
        weldTime: { min: 400, max: 600 },
        pressureApplied: { min: 900, max: 1100 },
        vibrationLevel: { max: 0.5 },
        powerConsumption: { max: 10 },
    },
    stamping_press_001: {
        forceApplied: { min: 450, max: 550 },
        cycleTime: { min: 0, max: 10 },
        temperature: { max: 80 },
        vibrationLevel: { max: 1 },
        oilPressure: { min: 3, max: 4 },
        powerConsumption: { max: 15 },
    },
    painting_robot_002: {
        sprayPressure: { min: 2, max: 5 },
        paintThickness: { min: 100, max: 200 },
        temperature: { min: 20, max: 30 },
        humidity: { max: 70 },
        paintFlowRate: { max: 5 },
        atomizerSpeed: { min: 18000, max: 22000 },
        oversprayCaptureEfficiency: { min: 90, max: 100 },
        boothAirflowVelocity: { max: 0.6 },
    },
    agv_003: {
        batteryLevel: { min: 20, max: 100 },
        loadWeight: { max: 800 },
        speed: { max: 2 },
        temperature: { max: 50 },
        vibrationLevel: { max: 0.5 },
        wheelRotationSpeed: { max: 600 },
    },
    cnc_milling_004: {
        spindleSpeed: { min: 1000, max: 20000 },
        toolWearLevel: { max: 50 },
        cutDepth: { max: 10 },
        feedRate: { min: 50, max: 400 },
        vibrationLevel: { max: 1 },
        coolantFlowRate: { min: 0.5, max: 2 },
        materialHardness: { max: 300 },
        temperature: { max: 70 },
        chipLoad: { max: 0.5 },
    },
    leak_test_005: {
        testPressure: { min: 3, max: 6 },
        pressureDrop: { max: 0.1 },
        leakRate: { max: 0.5 },
        testDuration: { min: 30, max: 60 },
        temperature: { min: 20, max: 30 },
        testCycleCount: { min: 0, max: 2000 },
    },
};

function checkAlerts(sensorData) {
    machineID=sensorData.machine_id
    const machineThresholds = thresholds[machineId];
    
    if (!machineThresholds) {
        return `No thresholds defined for machine ID: ${machineId}`;
    }
    
    for (const [sensor, value] of Object.entries(sensorData)) {
        const threshold = machineThresholds[sensor];
        if (threshold) {
            if (threshold.min !== undefined && value < threshold.min) {
                return `Problem with ${sensor}: value ${value} is below minimum ${threshold.min}`;
            }
            if (threshold.max !== undefined && value > threshold.max) {
                return `Problem with ${sensor}: value ${value} is above maximum ${threshold.max}`;
            }
        }
    }
    
    return null;
}

module.exports = checkAlerts;