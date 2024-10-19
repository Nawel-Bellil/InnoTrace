const express = require('express');
const isUserManager=require("../middlewares/isUserManager")
const {addMachine}=require('../controllers/machineController')


const router = express.Router();

// POST /add_machine
router.post('/add_machine',isUserManager,addMachine);

module.exports = router;