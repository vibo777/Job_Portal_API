const mongoose = require('mongoose');

// create user schema 

const JobProviderSchema = new mongoose.Schema({

    name :{type:String, required:true},
    email :{type:String, required:true,unique:true},
    username :{type:String, required:true,unique:true},
    password :{type:String, required:true},         
   
},{timestamps:true})

const JobSeekerSchema = new mongoose.Schema({

    name :{type:String, required:true},
    email :{type:String, required:true,unique:true},
    username :{type:String, required:true,unique:true},
    password :{type:String, required:true},   
     
    contact:{type:Number,required:true},
    location:{type:String,required:true},   
    gender:{type:String,required:true},
    address:{type:String,required:true}

},{timestamps:true})


