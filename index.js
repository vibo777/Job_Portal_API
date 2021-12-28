const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const brcyptjs = require('bcryptjs');
const cors = require('cors');

//import Modules 
const users = require('./models/users');
const jobs = require('./models/Jobs');
const application = require('./models/job-application');
const jobModel = require('./models/Jobs');

// Mongodb connection 
mongoose.connect("mongodb://localhost:27017/job-portal-api")
.then(()=>{console.log("MongoDB Connection successful")})
.catch(()=>{console.log("MongoDB Connection Failed")})


// Express Object  
const app = express();
app.use(express.json());


// End-points to create





// 6. update job - put
// 7. delete job - delete   
// 8. send file i.e Resume - post 


// 1. Registration
app.post("/register",(req,res)=>{
    
    let user = req.body;

    //  it will convert normal textual password into encrypted one  
    //  (genSalt) this function tell's us how many round you want to do & it will generate random salt i.e mixture  

    bcryptjs.genSalt(10,(err,salt)=>{

        
        if(err===null){
            // pass old password , salt it will give newpassword
            bcryptjs.hash(user.password,salt,(err,newpassword)=>{
           
                // updated it with old password
                user.password = newpassword;

                // save the new encrypted password in database 
                
                let userOBJ = new userModel(user);
                userOBJ.save()
                .then(()=>{
                    res.send({message:"User is Registered"})
                })
                .catch((err)=>{
                    console.log(err);
                    res.send({message:"Problem in creating the user"}) 
                })
       
            })
        }
    })

})

// 2. Login
app.post("/login",(req,res)=>{

    // Whatever username & password pass in body it will store in userCred 
    let userCred = req.body;

    // we try to find person with that username 
    userModel.findOne({username:userCred.username})
    .then((user)=>{
        // if we found username, if block will executed 
        if(user!=null){

            // we are checking the previous encrypted password with new encrypted password using bcryptjs.compare() method  
            bcryptjs.compare(userCred.password,user.password,(err,status)=>{
                if(status === true){
        
                   jwt.sign(userCred,"secretkey",(err,token)=>{
                        if(err===null){
                            res.send({message:"welcome user",token:token});
                        }
                   })   
                }
                else{
                    res.send({message:"Password don't match"})
                }    
            })

        }  
        // if we don't found username else block executed 
        else{
            res.send({message:"User is not found"});
        }     
    })
    .catch((err)=>{
        console.log(err);
        res.send({message:"Some problem"});
    })
})

// 3. Get All jobs - get  
// Using find() method
app.get("./jobs",async(req,res)=>{
    let jobs = await jobModel.find();
    res.send(jobs);
}) 

// 4. Get one job  - get 
// using findOne() method 
app.get("/jobs/:id",async(req,res)=>{

    let id = req.params.id; // read the id
    let job = await applicationModel.find({_id:id}); // find one job based on id 
    res.send(job); 
})

// 5. Add new job  - post

app.post("./job",(req,res)=>{

    let job = req.body;
    let jobOBJ = new jobModel(job);     
    
    jobOBJ.save()
    .then(()=>{
        res.send({message:"job is created"});
    })
    .catch((err)=>{
        console.log(err);
        res.send({message:"Error while creating job"});
    })

})



app.listen(3000);   