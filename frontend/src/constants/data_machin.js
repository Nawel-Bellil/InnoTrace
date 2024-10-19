const machineData = [
    {
        machine_id: "welding_robot_001",
        force_applied: 500, // in tons
        cycle_time: 12, // in seconds
        temperature: 75, // in °C
        vibration_level: 0.8, // in mm/s
        cycle_count: 1500, // count of cycles
        oil_pressure: 3.5, // in bar
        die_alignment: "aligned", // status
        sheet_thickness: 1.2, // in mm
        power_consumption: 12.5, // in kWh
        noise_level: 85, // in dB
        lubrication_flow_rate: 0.6, // in ml/min
        timestamp: "2024-10-14T10:30:00Z"
    },
    {
        machine_id: "stamping_press_001",
        force_applied: 600,
        cycle_time: 14,
        temperature: 78,
        vibration_level: 0.7,
        cycle_count: 2000,
        oil_pressure: 4.0,
        die_alignment: "misaligned",
        sheet_thickness: 1.5,
        power_consumption: 15.0,
        noise_level: 90,
        lubrication_flow_rate: 0.5,
        timestamp: "2024-10-15T11:45:00Z"
    }
];

export default machineData;
