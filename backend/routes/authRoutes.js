const express=require("express");
const User=require("../models/user");
const hash=require("../lib/hash");
const jwtUtil = require("../lib/jwt");
const authToken=require("../middlewares/authToken.js");


const route=express.Router();
//login

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     description: Authenticate a user and return an access token.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 accessToken:
 *                   type: string
 *       400:
 *         description: Invalid credentials or missing fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                 errormessage:
 *                   type: object
 *                 message:
 *                   type: string
 */


route.post("/login",async(req,res)=>{
 const {email,password}=req.body
 if(!email){
    return res.status(400).json({error:true,
        message:"Email is required"});
}
if(!password){
    return res.status(400).json({error:true,
        message:"Password is required"});
}


try{
    console.log("here is 1")
    const user= await User.findOne({email});
    console.log("here is 2")
if(!user){
    return res.status(400).json({
        error:true,
        message:"User don't exist"});
}

const isValidPassword = await hash.comparePassword(password, user.password);
console.log("here is 3")
 if(!isValidPassword){
    return res.status(400).json({
        error:true,
        message:"Invalid credentials"});
 }

 console.log("here is 4")
 const accessToken=jwtUtil.generateToken(user._id);
 console.log("here is 5")

 return res.json({
     error:false,
     message:"Login Successful",
     accessToken,
 });


}catch(error){

    return res.status(500).json({
        error:true,
        errormessage:error,
        message:"Server error, please try again later"
    });

}




})


//create account

/**
 * @swagger
 * /auth/create-user:
 *   post:
 *     summary: Create a new user
 *     description: Register a new user with an email and password. Only accessible by managers.
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []  # Specify your auth method if using JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: newuser@example.com
 *               name:
 *                 type: string
 *                 example: New User
 *               password:
 *                 type: string
 *                 example: password123
 *               role:
 *                 type: string
 *                 example: manager
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     email:
 *                       type: string
 *                     name:
 *                       type: string
 *       400:
 *         description: Missing fields or user already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       403:
 *         description: Only managers can create users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                 errormessage:
 *                   type: object
 *                 message:
 *                   type: string
 */
route.post("/create-user",authToken,async(req,res)=>{


    const owner=req.user
    if(owner.role!='manager'){
        return res.status(403).json({
            error:true,
            message:"only admin have permission for this opperation",
        })
    }

    const {email,name,password,role}=req.body
    if(!email || !name || !password){
        return res.status(400).json({
            error:true,
            message:"Provide all the credentials",
        })
    }

try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        error: true,
        message: "User with this email already exists",
      });
    }

    // Hash the password before storing it
    const hashedPassword = await hash.hashPassword(password);

    // Create a new user
    const newUser = new User({
      email,
      name,
      password: hashedPassword,
      role: role || 'operator'
    });

    await newUser.save();

    return res.status(201).json({
      error: false,
      message: "User created successfully",
      user: {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
        password
      },
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      errormessage: error,
      message: "Server error, please try again later",
    });
  }
});




module.exports=route