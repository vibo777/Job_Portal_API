const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const brcyptjs = require('bcryptjs');
const cors = require('cors');

//import Modules 
const users = require('./models/users');
const jobs = require('./models/Jobs');
const application = require('./models/job-application');

// Mongodb connection 
mongoose.connect("mongodb://localhost:27017/job-portal-api")
.then(()=>{console.log("MongoDB Connection successful")})
.catch(()=>{console.log("MongoDB Connection Failed")})


// Express Object  
const app = express();
app.use(express.json());


// End-points to create
// 1. Registration
// 2. Login
// 3. Get All jobs - get  
// 4. Get one job  - get 
// 5. Add new job  - post
// 6. update job - put
// 7. delete job - delete   
// 8. send file i.e Resume - post 

