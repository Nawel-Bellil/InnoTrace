const User=require("../models/user");
const hash=require("../lib/hash");
const jwtUtil = require("../lib/jwt");

//login controler
const loginUser = async(req,res)=>{
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
   
   
   
   
   }



//create-user controller
const create_user=async(req,res)=>{

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

        // check that role is valid
        const validRoles = ["operator", "user", "manager"]; 
        if (!validRoles.includes(role.toLowerCase())) {
          return res.status(400).json({
            error: true,
            message: `Invalid role provided. Valid roles are: ${validRoles.join(", ")}`,
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
}


module.exports = {
    loginUser,
    create_user
  };