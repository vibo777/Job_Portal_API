const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({

    title:{type:String,required:true},
    description:{type:String,required:true},
    available:{type:Boolean,default:true} 

})

const jobModel =  mongoose.model('jobs',jobSchema);
module.exports = jobModel;

