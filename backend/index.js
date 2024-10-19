require('dotenv').config(); 
const express = require("express"); 
const cors = require("cors"); 
const authRoute=require("./routes/authRoutes");
const userRoute=require("./routes/userRoutes");
const machineRoute=require("./routes/machineRoute");
const machinedataRoute=require("./routes/machines_data3")
const connectToDB = require("./lib/connectToDB");

const app = express(); 

// Middleware
app.use(cors()); 
app.use(express.json()); 

const swaggerOptions={
    swaggerDefinition:{
        openapi:'3.0.0',
        info:{
            version:'1.0.0',
            title:'Swagger setup',
            description:'swagger documentaion for devfest challenge',
            servers:[ { url: 'http://localhost:3000' }, // Local server
                { url: 'https://77e4-197-204-120-153.ngrok-free.app' }, // Ngrok server
                { url: 'https://innotrace.onrender.com' },],
        },
        schemes:['http','https'],

    },    
    apis:["./routes/*.js"]
}

const swaggerDocs= swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));



// auth route
app.use("/auth",authRoute);

//user route
app.use("/user",userRoute);


  //machine route
app.use("/machine",machineRoute)

/// machine data (test)

app.use("/machines_data3",machinedataRoute)

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
  