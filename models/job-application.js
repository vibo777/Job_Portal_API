// job id 
// seeker id 
// by default status of job application will be pending
// status : pending[defualt], approved , Reject   


const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({

    jobid:{type:mongoose.Schema.Types.ObjectId,ref:"job"},
    seekerId:{type:mongoose.Schema.Types.ObjectId,ref:"job"},
    jobstatus:{type:String,default:'pending',enum:['pending','reject','approved']}

})

const applicationModel = new mongoose.model('application',applicationSchema);
module.export = applicationModel;
