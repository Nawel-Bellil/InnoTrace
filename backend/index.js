require('dotenv').config(); 
const express = require("express"); 
const cors = require("cors"); 
const authRoute=require("./routes/authRoutes")
const connectToDB = require("./lib/connectToDB");
const swaggerJSDoc=require("swagger-jsdoc")
const swaggerUi=require("swagger-ui-express")


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
  