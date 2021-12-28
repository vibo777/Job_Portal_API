const mongoose = require('mongoose');

// JobProvider schema 
const JobProviderSchema = new mongoose.Schema({

    name :{type:String, required:true},
    email :{type:String, required:true,unique:true},
    username :{type:String, required:true,unique:true},
    password :{type:String, required:true},
    contact:{type:Number,required:true},
    location:{type:String,required:true},   
    gender:{type:String,required:true},
    address:{type:String,required:true}       
   
},{timestamps:true})

const jobproviderModel = new mongoose.model('jobprovider',JobProviderSchema);
module.exports = jobproviderModel;    


// Job Seeker Schema
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

const jobseekerModel = new mongoose.Model('jobSeeker',JobProviderSchema);
module.exports = jobseekerModel;
