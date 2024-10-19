### Cahier de Charge

#### Project Title: Production Scheduling System

#### **1. Project Overview**
The Production Scheduling System aims to facilitate efficient production management by enabling administrators to schedule, track, and manage production tasks. The system incorporates features for tracking production status, handling production schedules, and notifying users about tasks and updates.

#### **2. Key Features Implemented**

1. **Production Management**
   - **Create Production**: Admins can create new production entries by specifying details such as `productId`, `productionLine`, `requiredQuantity`, `startTime`, and other relevant information.
   - **Read Productions**: Admins can retrieve all production records or specific records by production ID, providing visibility into the current production statuses.
   - **Update Production**: Admins can update existing production records, modifying fields such as `requiredQuantity`, `successfulQuantity`, and `status`.
   - **Delete Production**: Admins have the capability to remove production records when they are no longer needed.

2. **Production Tracking**
   - Track the progress of production tasks, including successful and defective quantities.
   - Capture details about the production process, such as the machine used, defects detected, and the steps in the production line.

3. **Role Separation**
   - **Roles Defined**: The system separates user roles into three categories: Manager, Operator, and User. This delineation allows for clearer responsibilities and access levels within the system.
   - **Organized Workflow with Shifts**: Implemented a structured workflow that incorporates shifts to optimize production scheduling and resource management.

4. **Exclusive Access for Admin**
   - Admins have exclusive access to manage all data within the system, ensuring that sensitive operations are secured and can be performed only by authorized personnel.

5. **Task Scheduling Automation**
   - Implemented automation for scheduling production tasks based on predefined criteria. This feature reduces manual intervention and optimizes resource allocation.

6. **Robust Alert Detection**
   - Enhanced alert detection capabilities to monitor production processes. The system uses conditions on sensors to identify defects and anomalies, ensuring timely intervention and maintaining quality control.

7. **Notification System**
   - A notification system has been implemented to alert users about task statuses, such as production start, completion, or halting. This enhances communication and helps in monitoring production processes effectively.

8. **Alerts Detection**
   - Real-time alerts are generated for detected anomalies or issues during production, ensuring timely intervention to mitigate risks.

9. **User Access Management**
   - Only administrators have access to certain features, ensuring that sensitive operations are secured and managed appropriately.

#### **3. Technical Specifications**
- **Technology Stack**: 
  - Backend: Node.js with Express framework
  - Database: MongoDB (using Mongoose for schema definitions)
  - Frontend: (Not specified but could be integrated if required)
  
- **Schema Definitions**:
  - **Product Schema**: Contains fields like `productId`, `name`, `category`, `description`, and `createdAt`.
  - **Production Schema**: Contains fields such as `productId`, `productionLine`, `requiredQuantity`, `successfulQuantity`, `defectiveQuantity`, `startTime`, `endTime`, `status`, and references to `Machine` and `Shift`.

#### **4. API Endpoints**
- **POST /api/production**: Create a new production entry.
- **GET /api/production**: Retrieve all production entries.
- **GET /api/production/:id**: Retrieve a specific production entry by ID.
- **PUT /api/production/:id**: Update a specific production entry by ID.
- **DELETE /api/production/:id**: Delete a specific production entry by ID.

#### **5. Testing and Validation**
- Used Postman for API testing to ensure all endpoints function as intended.
- Validated that the system can handle production scheduling, updates, notifications, and alerts effectively.

#### **6. Future Enhancements**
- **Energy Log**: Introduce a logging system to monitor energy consumption during production, helping to identify areas for efficiency improvements.
- **Frontend Interface**: Consider integrating a frontend interface for better user experience.
- **Expanded Notification Channels**: Expand the notification system to include different channels (e.g., email or SMS).
- **Production Analytics**: Implement analytics to monitor production efficiency and performance over time.
