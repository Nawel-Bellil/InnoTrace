require('dotenv').config(); 
const express = require("express"); 
const cors = require("cors"); 
const connectToDB = require("./lib/connectToDB");

// Import routes
const user = require('./routes/user');
const product = require('./routes/product');
const production = require('./routes/production');
const sensor = require('./routes/sensor');
const shift = require('./routes/shift');
const task = require('./routes/task');
const alert = require('./routes/alert');
const energyLog = require('./routes/energyLog');
const machine = require('./routes/machine');

const app = express(); 

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Integrate 
app.use('/api/users', user);
app.use('/api/products', product);
app.use('/api/productions', production);
app.use('/api/sensors', sensor);
app.use('/api/shifts', shift);
app.use('/api/tasks', task);
app.use('/api/alerts', alert);
app.use('/api/energy-logs', energyLog);
app.use('/api/machines', machine);



const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
app.listen(PORT,async () => {
    console.log(`Server is running on port ${PORT}`);
    try{
        await connectToDB(MONGO_URI);
    }catch{
        console.log("error in connection to database ");
    }
  });
  