## Smart Analytics Platform for Car Manufacturing Operations
###Overview
The Smart Analytics Platform for Car Manufacturing Operations is designed to optimize and monitor car manufacturing processes in real time. The platform collects, analyzes, and visualizes sensor data from machines like welding robots, CNC milling machines, and AGVs to provide insights into production performance, energy efficiency, machine wear, and maintenance needs.

This platform features real-time machine monitoring, production tracking, defect logging, alert systems, and task scheduling, helping car manufacturers improve operational efficiency.

###Features
Real-time Monitoring: Track machine parameters such as temperature, vibration, and energy usage in real time.
Alert Systems: Receive notifications for performance issues, machine wear, or energy overuse.
Energy Monitoring: Measure and optimize energy consumption across machines.
Task Scheduling: Automate tasks like maintenance schedules based on machine data.
###Data Sources
The platform integrates with a Simulated Sensor Data API Server, which sends real-time data from six different types of machines. The machines and their sensor data include:

Welding Robots: Weld temperature, voltage, current
CNC Milling Machines: Vibration, energy usage
AGVs: Location, speed, energy usage
Stamping Presses: Pressure, stroke count
Industrial Ovens: Temperature, energy usage
Painting Robots: Paint flow rate, energy usage
Data is received via webhooks every 20 seconds, allowing for real-time analysis and decision-making.

###Tech Stack
Frontend: React (with hooks, state management, and dashboards)
Backend: Node.js, Express, MongoDB for data storage
API: Simulated Sensor Data API (Webhook-based)
Alerting: Custom alerting logic based on threshold values for each machine
Getting Started
Prerequisites
Node.js (v14+)
MongoDB (local or cloud-based)
React (v17+)



backend documentation here :https://innotrace.onrender.com/api-docs/#/

backend deployed here:https://innotrace.onrender.com
