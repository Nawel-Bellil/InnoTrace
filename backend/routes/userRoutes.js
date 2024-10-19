const express=require("express");
const authToken=require("../middlewares/authToken.js");
const isUserManager=require("../middlewares/isUserManager.js");
const {delete_user,change_role,getAllUsers}=require("../controllers/userController.js")


const route=express.Router();




//delete user

/**
 * @swagger
 * /api/user/delete-user:
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
 *                 example: "user@example.com"
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

// change user's role
/**
 * @swagger
 * /api/user/change_role:
 *   patch:
 *     summary: Change a user's role
 *     description: Allows updating the role of a user. Roles like "manager" cannot be downgraded.
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
 *                 description: The email of the user whose role is being changed.
 *               role:
 *                 type: string
 *                 example: operator
 *                 description: The new role to assign (valid roles: operator, user, manager).
 *             required:
 *               - email
 *               - role
 *     responses:
 *       200:
 *         description: Role updated successfully
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
 *                   example: "User role has been updated to operator"
 *       400:
 *         description: Bad Request - Invalid role or missing information
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
 *                   example: "Invalid role provided. Valid roles are: operator, user, manager"
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
 *                   example: "User not found"
 *       401:
 *         description: Unauthorized - Cannot change a user's role who is a manager
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
 *                   example: "You can't change a Manager's role"
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
route.patch("/change_role",isUserManager,change_role);


//get all users
/**
 * @swagger
 * /api/user/get_all_users:
 *   get:
 *     summary: Retrieve a list of all users
 *     description: Fetches all users and returns their email, role, and name. This endpoint requires authentication.
 *     tags: [User Management]
 *     security:
 *       - bearerAuth: []  # JWT authentication
 *     responses:
 *       200:
 *         description: List of users retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       email:
 *                         type: string
 *                         format: email
 *                         example: user@example.com
 *                         description: The user's email address.
 *                       role:
 *                         type: string
 *                         example: operator
 *                         description: The role assigned to the user.
 *                       name:
 *                         type: string
 *                         example: John Doe
 *                         description: The user's name.
 *       404:
 *         description: No users found
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
 *                   example: "No users found"
 *       401:
 *         description: Unauthorized access
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
 *                   example: "Unauthorized"
 *       500:
 *         description: Server error
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
route.get("/get_all_users",authToken,getAllUsers)



module.exports=route
