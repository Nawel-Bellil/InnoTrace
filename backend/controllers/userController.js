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



module.exports={
    delete_user,
}