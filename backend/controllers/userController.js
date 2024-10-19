const User=require("../models/user");
const hash=require("../lib/hash");
const jwtUtil = require("../lib/jwt");


const delete_user=async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            error: true,
            message: "please provide the email of the account to delete",
        });
    }

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                error: true,
                message: "User with this email not found",
            });
        }

        if(user.role==='manager'){
            return res.status(401).json({
                error: true,
                message: "the User is a Manager",
            });
        }

        // Delete the user
        await User.deleteOne({ email });

        return res.status(200).json({
            error: false,
            message: "Account deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Server error, please try again later",
        });
    }
}



const change_role=async (req, res) => {
    const {email,role}=req.body;
    if(!email || !role){
        return res.status(400).json({
            error: true,
            message: "please provide all the informations",
        });
    }
 
  const validRoles = ["operator", "user", "manager"]; 
  if (!validRoles.includes(role.toLowerCase())) {
    return res.status(400).json({
      error: true,
      message: `Invalid role provided. Valid roles are: ${validRoles.join(", ")}`,
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }

    if(user.role.toLowerCase()=='manager'){
        return res.status(400).json({
            error: true,
            message: "You can't change a Manager's role",
          });
    }

    user.role = role;
    await user.save();

    return res.json({
      error: false,
      message: `User role has been updated to ${role}`,
    });

  } catch (error) {
    return res.status(500).json({
      error: true,
      errormessage: error.message,
      message: "Server error, please try again later",
    });
  }
};



const getAllUsers = async (req, res) => {
    try {
      const users = await User.find({}, "email role name"); // fetch all users with only email, role, and name fields
  
      if (!users || users.length === 0) {
        return res.status(404).json({
          error: true,
          message: "No users found",
        });
      }
  
      return res.status(200).json({
        error: false,
        users,
      });
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: "Server error, please try again later",
        errormessage: error.message,
      });
    }
  };

module.exports={
    delete_user,
    change_role,
    getAllUsers
}