const express=require("express");
const authToken=require("../middlewares/authToken.js");
const isUserManager=require("../middlewares/isUserManager.js");
const {delete_user}=require("../controllers/userController.js")


const route=express.Router();




//delete user

/**
 * @swagger
 * /user/delete-user:
 *   delete:
 *     summary: Delete a user account
 *     description: Deletes a user account by email. Only accessible by managers. Accounts with manager privileges cannot be deleted.
 *     tags: [User Management]
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
 *                 format: email
 *                 example: user@example.com
 *                 description: The email of the account to delete.
 *             required:
 *               - email
 *     responses:
 *       200:
 *         description: Account deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Account deleted successfully"
 *       400:
 *         description: Bad Request - Email not provided
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "please provide the email of the account to delete"
 *       404:
 *         description: Not Found - User with the provided email does not exist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "User with this email not found"
 *       401:
 *         description: Unauthorized - Cannot delete a user with manager privileges
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "the User is a Manager"
 *       500:
 *         description: Server error - Something went wrong on the server side
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Server error, please try again later"
 */

route.delete("/delete-user", isUserManager, delete_user);



module.exports=route