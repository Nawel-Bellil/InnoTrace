const express = require('express');
const Task = require('../models/task'); 
const Machine = require('../models/machine'); 
const User = require('../models/user'); // Assuming the User model is in the models folder

// Create a task
route.post('/create-task',isUserOperator, addTask);
