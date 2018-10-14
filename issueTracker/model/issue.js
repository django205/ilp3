const mongoose=require('mongoose');

const issueSchema=new mongoose.Schema({
    description:String,
    severity:{type:String},
    status:{ type:String},
    createdDate:Date,
    resolvedDate:Date,
    selected:Boolean
});

const Issue= module.exports=mongoose.model('issue',issueSchema);