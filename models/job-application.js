// job id 
// seeker id 
// by default status of job application will be pending
// status : pending[defualt], approved , Reject   


const { status } = require('express/lib/response');
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({

    jobid:{type:mongoose.Schema.Types.ObjectId,ref:"job"},
    seekerId:{type:mongoose.Schema.Types.ObjectId,ref:"job"},
    jobstatus:{type:String,status:pending}

})

const applicationModel = new mongoose.Model('application',applicationSchema);
module.export = applicationModel;
