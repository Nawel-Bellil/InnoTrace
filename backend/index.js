require('dotenv').config(); 
const express = require("express"); 
const cors = require("cors"); 
const authRoute=require("./routes/authRoutes")
const connectToDB = require("./lib/connectToDB");

const app = express(); 

// Middleware
app.use(cors()); 
app.use(express.json()); 


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
  